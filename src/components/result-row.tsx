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
      <p className="result-card-value">
        {value}
        {unit && <span>{unit}</span>}
      </p>
      {note && <p className="result-card-note">{note}</p>}
    </div>
  );
}
