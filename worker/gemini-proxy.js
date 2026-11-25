// Gemini proxy for the Joe Westlake Painting dashboard (Cloudflare Worker).
//
// Locked down: a request is only forwarded to Gemini when
//   1. it comes from an allowed web origin (CORS), and
//   2. it carries a valid Firebase ID token for project joe-westlake-llc
//      (Authorization: Bearer <token>), and
//   3. that user is an approved member — members/{uid} exists in Firestore
//      (checked with the user's own token, so no service account is needed).
// Only the "contents" and "generationConfig" fields are forwarded, the body size
// is capped, and each user is rate limited (best effort, per worker instance).
//
// Secrets / vars (see worker/README.md):
//   GEMINI_API_KEY   secret, required
//   ALLOWED_ORIGINS  comma-separated, e.g. "https://loganwestlake.github.io"
//   GEMINI_MODEL     optional, defaults to DEFAULT_MODEL below
//   GEMINI_FALLBACK_MODEL optional backup model for when the main one is overloaded
//
// Bank connection (Plaid), all optional until you set it up — see PLAID-SETUP.md:
//   PLAID_CLIENT_ID     from the Plaid dashboard
//   PLAID_SECRET        secret, the Sandbox or Production secret matching PLAID_ENV
//   PLAID_ENV           "sandbox" (fake test bank) or "production" (real accounts)
//   PLAID_REDIRECT_URI  the dashboard's address, also listed in Plaid's Allowed redirect URIs
//   PLAID_KV            a Workers KV namespace binding; the bank's access token lives here, never in the browser

const PROJECT_ID = "joe-westlake-llc";
const DEFAULT_MODEL = "gemini-3.8-flash";
// Used only when the main model is overloaded. Set GEMINI_FALLBACK_MODEL to "" to turn this off.
const DEFAULT_FALLBACK_MODEL = "gemini-3.6-flash";
const JWKS_URL = "https://www.googleapis.com/service_accounts/v1/jwk/securetoken@system.gserviceaccount.com";
const MAX_BODY_BYTES = 20 * 1024 * 1024; // a 10MB file is ~13.4MB once base64-encoded
const RATE_LIMIT = { windowMs: 60_000, max: 30 };
const MEMBER_CACHE_MS = 5 * 60_000;

