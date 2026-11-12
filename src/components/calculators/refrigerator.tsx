"use client";

import { useState } from "react";
import { CalculatorInput } from "../calculator-input";
import { ElectricityPriceInput } from "../price-input";
import { ResultCard, ResultRow } from "../result-row";
import { applianceCost, formatCurrency, formatKWh } from "@/lib/calculations";

export function RefrigeratorCalculator() {
  const [watts, setWatts] = useState("150");
  const [dutyCycle, setDutyCycle] = useState("33");
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
  const dc = parseFloat(dutyCycle) / 100;
  const p = parseFloat(price);

  const valid = !isNaN(w) && w > 0 && !isNaN(dc) && !isNaN(p) && p > 0 && !priceError;
  const avgHoursPerDay = 24 * dc;
  const dailyKWh = valid ? (w / 1000) * avgHoursPerDay : 0;
  const monthlyCost = dailyKWh * 30 * p;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <CalculatorInput
          label="Refrigerator power"
          value={watts}
          onChange={setWatts}
          unit="Watts"
          helper="Average Watts when compressor runs (usually 100-250W)."
        />
        <CalculatorInput
          label="Compressor duty cycle"
          value={dutyCycle}
          onChange={setDutyCycle}
          unit="%"
          helper="Percent of time the motor runs (usually 30-50%)."
        />
        <ElectricityPriceInput value={price} onChange={handlePrice} error={priceError} />
      </div>
      <div>
        <h3 className="font-semibold mb-3 text-slate-900 dark:text-slate-50">
          Estimated running cost
        </h3>
        {valid ? (
          <div className="space-y-3">
            <ResultCard
              title="Monthly cost"
              value={formatCurrency(monthlyCost)}
              note="30-day estimate"
            />
            <div className="rounded-lg border border-border p-4 space-y-0">
              <ResultRow label="Avg runtime/day" value={`${avgHoursPerDay.toFixed(1)} hours`} />
              <ResultRow label="Energy per day" value={formatKWh(dailyKWh)} />
              <ResultRow label="Energy per month" value={formatKWh(dailyKWh * 30)} highlight />
              <ResultRow label="Annual cost" value={formatCurrency(monthlyCost * 12)} />
            </div>
            <p className="text-xs text-slate-500">
              Note: Refrigerators cycle on and off based on internal temperature.
            </p>
          </div>
        ) : (
          <p className="text-slate-500 text-sm">Enter valid appliance values.</p>
        )}
      </div>
    </div>
  );
}