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

const PROJECT_ID = "joe-westlake-llc";
const DEFAULT_MODEL = "gemini-2.5-flash";
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
    if (!env.GEMINI_API_KEY) return reply(500, "Proxy is missing its API key.");

    // 1. Who is calling?
    const token = (request.headers.get("Authorization") || "").replace(/^Bearer\s+/i, "");
    if (!token) return reply(401, "Sign in to use the AI.");
    let uid;
    try { uid = await verifyFirebaseToken(token); }
    catch { return reply(401, "Your sign-in has expired. Sign in again."); }

    // 2. Are they approved?
    if (!(await isMember(uid, token))) return reply(403, "This account isn't approved to use the AI.");

    // 3. Rate limit.
    const now = Date.now();
    const hits = (rateBuckets.get(uid) || []).filter((t) => now - t < RATE_LIMIT.windowMs);
    if (hits.length >= RATE_LIMIT.max) return reply(429, "Too many AI requests. Wait a minute and try again.");
    hits.push(now);
    rateBuckets.set(uid, hits);

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

    const model = env.GEMINI_MODEL || DEFAULT_MODEL;
    const upstream = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": env.GEMINI_API_KEY },
      body: JSON.stringify(payload)
    });
    const text = await upstream.text();
    // Upstream auth/quota errors must not look like "you're not approved" to the app.
    const status = upstream.ok ? 200 : upstream.status === 429 ? 429 : 502;
    return new Response(text, { status, headers: { ...cors, "Content-Type": "application/json" } });
  }
};

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