let jwksCache = { keys: null, expires: 0 };
const memberCache = new Map(); // uid -> { ok, expires }
const rateBuckets = new Map(); // uid -> [timestamps]

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowed = (env.ALLOWED_ORIGINS || "https://loganwestlake.github.io").split(",").map((s) => s.trim()).filter(Boolean);
    const originOk = allowed.includes(origin);
    const cors = originOk ? {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Max-Age": "86400",
      "Vary": "Origin"
    } : { "Vary": "Origin" };
    const reply = (status, message) => json(status, { error: { message } }, cors);

    if (request.method === "OPTIONS") return new Response(null, { status: originOk ? 204 : 403, headers: cors });
    if (!originOk) return reply(403, "Origin not allowed.");
    if (request.method !== "POST") return reply(405, "Method not allowed.");
    const path = new URL(request.url).pathname.replace(/\/+$/, "") || "/";
    const isPlaid = path.startsWith("/plaid/");
    if (!isPlaid && !env.GEMINI_API_KEY) return reply(500, "Proxy is missing its API key.");

    // 1. Who is calling?
    const token = (request.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
    if (!token) return reply(401, isPlaid ? "Sign in first." : "Sign in to use the AI.");
    let uid;
    try { uid = await verifyFirebaseToken(token); }
    catch { return reply(401, "Your sign-in has expired. Sign in again."); }

    // 2. Are they approved?
    if (!(await isMember(uid, token))) return reply(403, isPlaid ? "This account isn't approved." : "This account isn't approved to use the AI.");

    // 3. Rate limit.
    const now = Date.now();
    const hits = (rateBuckets.get(uid) || []).filter((t) => now - t < RATE_LIMIT.windowMs);
    if (hits.length >= RATE_LIMIT.max) return reply(429, "Too many AI requests. Wait a minute and try again.");
    hits.push(now);
    rateBuckets.set(uid, hits);

    if (isPlaid) return handlePlaid(path, request, env, { uid, reply, cors });

    // 4. Validate and forward only what Gemini needs.
    const declared = Number(request.headers.get("Content-Length") || 0);
    if (declared > MAX_BODY_BYTES) return reply(413, "That request is too large.");
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) return reply(413, "That request is too large.");
    let body;
    try { body = JSON.parse(raw); } catch { return reply(400, "Invalid JSON."); }
    if (!Array.isArray(body?.contents) || !body.contents.length) return reply(400, "Missing contents.");
    const payload = { contents: body.contents };
    if (body.generationConfig && typeof body.generationConfig === "object") payload.generationConfig = body.generationConfig;

    const callModel = (model) => fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": env.GEMINI_API_KEY },
      body: JSON.stringify(payload)
    });
    const model = env.GEMINI_MODEL || DEFAULT_MODEL;
    let upstream = await callModel(model);
    let text = await upstream.text();
    // Main model overloaded ("high demand")? Try the backup model once before giving up.
    const fallback = env.GEMINI_FALLBACK_MODEL ?? DEFAULT_FALLBACK_MODEL;
    if (fallback && fallback !== model && (upstream.status === 503 || /high demand|overloaded|UNAVAILABLE/i.test(upstream.ok ? "" : text))) {
      const second = await callModel(fallback);
      const secondText = await second.text();
      if (second.ok) { upstream = second; text = secondText; }
    }
    // Upstream auth/quota errors must not look like "you're not approved" to the app.
    const status = upstream.ok ? 200 : upstream.status === 429 ? 429 : upstream.status === 503 ? 503 : 502;
    return new Response(text, { status, headers: { ...cors, "Content-Type": "application/json" } });
  }
};

// ── Bank connection through Plaid ──
// The access token Plaid gives for the bank is kept in Workers KV and only ever used here.
// The app gets the transactions and harmless details (bank name, last 4 digits), never the token.
const PLAID_HOSTS = { sandbox: "https://sandbox.plaid.com", production: "https://production.plaid.com" };
const PLAID_ITEM_KEY = "plaid-item";

