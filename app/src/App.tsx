import { useCallback, useEffect, useState } from "react";
import type { User } from "firebase/auth";
import { seedDemoCompany } from "./data/seed";
import { emptySnapshot, MemoryStore, type Snapshot, type Store } from "./data/store";
import type { Organization } from "./data/types";
import { BooksProvider, type Page } from "./ui/books";
import { Drawers } from "./ui/Drawers";
import { EDITIONS, NAV, Shell } from "./ui/Shell";
import { AuditLog, ChartOfAccounts, Dashboard, Journal, Planned, Reports } from "./ui/pages";

const PAGES = new Set<string>(NAV.flatMap((g) => g.items.map((i) => i.page)));
const pageFromHash = (): Page => { const h = location.hash.replace(/^#\/?/, ""); return (PAGES.has(h) ? h : "dashboard") as Page; };

type Toast = { id: number; msg: string; kind: "ok" | "error" };

export function App() {
  const [mode, setMode] = useState<"loading" | "signin" | "pickOrg" | "books">("loading");
  const [user, setUser] = useState<User | null>(null);
  const [store, setStore] = useState<Store | null>(null);
  const [orgs, setOrgs] = useState<Organization[]>([]);
  const [orgId, setOrgId] = useState<string | null>(null);
  const [snap, setSnap] = useState<Snapshot>(emptySnapshot());
  const [page, setPage] = useState<Page>(pageFromHash());
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isDemo, setIsDemo] = useState(false);

  const toast = useCallback((msg: string, kind: "ok" | "error" = "ok") => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, msg, kind }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), kind === "error" ? 6000 : 3000);
  }, []);
  const go = useCallback((p: Page) => { setPage(p); history.replaceState(null, "", `#${p}`); window.scrollTo(0, 0); }, []);
  useEffect(() => { const h = () => setPage(pageFromHash()); window.addEventListener("hashchange", h); return () => window.removeEventListener("hashchange", h); }, []);

  const openDemo = useCallback(async () => {
    const s = new MemoryStore("demo-user", "demo@example.com", "books.demo.v1");
    let [org] = await s.listOrgs();
    if (!org) {
      org = await s.createOrg({ name: "Demo Painting Co.", edition: "contractor", baseCurrency: "USD", fiscalYearStartMonth: 1, isDemo: true });
      await seedDemoCompany(s, org.id);
    }
    setIsDemo(true); setStore(s); setOrgId(org.id); setMode("books");
  }, []);

  useEffect(() => {
    if (new URLSearchParams(location.search).has("demo")) { openDemo(); return; }
    // Firebase is only downloaded when it's needed (not for the demo company).
    let unsub = () => {};
    let cancelled = false;
    Promise.all([import("firebase/auth"), import("./data/firestore")]).then(([{ getAuth, onAuthStateChanged }, { firebase, FirestoreStore }]) => {
      if (cancelled) return;
      unsub = onAuthStateChanged(getAuth(firebase().app), async (u) => {
      setUser(u);
      if (!u) { setMode("signin"); return; }
      const s = new FirestoreStore(u.uid, u.email || "");
      setStore(s);
      try {
        const list = await s.listOrgs();
        setOrgs(list);
        if (list.length === 1) { setOrgId(list[0].id); setMode("books"); } else setMode("pickOrg");
      } catch (err) {
        toast(`Couldn't load your companies: ${(err as Error).message}`, "error");
        setMode("pickOrg");
      }
      });
    }).catch(() => { toast("Couldn't load sign-in. Check your connection.", "error"); setMode("signin"); });
    return () => { cancelled = true; unsub(); };
  }, [openDemo, toast]);

  useEffect(() => {
    if (!store || !orgId) return;
    return store.watch(orgId, setSnap);
  }, [store, orgId]);

  const signOutAll = async () => {
    if (isDemo) { setIsDemo(false); setStore(null); setOrgId(null); setMode("signin"); history.replaceState(null, "", location.pathname); return; }
    const [{ getAuth, signOut }, { firebase }] = await Promise.all([import("firebase/auth"), import("./data/firestore")]);
    await signOut(getAuth(firebase().app));
  };

  const toastsEl = (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] flex flex-col gap-2 items-center" aria-live="polite">
      {toasts.map((t) => <div key={t.id} className={`card shadow-pop px-4 py-2.5 text-sm ${t.kind === "error" ? "border-[#FECACA] text-[#DC2626]" : "text-ink"}`}>{t.msg}</div>)}
    </div>
  );

  if (mode === "loading") return <div className="min-h-screen flex items-center justify-center text-sm text-ink-3">Loading…</div>;
  if (mode === "signin") return <><SignIn onDemo={openDemo} />{toastsEl}</>;
  if (mode === "pickOrg" && store) return <><PickOrg store={store} orgs={orgs} onPick={(id) => { setOrgId(id); setMode("books"); }} onSignOut={signOutAll} toast={toast} />{toastsEl}</>;
  if (!store || !orgId) return null;

  return (
    <BooksProvider store={store} snap={snap} orgId={orgId} page={page} go={go} toast={toast} isDemo={isDemo}>
      <Shell onSignOut={signOutAll} email={isDemo ? "Demo company (this browser only)" : user?.email || ""}>
        {!snap.org ? <div className="text-sm text-ink-3">Loading the books…</div>
          : page === "dashboard" ? <Dashboard />
          : page === "accounts" ? <ChartOfAccounts />
          : page === "journal" ? <Journal />
          : page === "reports" ? <Reports />
          : page === "auditLog" ? <AuditLog />
          : <Planned page={page} />}
      </Shell>
      <Drawers />
      {toastsEl}
    </BooksProvider>
  );
}

