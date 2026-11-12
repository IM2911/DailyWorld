"use client";

import { useState } from "react";
import { CalculatorInput } from "../calculator-input";
import { ElectricityPriceInput } from "../price-input";
import { ResultCard, ResultRow } from "../result-row";
import { applianceCost, formatCurrency, formatKWh, formatNumber } from "@/lib/calculations";

export function ApplianceEnergyCalculator() {
  const [watts, setWatts] = useState("1500");
  const [hours, setHours] = useState("2");
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

  const w = parseFloat(watts);
  const h = parseFloat(hours);
  const p = parseFloat(price);

  const valid = !isNaN(w) && w > 0 && !isNaN(h) && h >= 0 && !isNaN(p) && p > 0 && !priceError;
  const result = valid ? applianceCost(w, h, p) : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <CalculatorInput
          label="Appliance power"
          value={watts}
          onChange={setWatts}
          unit="Watts"
          helper="Power rating from the appliance label."
        />
        <CalculatorInput
          label="Hours used per day"
          value={hours}
          onChange={setHours}
          unit="hours"
          helper="Daily runtime estimate."
        />
        <ElectricityPriceInput value={price} onChange={handlePrice} error={priceError} />
      </div>
      <div>
        <h3 className="font-semibold mb-3 text-slate-900 dark:text-slate-50">
          Energy & cost
        </h3>
        {result ? (
          <div className="space-y-3">
            <ResultCard
              title="Monthly cost"
              value={formatCurrency(result.costPerMonth)}
              note="30-day estimate"
            />
            <div className="rounded-lg border border-border p-4 space-y-0">
              <ResultRow label="Energy per hour" value={formatKWh(result.kWhPerHour)} />
              <ResultRow label="Energy per day" value={formatKWh(result.kWhPerDay)} />
              <ResultRow label="Energy per month" value={formatKWh(result.kWhPerMonth)} highlight />
              <ResultRow label="Annual cost" value={formatCurrency(result.costPerYear)} />
            </div>
            <p className="text-xs text-slate-500">
              Energy (kWh) = (Watts / 1000) × Hours × Days. Cost = kWh × Price.
            </p>
          </div>
        ) : (
          <p className="text-slate-500 text-sm">Enter valid values to see results.</p>
        )}
      </div>
    </div>
  );
}