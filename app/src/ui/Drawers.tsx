import { useEffect, useMemo, useState } from "react";
import { LedgerError, toCents, type JournalLine } from "../ledger";
import { DateInput } from "./DateInput";
import { Icon } from "./icons";
import { money, todayISO, useBooks } from "./books";

type Row = { key: string; accountId: string; debit: string; credit: string; memo: string; entityId: string };
const blank = (): Row => ({ key: Math.random().toString(36).slice(2), accountId: "", debit: "", credit: "", memo: "", entityId: "" });
const cents = (s: string) => { try { return s.trim() ? toCents(s) : 0; } catch { return NaN; } };

export function Drawers() {
  const { drawer, closeDrawer } = useBooks();
  if (!drawer) return null;
  if (drawer.kind === "journal") return <JournalEntryDrawer onClose={closeDrawer} />;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="planned-title">
      <div className="absolute inset-0 bg-ink/20" onClick={closeDrawer} />
      <div className="relative card shadow-pop p-6 max-w-sm w-full">
        <h2 id="planned-title" className="font-semibold">{drawer.title}</h2>
        <p className="text-sm text-ink-2 mt-1">This form arrives in Milestone {drawer.milestone}. It will post through the same ledger as journal entries.</p>
        <div className="mt-4 flex justify-end"><button type="button" className="btn-primary" onClick={closeDrawer}>OK</button></div>
      </div>
    </div>
  );
}

