"use client";

import { useState } from "react";
import { CalculatorInput } from "../calculator-input";
import { ResultCard, ResultRow } from "../result-row";
import { formatCurrency, priceComparison } from "@/lib/calculations";

export function PriceComparisonCalculator() {
  const [kWh, setKWh] = useState("850");
  const [rate1, setRate1] = useState("0.12");
  const [rate2, setRate2] = useState("0.15");
  const [rate3, setRate3] = useState("0.22");

  const k = parseFloat(kWh) || 0;
  const r1 = parseFloat(rate1) || 0;
  const r2 = parseFloat(rate2) || 0;
  const r3 = parseFloat(rate3) || 0;

  const results = priceComparison(k, [
    { label: "Plan A (Low Rate)", pricePerKWh: r1 },
    { label: "Plan B (Standard Rate)", pricePerKWh: r2 },
    { label: "Plan C (High Rate)", pricePerKWh: r3 },
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <CalculatorInput
          label="Monthly electricity usage"
          value={kWh}
          onChange={setKWh}
          unit="kWh"
        />
        <CalculatorInput
          label="Plan A rate"
          value={rate1}
          onChange={setRate1}
          unit="$/kWh"
        />
        <CalculatorInput
          label="Plan B rate"
          value={rate2}
          onChange={setRate2}
          unit="$/kWh"
        />
        <CalculatorInput
          label="Plan C rate"
          value={rate3}
          onChange={setRate3}
          unit="$/kWh"
        />
      </div>
      <div>
        <h3 className="font-semibold mb-3 text-slate-900 dark:text-slate-50">
          Plan comparison
        </h3>
        <div className="space-y-4">
          {results.map((res, i) => (
            <div key={i} className="rounded-lg border border-border p-4">
              <p className="font-medium text-sm text-slate-700 dark:text-slate-300">
                {res.label} ({formatCurrency(res.pricePerKWh)}/kWh)
              </p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-xs text-slate-500">Monthly cost:</span>
                <span className="font-medium text-brand-600">
                  {formatCurrency(res.monthlyCost)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}