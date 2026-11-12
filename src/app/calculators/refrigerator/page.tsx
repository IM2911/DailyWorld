import { CalculatorLayout } from "@/components/calculator-layout";
import { RefrigeratorCalculator } from "@/components/calculators/refrigerator";

export default function RefrigeratorCalculatorPage() {
  return (
    <CalculatorLayout
      title="Refrigerator Energy Calculator"
      description="Estimate the running cost of your refrigerator by accounting for its power rating and the compressor's duty cycle."
      formula="Cost = (Watts / 1000) × (24 × Duty Cycle) × Days × Price per kWh"
      example="A 150W fridge with a 40% duty cycle running for 30 days at $0.15/kWh costs $6.48 per month."
    >
      <RefrigeratorCalculator />
    </CalculatorLayout>
  );
}