function SignIn({ onDemo }: { onDemo: () => void }) {
  const [email, setEmail] = useState(""), [pass, setPass] = useState(""), [err, setErr] = useState(""), [busy, setBusy] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card w-full max-w-sm p-6">
        <div className="w-10 h-10 rounded-md bg-slatebtn text-white text-sm font-bold flex items-center justify-center mb-4">JW</div>
        <h1 className="text-lg font-semibold">Sign in to Books</h1>
        <p className="text-sm text-ink-2 mb-5">Use the same account as the dashboard.</p>
        <form className="space-y-3" onSubmit={async (e) => {
          e.preventDefault(); setErr(""); setBusy(true);
          try {
            const [{ getAuth, signInWithEmailAndPassword }, { firebase }] = await Promise.all([import("firebase/auth"), import("./data/firestore")]);
            await signInWithEmailAndPassword(getAuth(firebase().app), email, pass);
          }
          catch { setErr("That email and password didn't work."); } finally { setBusy(false); }
        }}>
          <div><label className="label" htmlFor="em">Email</label><input id="em" type="email" autoComplete="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required /></div>
          <div><label className="label" htmlFor="pw">Password</label><input id="pw" type="password" autoComplete="current-password" className="input" value={pass} onChange={(e) => setPass(e.target.value)} required /></div>
          {err && <div role="alert" className="text-sm text-[#DC2626]">{err}</div>}
          <button type="submit" className="btn-primary w-full" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
        </form>
        <div className="border-t border-line mt-5 pt-4">
          <button type="button" className="btn-secondary w-full" onClick={onDemo}>Explore the demo company</button>
          <p className="text-[11px] text-ink-3 mt-2 text-center">Six months of made-up data, kept only in this browser.</p>
        </div>
      </div>
    </div>
  );
}

function PickOrg({ store, orgs, onPick, onSignOut, toast }: { store: Store; orgs: Organization[]; onPick: (id: string) => void; onSignOut: () => void; toast: (m: string, k?: "ok" | "error") => void }) {
  const [name, setName] = useState("Joe Westlake Painting LLC"), [edition, setEdition] = useState<Organization["edition"]>("contractor"), [busy, setBusy] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="card w-full max-w-md p-6">
        <h1 className="text-lg font-semibold mb-1">{orgs.length ? "Choose a company" : "Set up your company"}</h1>
        {orgs.length > 0 && <div className="space-y-2 mb-5">{orgs.map((o) => <button key={o.id} type="button" className="btn-secondary w-full justify-between" onClick={() => onPick(o.id)}>{o.name}<span className="text-ink-3 text-xs">{EDITIONS[o.edition]}</span></button>)}</div>}
        <p className="text-sm text-ink-2 mb-4">{orgs.length ? "Or start another:" : "This creates the company with a starting chart of accounts. Your current dashboard keeps running separately; bringing its records over is a later step."}</p>
        <form className="space-y-3" onSubmit={async (e) => {
          e.preventDefault(); setBusy(true);
          try { const org = await store.createOrg({ name, edition, baseCurrency: "USD", fiscalYearStartMonth: 1 }); onPick(org.id); }
          catch (err) { toast(/permission/i.test((err as Error).message) ? "Firestore said no: publish the latest firestore.rules first (see docs/ARCHITECTURE.md)." : (err as Error).message, "error"); }
          finally { setBusy(false); }
        }}>
          <div><label className="label" htmlFor="cn">Company name</label><input id="cn" className="input" value={name} onChange={(e) => setName(e.target.value)} required /></div>
          <div><label className="label" htmlFor="ed">Industry edition</label><select id="ed" className="input" value={edition} onChange={(e) => setEdition(e.target.value as Organization["edition"])}>{Object.entries(EDITIONS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></div>
          <button type="submit" className="btn-primary w-full" disabled={busy}>{busy ? "Creating…" : "Create company"}</button>
        </form>
        <button type="button" className="btn-ghost w-full mt-3" onClick={onSignOut}>Sign out</button>
      </div>
    </div>
  );
}
