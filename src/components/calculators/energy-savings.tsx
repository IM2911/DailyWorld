"use client";

import { useState } from "react";
import { CalculatorInput } from "../calculator-input";
import { ElectricityPriceInput } from "../price-input";
import { ResultCard, ResultRow } from "../result-row";
import { energySavings, formatCurrency } from "@/lib/calculations";

export function EnergySavingsCalculator() {
  const [oldWatts, setOldWatts] = useState("100");
  const [newWatts, setNewWatts] = useState("10");
  const [hours, setHours] = useState("6");
  const [appliancePrice, setAppliancePrice] = useState("25");
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

  const ow = parseFloat(oldWatts);
  const nw = parseFloat(newWatts);
  const h = parseFloat(hours);
  const ap = parseFloat(appliancePrice) || 0;
  const p = parseFloat(price);

  const valid = !isNaN(ow) && !isNaN(nw) && !isNaN(h) && !isNaN(p) && p > 0 && !priceError;
  const savings = valid ? energySavings(ow, nw, h, p, ap) : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <CalculatorInput
          label="Old appliance power"
          value={oldWatts}
          onChange={setOldWatts}
          unit="Watts"
        />
        <CalculatorInput
          label="New efficient appliance power"
          value={newWatts}
          onChange={setNewWatts}
          unit="Watts"
        />
        <CalculatorInput
          label="Hours used per day"
          value={hours}
          onChange={setHours}
          unit="hours"
        />
        <CalculatorInput
          label="New appliance purchase cost"
          value={appliancePrice}
          onChange={setAppliancePrice}
          unit="$"
          helper="Optional. Used to calculate payback period."
        />
        <ElectricityPriceInput value={price} onChange={handlePrice} error={priceError} />
      </div>
      <div>
        <h3 className="font-semibold mb-3 text-slate-900 dark:text-slate-50">
          Projected savings
        </h3>
        {savings ? (
          <div className="space-y-3">
            <ResultCard
              title="Annual savings"
              value={formatCurrency(savings.annualSavings)}
              note={`${savings.percentSaved.toFixed(0)}% reduction in energy cost`}
            />
            <div className="rounded-lg border border-border p-4 space-y-0">
              <ResultRow label="Monthly savings" value={formatCurrency(savings.monthlySavings)} highlight />
              <ResultRow label="Old annual cost" value={formatCurrency(savings.oldAnnualCost)} />
              <ResultRow label="New annual cost" value={formatCurrency(savings.newAnnualCost)} />
              {savings.paybackYears !== null && (
                <ResultRow
                  label="Payback period"
                  value={`${savings.paybackYears.toFixed(1)} years`}
                />
              )}
            </div>
          </div>
        ) : (
          <p className="text-slate-500 text-sm">Enter valid values to see savings.</p>
        )}
      </div>
    </div>
  );
}