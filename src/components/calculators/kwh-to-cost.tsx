"use client";

import { useState } from "react";
import { CalculatorInput } from "../calculator-input";
import { ElectricityPriceInput } from "../price-input";
import { ResultCard, ResultRow } from "../result-row";
import { formatCurrency, kWhToCost } from "@/lib/calculations";

export function KWhToCostCalculator() {
  const [kWh, setKWh] = useState("500");
  const [price, setPrice] = useState("0.15");
  const [priceError, setPriceError] = useState<string | undefined>();

  const validatePrice = (raw: string) => {
    const n = parseFloat(raw);
    if (raw === "") return undefined;
    if (isNaN(n)) return "Enter a valid number.";
    if (n < 0) return "Price cannot be negative.";
    if (n > 1) return "Check cents vs dollars (e.g. 0.15 not 15).";
    return undefined;
  };

  const handlePrice = (raw: string) => {
    setPrice(raw);
    setPriceError(validatePrice(raw));
  };

  const k = parseFloat(kWh);
  const p = parseFloat(price);

  const valid = !isNaN(k) && k >= 0 && !isNaN(p) && p > 0 && !priceError;
  const totalCost = valid ? kWhToCost(k, p) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <CalculatorInput
          label="Energy consumption"
          value={kWh}
          onChange={setKWh}
          unit="kWh"
          helper="Kilowatt-hours from your meter or bill."
        />
        <ElectricityPriceInput value={price} onChange={handlePrice} error={priceError} />
      </div>
      <div>
        <h3 className="font-semibold mb-3 text-slate-900 dark:text-slate-50">
          Calculated cost
        </h3>
        {valid ? (
          <div className="space-y-3">
            <ResultCard
              title="Total cost"
              value={formatCurrency(totalCost)}
              note={`For ${k} kWh at ${formatCurrency(p)}/kWh`}
            />
            <div className="rounded-lg border border-border p-4 space-y-0">
              <ResultRow label="Rate per kWh" value={formatCurrency(p)} />
              <ResultRow label="Total kWh" value={`${k} kWh`} />
              <ResultRow label="Estimated cost" value={formatCurrency(totalCost)} highlight />
            </div>
          </div>
        ) : (
          <p className="text-slate-500 text-sm">Enter valid energy and price values.</p>
        )}
      </div>
    </div>
  );
}