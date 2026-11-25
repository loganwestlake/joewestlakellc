// Date field with the classic accounting shortcuts: T = today, + / − = one day later / earlier.
import { addDaysISO, todayISO } from "./books";

export function DateInput({ value, onChange, id, className = "input" }: { value: string; onChange: (v: string) => void; id?: string; className?: string }) {
  return (
    <input
      id={id} type="date" className={className} value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        const k = e.key.toLowerCase();
        if (k === "t") { e.preventDefault(); onChange(todayISO()); }
        else if ((k === "+" || k === "=") && value) { e.preventDefault(); onChange(addDaysISO(value, 1)); }
        else if ((k === "-" || k === "_") && value) { e.preventDefault(); onChange(addDaysISO(value, -1)); }
      }}
      title="T = today · + / − = next / previous day"
    />
  );
}
