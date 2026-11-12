"use client";

import { useState } from "react";
import { CalculatorInput } from "../calculator-input";
import { ElectricityPriceInput } from "../price-input";
import { ResultCard, ResultRow } from "../result-row";
import { formatCurrency } from "@/lib/calculations";

export function DishwasherCalculator() {
  const [watts, setWatts] = useState("1800");
  const [cycles, setCycles] = useState("4");
  const [hoursPerCycle, setHoursPerCycle] = useState("2");
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
  const c = parseFloat(cycles);
  const h = parseFloat(hoursPerCycle);
  const p = parseFloat(price);

  const valid = !isNaN(w) && w > 0 && !isNaN(c) && c >= 0 && !isNaN(h) && h >= 0 && !isNaN(p) && p > 0 && !priceError;
  const costPerCycle = valid ? (w / 1000) * h * p : 0;
  const dailyCost = costPerCycle * c;
  const monthlyCost = dailyCost * 30;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <CalculatorInput
          label="Dishwasher power"
          value={watts}
          onChange={setWatts}
          unit="Watts"
          helper="Typically 1500-2500W. Eco mode uses less."
        />
        <CalculatorInput
          label="Cycles per day"
          value={cycles}
          onChange={setCycles}
          unit="cycles"
          helper="Number of dish loads run daily."
        />
        <CalculatorInput
          label="Hours per cycle"
          value={hoursPerCycle}
          onChange={setHoursPerCycle}
          unit="hours"
          helper="Eco cycles run ~2 hours."
        />
        <ElectricityPriceInput value={price} onChange={handlePrice} error={priceError} />
      </div>
      <div>
        <h3 className="font-semibold mb-3 text-slate-900 dark:text-slate-50">
          Dishwasher cost
        </h3>
        {valid ? (
          <div className="space-y-3">
            <ResultCard
              title="Cost per load"
              value={formatCurrency(costPerCycle)}
              note="Energy cost only"
            />
            <div className="rounded-lg border border-border p-4 space-y-0">
              <ResultRow label="Per day" value={formatCurrency(dailyCost)} />
              <ResultRow label="Per month" value={formatCurrency(monthlyCost)} highlight />
              <ResultRow label="Annual cost" value={formatCurrency(monthlyCost * 12)} />
            </div>
          </div>
        ) : (
          <p className="text-slate-500 text-sm">Enter valid values to see results.</p>
        )}
      </div>
    </div>
  );
}