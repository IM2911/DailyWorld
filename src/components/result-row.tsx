import { ReactNode } from "react";

interface ResultRowProps {
  label: string;
  value: ReactNode;
  highlight?: boolean;
}

export function ResultRow({ label, value, highlight = false }: ResultRowProps) {
  return (
    <div className={`result-row ${highlight ? "result-row-highlight" : ""}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export function ResultCard({
  title,
  value,
  unit,
  note,
}: {
  title: string;
  value: string;
  unit?: string;
  note?: string;
}) {
  return (
    <div className="result-card">
      <p className="result-card-label">{title}</p>
      <p className="result-card-value" aria-live="polite">
        {/* keyed by the value: a new figure steps in (dw-tick in globals.css) */}
        <b key={value} className="dw-tick">
          {value}
        </b>
        {unit && <span>{unit}</span>}
      </p>
      {note && <p className="result-card-note">{note}</p>}
    </div>
  );
}
