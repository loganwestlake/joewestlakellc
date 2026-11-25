# Connecting the Truist account (Plaid)

The dashboard can pull new transactions straight from the business checking account,
with no statements, no AI and no daily limit. It uses **Plaid**, the service most finance apps
use to connect to banks. Your dad signs in to Truist on Plaid's secure screen. The dashboard
never sees his Truist password, and the bank's connection key stays in your Cloudflare proxy,
never in the browser.

It takes about 30 minutes, plus however long Plaid takes to approve real (production)
access. Do the parts in order.

---

## Part 1: Create a Plaid account

1. Go to **dashboard.plaid.com/signup** and sign up with your work email.
2. Use the business details: **Joe Westlake Painting LLC**. When it asks what you're building,
   say it's an internal bookkeeping tool for your own business's bank account.
3. Once you're in, find your **keys**: in the Plaid Dashboard, look under **Developers → Keys**
   (it may be called Team Settings → Keys). Copy:
   - **client_id**
   - the **Sandbox** secret. Sandbox is Plaid's practice mode with a fake bank.

## Part 2: Add a storage space to Cloudflare (Workers KV)

The proxy needs somewhere private to keep the bank connection key.

1. **dash.cloudflare.com** → **Storage & Databases** → **KV** → **Create**. Name it `plaid`.
2. Go to **Workers & Pages** → **gemini-proxy** → **Settings** → **Bindings** → **Add** →
   **KV namespace**.
   - **Variable name:** `PLAID_KV` (exactly)
   - **KV namespace:** `plaid`
   - Save / **Deploy**.

## Part 3: Update the proxy and add the Plaid settings

1. Paste the latest proxy code: open
   **github.com/loganwestlake/joewestlakellc/blob/main/worker/gemini-proxy.js**, click **Raw**,
   copy everything, then Cloudflare → **gemini-proxy** → **Edit code** → select all, paste → **Deploy**.
   (It still does everything the AI needed; this only adds the bank part.)
2. **Settings → Variables and Secrets → Add** these four:

| Type | Name | Value |
|---|---|---|
| Text | `PLAID_CLIENT_ID` | your client_id |
| **Secret** | `PLAID_SECRET` | the **Sandbox** secret for now |
| Text | `PLAID_ENV` | `sandbox` |
| Text | `PLAID_REDIRECT_URI` | `https://loganwestlake.github.io/joewestlakellc/` |

3. **Deploy**.
4. In Plaid's dashboard, add that same address to the **allowed redirect URIs**: look under
   **Developers → API → Allowed redirect URIs** (wording may differ slightly) and add
   `https://loganwestlake.github.io/joewestlakellc/` exactly, with no `#` part. Some banks, likely
   including Truist, send you to their own website to sign in, and this is how they send you back.

## Part 4: Practice with the fake bank (Sandbox)

1. Open the dashboard → **Settings** → **Bank connection** → **Connect bank**.
2. In Plaid's window, pick any test bank (e.g. "First Platypus Bank") and sign in with
   **username `user_good`, password `pass_good`**. If it asks for a code, enter `1234`.
3. You'll see "Connected to …" and a list of made-up transactions. A purple **Test mode** note
   appears and importing is turned off, so fake data can't get into your books.
4. Click **Disconnect** when you're done practicing.

If something goes wrong here, the message on screen says what to fix (wrong keys, the KV binding
missing, the proxy not updated yet). Send it to me if it's unclear.

## Part 5: Get approved for real accounts (Production)

1. In the Plaid Dashboard, look for **Request production access** / **Get production access**.
2. Fill in the company profile and use case: *"Internal bookkeeping for our own small business.
   We import transactions from our own business checking account into our private dashboard."*
   Product: **Transactions**.
3. Choose **Pay as you go**. New accounts may get a free trial (up to 10 connected accounts).
   After that it's a small monthly fee for the one connected account.
4. Plaid may also ask you to register for specific banks (sometimes called "OAuth institutions").
   If Truist is listed, complete it. Some banks take a few days to approve.
5. Once approved, copy the **Production** secret from **Developers → Keys**.

## Part 6: Switch to the real account

1. Cloudflare → **gemini-proxy** → **Settings → Variables and Secrets**:
   - `PLAID_SECRET` → **Rotate** and paste the **Production** secret
   - `PLAID_ENV` → `production`
   - **Deploy**.
2. Dashboard → **Settings → Bank connection**: if it still shows the test bank, click
   **Disconnect** first. Then **Connect bank** → search **Truist** → your dad signs in
   → choose the **business checking** account.
3. It pulls up to the last 2 years. Anything you already imported from statements shows as
   **"Already logged?"** and stays unchecked, so nothing is doubled. Review and **Import**.

## Using it

- **Money → Import bank → Get new transactions from Truist**, or **Settings → Bank connection**.
  It only brings in what's new since last time.
- Pending card charges wait until they post.
- If the bank later changes or cancels a transaction, the dashboard updates or removes it.
- If Truist asks to sign in again (passwords change, or every so often for security),
  you'll see **Reconnect**.
- The Today page reminds you if it hasn't been checked in a week.
- **Disconnect** stops it, and Plaid stops charging for it.
