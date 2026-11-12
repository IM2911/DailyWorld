"use client";

import { useState } from "react";
import { CalculatorInput } from "../calculator-input";
import { ElectricityPriceInput } from "../price-input";
import { ResultCard, ResultRow } from "../result-row";
import { formatCurrency } from "@/lib/calculations";

export function HeatingCostCalculator() {
  const [watts, setWatts] = useState("1500");
  const [hours, setHours] = useState("6");
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
  const monthlyCost = dailyCost * 30;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <CalculatorInput
          label="Space heater power"
          value={watts}
          onChange={setWatts}
          unit="Watts"
          helper="Standard portable electric heaters are 1500W."
        />
        <CalculatorInput
          label="Hours per day"
          value={hours}
          onChange={setHours}
          unit="hours"
          helper="Daily runtime."
        />
        <ElectricityPriceInput value={price} onChange={handlePrice} error={priceError} />
      </div>
      <div>
        <h3 className="font-semibold mb-3 text-slate-900 dark:text-slate-50">
          Heating cost
        </h3>
        {valid ? (
          <div className="space-y-3">
            <ResultCard
              title="Monthly cost"
              value={formatCurrency(monthlyCost)}
              note="30-day estimate"
            />
            <div className="rounded-lg border border-border p-4 space-y-0">
              <ResultRow label="Cost per day" value={formatCurrency(dailyCost)} />
              <ResultRow label="Monthly cost" value={formatCurrency(monthlyCost)} highlight />
              <ResultRow label="Winter season (4 mos)" value={formatCurrency(monthlyCost * 4)} />
            </div>
          </div>
        ) : (
          <p className="text-slate-500 text-sm">Enter valid values to see results.</p>
        )}
      </div>
    </div>
  );
}