class PlaidError extends Error {
  constructor(status, code, message) { super(message); this.status = status; this.code = code; }
}
async function plaidCall(env, endpoint, body) {
  const base = PLAID_HOSTS[env.PLAID_ENV || "sandbox"];
  if (!base) throw new PlaidError(500, "CONFIG", "PLAID_ENV must be \"sandbox\" or \"production\".");
  const res = await fetch(`${base}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ client_id: env.PLAID_CLIENT_ID, secret: env.PLAID_SECRET, ...body })
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new PlaidError(res.status, data.error_code || "PLAID_ERROR", data.display_message || data.error_message || `Plaid error (HTTP ${res.status})`);
  return data;
}
const FRIENDLY_PLAID = {
  ITEM_LOGIN_REQUIRED: "The bank needs you to sign in again. Click Reconnect.",
  INVALID_CREDENTIALS: "The bank login didn't work. Try again.",
  INSTITUTION_DOWN: "The bank isn't answering right now. Try again later.",
  INSTITUTION_NOT_RESPONDING: "The bank isn't answering right now. Try again later.",
  RATE_LIMIT_EXCEEDED: "Too many requests to the bank. Wait a minute and try again.",
  INVALID_API_KEYS: "The Plaid keys in the proxy settings aren't right. Check PLAID_CLIENT_ID, PLAID_SECRET and PLAID_ENV.",
  PRODUCT_NOT_READY: "The bank is still sending your history. Try again in a few minutes."
};

async function handlePlaid(path, request, env, { uid, reply, cors }) {
  if (!env.PLAID_CLIENT_ID || !env.PLAID_SECRET) return reply(501, "The bank connection isn't set up yet. Add the Plaid keys to the proxy (see PLAID-SETUP.md).");
  if (!env.PLAID_KV) return reply(501, "The proxy needs a KV namespace bound as PLAID_KV (see PLAID-SETUP.md).");
  let body = {};
  try { body = JSON.parse((await request.text()) || "{}"); } catch { return reply(400, "Invalid JSON."); }
  const ok = (obj) => json(200, { env: env.PLAID_ENV || "sandbox", ...obj }, cors);
  const item = await env.PLAID_KV.get(PLAID_ITEM_KEY, "json");
  try {
    switch (path) {
      case "/plaid/link-token": {
        // "update" re-opens the bank login for the existing connection (when the bank asks to sign in again).
        const update = body.mode === "update" && item;
        const data = await plaidCall(env, "/link/token/create", {
          client_name: "Joe Westlake Painting",
          user: { client_user_id: uid },
          country_codes: ["US"],
          language: "en",
          ...(update ? { access_token: item.access_token } : { products: ["transactions"], transactions: { days_requested: 730 } }),
          ...(env.PLAID_REDIRECT_URI ? { redirect_uri: env.PLAID_REDIRECT_URI } : {})
        });
        return ok({ link_token: data.link_token });
      }
      case "/plaid/exchange": {
        if (!body.public_token) return reply(400, "Missing public_token.");
        const data = await plaidCall(env, "/item/public_token/exchange", { public_token: body.public_token });
        const info = {
          access_token: data.access_token, item_id: data.item_id,
          institution: String(body.institution?.name || "Your bank").slice(0, 80),
          accounts: (Array.isArray(body.accounts) ? body.accounts : []).slice(0, 10).map((a) => ({ name: String(a.name || "").slice(0, 60), mask: String(a.mask || "").slice(0, 4), subtype: String(a.subtype || "").slice(0, 30) })),
          connectedAt: new Date().toISOString(), by: uid
        };
        // Replacing an older connection: remove it at Plaid so it stops being billed.
        if (item?.access_token && item.item_id !== info.item_id) await plaidCall(env, "/item/remove", { access_token: item.access_token }).catch(() => {});
        await env.PLAID_KV.put(PLAID_ITEM_KEY, JSON.stringify(info));
        return ok({ connected: true, institution: info.institution, accounts: info.accounts, connectedAt: info.connectedAt });
      }
      case "/plaid/status": {
        if (!item) return ok({ connected: false });
        return ok({ connected: true, institution: item.institution, accounts: item.accounts, connectedAt: item.connectedAt });
      }
      case "/plaid/sync": {
        if (!item) return reply(409, "No bank is connected.");
        const start = typeof body.cursor === "string" ? body.cursor : "";
        // Page through everything new. If the bank changes data mid-way, Plaid asks us to start over from the same cursor.
        for (let attempt = 0; attempt < 3; attempt++) {
          let cursor = start, added = [], modified = [], removed = [], status = "", more = true, pages = 0;
          try {
            while (more && pages < 40) {
              const page = await plaidCall(env, "/transactions/sync", { access_token: item.access_token, cursor: cursor || undefined, count: 500, options: { include_original_description: true } });
              added = added.concat(page.added || []); modified = modified.concat(page.modified || []); removed = removed.concat(page.removed || []);
              cursor = page.next_cursor; more = !!page.has_more; status = page.transactions_update_status || status; pages++;
            }
          } catch (err) {
            if (err.code === "TRANSACTIONS_SYNC_MUTATION_DURING_PAGINATION") continue;
            throw err;
          }
          const slim = (t) => ({
            id: t.transaction_id, account: t.account_id, amount: t.amount, date: t.date, pending: !!t.pending,
            name: t.name || "", merchant: t.merchant_name || "", description: t.original_description || "", check: t.check_number || "",
            category: t.personal_finance_category ? `${t.personal_finance_category.primary || ""}/${t.personal_finance_category.detailed || ""}` : ""
          });
          return ok({ added: added.map(slim), modified: modified.map(slim), removed: removed.map((r) => r.transaction_id), next_cursor: cursor, status, institution: item.institution, accounts: item.accounts });
        }
        return reply(503, "The bank kept changing while we read it. Try again in a minute.");
      }
      case "/plaid/disconnect": {
        if (item?.access_token) await plaidCall(env, "/item/remove", { access_token: item.access_token }).catch((e) => { if (e.code !== "ITEM_NOT_FOUND") throw e; });
        await env.PLAID_KV.delete(PLAID_ITEM_KEY);
        return ok({ connected: false });
      }
      default:
        return reply(404, "Unknown bank request.");
    }
  } catch (err) {
    const status = err.code === "ITEM_LOGIN_REQUIRED" ? 409 : err.status === 400 || err.status === 401 ? 502 : err.status || 502;
    return json(status, { error: { message: FRIENDLY_PLAID[err.code] || err.message, code: err.code || "ERROR" } }, cors);
  }
}

function json(status, obj, headers = {}) {
  return new Response(JSON.stringify(obj), { status, headers: { ...headers, "Content-Type": "application/json" } });
}

// ── Firebase ID token verification (RS256, Google's securetoken keys) ──
const b64urlToBytes = (s) => {
  s = s.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  return Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
};
const b64urlToJSON = (s) => JSON.parse(new TextDecoder().decode(b64urlToBytes(s)));

async function getJwks() {
  if (jwksCache.keys && Date.now() < jwksCache.expires) return jwksCache.keys;
  const res = await fetch(JWKS_URL);
  if (!res.ok) throw new Error("JWKS fetch failed");
  const { keys } = await res.json();
  const maxAge = Number((res.headers.get("Cache-Control") || "").match(/max-age=(\d+)/)?.[1] || 3600);
  jwksCache = { keys, expires: Date.now() + maxAge * 1000 };
  return keys;
}

async function verifyFirebaseToken(token) {
  const parts = token.split(".");
  if (parts.length !== 3) throw new Error("malformed");
  const header = b64urlToJSON(parts[0]);
  const claims = b64urlToJSON(parts[1]);
  if (header.alg !== "RS256" || !header.kid) throw new Error("bad header");

  const jwk = (await getJwks()).find((k) => k.kid === header.kid);
  if (!jwk) throw new Error("unknown key");
  const key = await crypto.subtle.importKey("jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
  const ok = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, b64urlToBytes(parts[2]), new TextEncoder().encode(`${parts[0]}.${parts[1]}`));
  if (!ok) throw new Error("bad signature");

  const now = Math.floor(Date.now() / 1000), skew = 60;
  if (claims.aud !== PROJECT_ID) throw new Error("bad aud");
  if (claims.iss !== `https://securetoken.google.com/${PROJECT_ID}`) throw new Error("bad iss");
  if (!claims.sub || typeof claims.sub !== "string") throw new Error("bad sub");
  if (!(claims.exp > now - skew)) throw new Error("expired");
  if (!(claims.iat <= now + skew)) throw new Error("issued in future");
  if (claims.auth_time && claims.auth_time > now + skew) throw new Error("bad auth_time");
  return claims.sub;
}

// ── Membership: the same members/{uid} check the Firestore rules use ──
async function isMember(uid, idToken) {
  const hit = memberCache.get(uid);
  if (hit && Date.now() < hit.expires) return hit.ok;
  const res = await fetch(`https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/members/${encodeURIComponent(uid)}`, {
    headers: { Authorization: `Bearer ${idToken}` }
  });
  const ok = res.ok;
  // Cache denials briefly so a newly approved person doesn't wait long.
  memberCache.set(uid, { ok, expires: Date.now() + (ok ? MEMBER_CACHE_MS : 30_000) });
  return ok;
}