function JournalEntryDrawer({ onClose }: { onClose: () => void }) {
  const { snap, store, orgId, toast } = useBooks();
  const [date, setDate] = useState(todayISO());
  const [memo, setMemo] = useState("");
  const [rows, setRows] = useState<Row[]>(() => [blank(), blank(), blank(), blank()]);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [drag, setDrag] = useState<number | null>(null);
  const accounts = useMemo(() => [...snap.accounts].filter((a) => a.active).sort((a, b) => a.code.localeCompare(b.code)), [snap.accounts]);
  const totals = useMemo(() => rows.reduce((t, r) => ({ debit: t.debit + (cents(r.debit) || 0), credit: t.credit + (cents(r.credit) || 0) }), { debit: 0, credit: 0 }), [rows]);
  const diff = totals.debit - totals.credit;
  useEffect(() => { const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); }; window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h); }, [onClose]);

  const set = (i: number, patch: Partial<Row>) => { setError(""); setRows((rs) => {
    const next = rs.map((r, j) => (j === i ? { ...r, ...patch } : r));
    // Typing a debit clears the credit on that line and vice versa; the last line always stays blank for adding more.
    if (patch.debit) next[i].credit = ""; if (patch.credit) next[i].debit = "";
    if (i === next.length - 1 && (patch.accountId || patch.debit || patch.credit)) next.push(blank());
    return next;
  }); };
  const fillBalance = (i: number) => {
    const r = rows[i];
    if (r.debit || r.credit || !diff) return;
    set(i, diff > 0 ? { credit: (diff / 100).toFixed(2) } : { debit: (-diff / 100).toFixed(2) });
  };

  async function save(andNew: boolean) {
    setError("");
    const used = rows.filter((r) => r.accountId || r.debit || r.credit);
    const lines: JournalLine[] = [];
    for (const [i, r] of used.entries()) {
      if (!r.accountId) return setError(`Line ${i + 1}: pick an account.`);
      const d = cents(r.debit), c = cents(r.credit);
      if (Number.isNaN(d) || Number.isNaN(c)) return setError(`Line ${i + 1}: that's not an amount.`);
      lines.push({ accountId: r.accountId, debit: d, credit: c, ...(r.memo ? { memo: r.memo } : {}), ...(r.entityId ? { entityId: r.entityId, entityType: snap.contacts.find((x) => x.id === r.entityId)?.roles.includes("vendor") ? "vendor" : "customer" } : {}) });
    }
    setSaving(true);
    try {
      await store.postTransaction(orgId, { type: "journal", date, memo: memo || "Journal entry", lines: [], journalLines: lines });
      toast("Journal entry posted");
      if (andNew) { setRows([blank(), blank(), blank(), blank()]); setMemo(""); } else onClose();
    } catch (err) {
      setError(err instanceof LedgerError ? err.message : `Couldn't save: ${(err as Error).message}`);
    } finally { setSaving(false); }
  }

  return (
    <div className="fixed inset-0 z-50 bg-canvas flex flex-col" role="dialog" aria-modal="true" aria-labelledby="je-title">
      <div className="h-14 bg-white border-b border-line flex items-center justify-between px-4 sm:px-6">
        <h2 id="je-title" className="font-semibold">Journal entry</h2>
        <button type="button" className="btn-ghost h-9 px-2" onClick={onClose} aria-label="Close"><Icon name="x" /></button>
      </div>
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="flex flex-wrap gap-4 mb-5">
          <div><label className="label" htmlFor="je-date">Journal date</label><DateInput id="je-date" value={date} onChange={setDate} /></div>
          <div className="flex-1 min-w-[16rem]"><label className="label" htmlFor="je-memo">Memo</label><input id="je-memo" className="input" value={memo} onChange={(e) => setMemo(e.target.value)} placeholder="What's this entry for?" /></div>
        </div>
        <div className="card overflow-x-auto">
          <table className="w-full min-w-[760px]">
            <thead><tr><th className="th w-8" /><th className="th w-8">#</th><th className="th">Account</th><th className="th w-36 text-right">Debits</th><th className="th w-36 text-right">Credits</th><th className="th">Description</th><th className="th w-48">Name</th><th className="th w-10" /></tr></thead>
            <tbody>{rows.map((r, i) => (
              <tr key={r.key} draggable onDragStart={() => setDrag(i)} onDragOver={(e) => e.preventDefault()}
                onDrop={() => { if (drag === null || drag === i) return; setRows((rs) => { const n = [...rs]; const [m] = n.splice(drag, 1); n.splice(i, 0, m); return n; }); setDrag(null); }}
                className={drag === i ? "opacity-50" : ""}>
                <td className="td text-ink-3 cursor-grab" title="Drag to reorder"><Icon name="grip" /></td>
                <td className="td text-ink-3 tabular-nums">{i + 1}</td>
                <td className="td"><select aria-label={`Line ${i + 1} account`} className="input" value={r.accountId} onChange={(e) => set(i, { accountId: e.target.value })} onBlur={() => fillBalance(i)}>
                  <option value="">Choose an account</option>{accounts.map((a) => <option key={a.id} value={a.id}>{a.code} {a.name}</option>)}</select></td>
                <td className="td"><input aria-label={`Line ${i + 1} debit`} inputMode="decimal" className="input text-right tabular-nums" value={r.debit} onChange={(e) => set(i, { debit: e.target.value })} /></td>
                <td className="td"><input aria-label={`Line ${i + 1} credit`} inputMode="decimal" className="input text-right tabular-nums" value={r.credit} onChange={(e) => set(i, { credit: e.target.value })} /></td>
                <td className="td"><input aria-label={`Line ${i + 1} description`} className="input" value={r.memo} onChange={(e) => set(i, { memo: e.target.value })} /></td>
                <td className="td"><select aria-label={`Line ${i + 1} name`} className="input" value={r.entityId} onChange={(e) => set(i, { entityId: e.target.value })}>
                  <option value="" />{snap.contacts.map((c) => <option key={c.id} value={c.id}>{c.displayName}</option>)}</select></td>
                <td className="td"><button type="button" className="btn-ghost h-8 px-2" aria-label={`Remove line ${i + 1}`} onClick={() => setRows((rs) => (rs.length > 2 ? rs.filter((_, j) => j !== i) : rs))}><Icon name="trash" /></button></td>
              </tr>))}
              <tr className="bg-gray-50 font-semibold"><td className="td" colSpan={3}>Total</td><td className="td text-right tabular-nums">{money(totals.debit)}</td><td className="td text-right tabular-nums">{money(totals.credit)}</td>
                <td className="td" colSpan={3}>{diff === 0 ? (totals.debit ? <span className="badge-paid">Balanced</span> : null) : <span className="badge-due">Out of balance by {money(Math.abs(diff))}</span>}</td></tr>
            </tbody>
          </table>
        </div>
        <div className="flex gap-2 mt-3">
          <button type="button" className="btn-secondary" onClick={() => setRows((rs) => [...rs, blank(), blank()])}>Add lines</button>
          <button type="button" className="btn-secondary" onClick={() => setRows([blank(), blank(), blank(), blank()])}>Clear all lines</button>
        </div>
        {error && <div role="alert" className="mt-4 rounded-md border border-[#FECACA] bg-[#FEF2F2] text-[#DC2626] text-sm px-4 py-3 max-w-2xl">{error}</div>}
      </div>
      <div className="h-16 bg-white border-t border-line flex items-center justify-between px-4 sm:px-6 gap-2">
        <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
        <div className="flex gap-2">
          <button type="button" className="btn-secondary" disabled={saving} onClick={() => save(true)}>Save and new</button>
          <button type="button" className="btn-primary" disabled={saving} onClick={() => save(false)}>Save and close</button>
        </div>
      </div>
    </div>
  );
}
