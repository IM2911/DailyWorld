"use client";

import { useState } from "react";
import { CalculatorInput } from "../calculator-input";
import { ElectricityPriceInput } from "../price-input";
import { ResultCard, ResultRow } from "../result-row";
import { formatCurrency } from "@/lib/calculations";

export function MonthlyBillCalculator() {
  const [kWh, setKWh] = useState("850");
  const [price, setPrice] = useState("0.15");
  const [fixedFee, setFixedFee] = useState("15");
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

  const k = parseFloat(kWh);
  const p = parseFloat(price);
  const f = parseFloat(fixedFee) || 0;

  const valid = !isNaN(k) && k >= 0 && !isNaN(p) && p > 0 && !priceError;
  const energyCost = valid ? k * p : 0;
  const totalBill = energyCost + f;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <CalculatorInput
          label="Monthly energy usage"
          value={kWh}
          onChange={setKWh}
          unit="kWh"
          helper="Total electricity used in a month."
        />
        <ElectricityPriceInput value={price} onChange={handlePrice} error={priceError} />
        <CalculatorInput
          label="Fixed monthly fees / taxes"
          value={fixedFee}
          onChange={setFixedFee}
          unit="$"
          helper="Customer charge, metering, or fixed grid connection fees."
        />
      </div>
      <div>
        <h3 className="font-semibold mb-3 text-slate-900 dark:text-slate-50">
          Estimated bill
        </h3>
        {valid ? (
          <div className="space-y-3">
            <ResultCard
              title="Total monthly bill"
              value={formatCurrency(totalBill)}
              note="Energy charge + fixed fees"
            />
            <div className="rounded-lg border border-border p-4 space-y-0">
              <ResultRow label="Energy charge" value={formatCurrency(energyCost)} />
              <ResultRow label="Fixed fees / taxes" value={formatCurrency(f)} />
              <ResultRow label="Total bill" value={formatCurrency(totalBill)} highlight />
              <ResultRow label="Effective rate" value={`${formatCurrency(totalBill / (k || 1))}/kWh`} />
            </div>
          </div>
        ) : (
          <p className="text-slate-500 text-sm">Enter valid usage and rate values.</p>
        )}
      </div>
    </div>
  );
}