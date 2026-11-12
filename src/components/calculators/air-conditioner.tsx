"use client";

import { useState } from "react";
import { CalculatorInput } from "../calculator-input";
import { ElectricityPriceInput } from "../price-input";
import { ResultCard, ResultRow } from "../result-row";
import { applianceCost, formatCurrency, formatKWh } from "@/lib/calculations";

export function AirConditionerCalculator() {
  const [watts, setWatts] = useState("1200");
  const [hours, setHours] = useState("8");
  const [daysPerMonth, setDaysPerMonth] = useState("30");
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
  const d = parseFloat(daysPerMonth) || 30;
  const p = parseFloat(price);

  const valid = !isNaN(w) && w > 0 && !isNaN(h) && h >= 0 && !isNaN(p) && p > 0 && !priceError;
  const dailyKWh = valid ? (w / 1000) * h : 0;
  const monthlyKWh = dailyKWh * d;
  const monthlyCost = monthlyKWh * p;
  const dailyCost = dailyKWh * p;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <CalculatorInput
          label="AC Power (Watts or BTU equivalent)"
          value={watts}
          onChange={setWatts}
          unit="Watts"
          helper="Window unit ~500-1400W. Central AC ~3000-5000W."
        />
        <CalculatorInput
          label="Hours per day"
          value={hours}
          onChange={setHours}
          unit="hours"
          helper="Average hours cooling runs per day."
        />
        <CalculatorInput
          label="Days per month"
          value={daysPerMonth}
          onChange={setDaysPerMonth}
          unit="days"
          helper="Cooling days in a month (usually 30 in summer)."
        />
        <ElectricityPriceInput value={price} onChange={handlePrice} error={priceError} />
      </div>
      <div>
        <h3 className="font-semibold mb-3 text-slate-900 dark:text-slate-50">
          Air conditioner cost
        </h3>
        {valid ? (
          <div className="space-y-3">
            <ResultCard
              title="Monthly AC cost"
              value={formatCurrency(monthlyCost)}
              note={`For ${d} cooling days`}
            />
            <div className="rounded-lg border border-border p-4 space-y-0">
              <ResultRow label="Cost per day" value={formatCurrency(dailyCost)} />
              <ResultRow label="Monthly energy" value={formatKWh(monthlyKWh)} highlight />
              <ResultRow label="Hourly cost" value={formatCurrency((w / 1000) * p)} />
              <ResultRow label="Summer season (3 mos)" value={formatCurrency(monthlyCost * 3)} />
            </div>
          </div>
        ) : (
          <p className="text-slate-500 text-sm">Enter valid AC details.</p>
        )}
      </div>
    </div>
  );
}