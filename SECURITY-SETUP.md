# Locking down the dashboard

Two things keep the business data and the AI private. Both live outside GitHub Pages,
so they have to be deployed by hand once. **Do step 1 (approve yourself) before
publishing the rules, or you'll lock yourself out.**

## 1. Approve the people who should have access

Access is no longer "anyone who can sign up". A person is approved when a document
exists at `members/{their user ID}` in Firestore.

1. Firebase console → **Authentication → Users**. Copy the **User UID** of each person
   who should have access (Joe, Logan, the accountant…). Someone who signs up and isn't
   approved also sees their user ID in the app's "doesn't have access yet" message.
2. Firebase console → **Firestore Database → Data → Start collection** `members`.
   For each person add a document whose **Document ID is their User UID** and give it
   any field, e.g. `name` = `Joe`.

To remove someone later, delete their `members` document.

## 2. Publish the Firestore rules

Firebase console → **Firestore Database → Rules**, paste the contents of
[`firestore.rules`](firestore.rules), and click **Publish**.
(Or with the Firebase CLI: `firebase deploy --only firestore:rules`.)

Check it: sign in with an account that has no `members` document — the app should say
it doesn't have access and show no data.

Optional but recommended: Firebase console → **Authentication → Settings → User actions**,
untick **Enable create (sign-up)** so strangers can't even create accounts. Add new people
under **Authentication → Users → Add user** instead.

## 3. Deploy the locked-down Gemini proxy

The proxy at `gemini-proxy.loganwestlake3.workers.dev` now only answers requests that
come from the dashboard's site **and** carry the sign-in token of an approved member.
The code is in [`worker/`](worker/).

Using the Cloudflare dashboard (Workers & Pages → `gemini-proxy`):

1. **Edit code**, replace everything with [`worker/gemini-proxy.js`](worker/gemini-proxy.js), **Deploy**.
2. **Settings → Variables and Secrets**:
   - `GEMINI_API_KEY` — type **Secret** — your Gemini API key (it may already exist; keep it).
   - `ALLOWED_ORIGINS` — `https://loganwestlake.github.io` (add a custom domain, comma-separated, if you use one).
   - `GEMINI_MODEL` — the model the old proxy used (defaults to `gemini-2.5-flash`).

Or with Wrangler from the `worker/` folder:

```bash
npx wrangler secret put GEMINI_API_KEY
npx wrangler deploy
```

Check it: the Company AI tab should still answer when you're signed in as a member, and
`curl -X POST https://gemini-proxy.loganwestlake3.workers.dev` should return 403.

The dashboard already sends the sign-in token, and keeps working with the old proxy
until the new one is deployed, so the order of steps 2 and 3 doesn't matter.

## 4. Rotate the Gemini key (recommended)

The old proxy was open to anyone, so the key behind it could have been used by others.
Create a new key in Google AI Studio, put it in `GEMINI_API_KEY`, and delete the old one.
