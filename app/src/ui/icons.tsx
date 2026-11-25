// Minimal stroke icon set (24×24, 1.75px).
const P: Record<string, string> = {
  plus: "M12 5v14M5 12h14",
  home: "M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10",
  bank: "M3 10h18M5 10v8m4-8v8m6-8v8m4-8v8M3 21h18M12 3l9 5H3l9-5z",
  sales: "M3 3h18v4H3zM5 7v14h14V7M9 11h6M9 15h6",
  expenses: "M17 9V7a5 5 0 00-10 0v2M5 9h14l-1 12H6L5 9z",
  people: "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm13 10v-2a4 4 0 00-3-3.9M16 3.1a4 4 0 010 7.8",
  projects: "M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z",
  payroll: "M2 7h20v10H2zM12 15a3 3 0 100-6 3 3 0 000 6zM6 7v10M18 7v10",
  reports: "M4 20V10m6 10V4m6 16v-6m6 6H2",
  taxes: "M9 14l6-6M9.5 8.5h.01M14.5 13.5h.01M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2V3z",
  inventory: "M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8",
  accounting: "M4 4h16v16H4zM4 9h16M9 4v16",
  settings: "M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z",
  search: "M21 21l-4.3-4.3M17 11a6 6 0 11-12 0 6 6 0 0112 0z",
  bell: "M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0",
  clock: "M12 7v5l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  timer: "M12 13V9M10 2h4M12 22a8 8 0 100-16 8 8 0 000 16z",
  sparkle: "M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4L12 3z",
  star: "M12 3l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2l1.1-6.2L3 9.6l6.2-.9L12 3z",
  chevron: "M9 6l6 6-6 6",
  chevronLeft: "M15 6l-6 6 6 6",
  x: "M18 6L6 18M6 6l12 12",
  check: "M5 13l4 4L19 7",
  trash: "M4 7h16M10 11v6M14 11v6M5 7l1 13h12l1-13M9 7V4h6v3",
  grip: "M9 6h.01M9 12h.01M9 18h.01M15 6h.01M15 12h.01M15 18h.01",
  play: "M7 5l12 7-12 7V5z",
  pause: "M8 5v14M16 5v14",
  undo: "M9 14L4 9l5-5M4 9h11a5 5 0 010 10h-3",
  lock: "M6 11h12v10H6zM8 11V7a4 4 0 118 0v4",
  logout: "M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3",
  menu: "M4 6h16M4 12h16M4 18h16"
};

export function Icon({ name, className = "w-4 h-4", strokeWidth = 1.75 }: { name: keyof typeof P | string; className?: string; strokeWidth?: number }) {
  return (
    <svg className={`${className} shrink-0`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={P[name] || ""} />
    </svg>
  );
}
