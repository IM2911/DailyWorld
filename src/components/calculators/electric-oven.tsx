"use client";

import { useState } from "react";
import { CalculatorInput } from "../calculator-input";
import { ElectricityPriceInput } from "../price-input";
import { ResultCard, ResultRow } from "../result-row";
import { formatCurrency } from "@/lib/calculations";

export function ElectricOvenCalculator() {
  const [watts, setWatts] = useState("2500");
  const [hours, setHours] = useState("1.5");
  const [price, setPrice] = useState("0.15");
  const [priceError, setPriceError] = useState<string | undefined>();

  const handlePrice = (raw: string) => {
    setPrice(raw);
    const n = parseFloat(raw);
    if (isNaN(n) || n < 0 || n > 1) {
      setPriceError("Enter a valid price (e.g. 0.15)");
    } else {
      setPriceError(undefined);
    }
  };

  const w = parseFloat(watts);
  const h = parseFloat(hours);
  const p = parseFloat(price);

  const valid = !isNaN(w) && w > 0 && !isNaN(h) && h >= 0 && !isNaN(p) && p > 0 && !priceError;
  const dailyCost = valid ? (w / 1000) * h * p : 0;
  const weeklyCost = dailyCost * 7;
  const monthlyCost = dailyCost * 30;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <CalculatorInput
          label="Oven power"
          value={watts}
          onChange={setWatts}
          unit="Watts"
          helper="Typically 2000-3500W. Bake mode uses less than broil."
        />
        <CalculatorInput
          label="Hours per day"
          value={hours}
          onChange={setHours}
          unit="hours"
          helper="Total oven runtime per day."
        />
        <ElectricityPriceInput value={price} onChange={handlePrice} error={priceError} />
      </div>
      <div>
        <h3 className="font-semibold mb-3 text-slate-900 dark:text-slate-50">
          Oven running cost
        </h3>
        {valid ? (
          <div className="space-y-3">
            <ResultCard
              title="Daily cost"
              value={formatCurrency(dailyCost)}
              note="Based on your inputs"
            />
            <div className="rounded-lg border border-border p-4 space-y-0">
              <ResultRow label="Per week" value={formatCurrency(weeklyCost)} />
              <ResultRow label="Per month" value={formatCurrency(monthlyCost)} highlight />
              <ResultRow label="Per year" value={formatCurrency(monthlyCost * 12)} />
            </div>
          </div>
        ) : (
          <p className="text-slate-500 text-sm">Enter valid values to see results.</p>
        )}
      </div>
    </div>
  );
}