import { CalculatorLayout } from "@/components/calculator-layout";
import { DishwasherCalculator } from "@/components/calculators/dishwasher";

export default function DishwasherPage() {
  return (
    <CalculatorLayout
      title="Dishwasher Electricity Cost Calculator"
      description="Estimate the electricity cost of running your dishwasher per load, daily, and monthly."
      formula="Cost = (Watts / 1000) × Hours per Cycle × Price per kWh"
      example="An 1800W dishwasher running for 2 hours at $0.15/kWh costs $0.54 per load."
    >
      <DishwasherCalculator />
    </CalculatorLayout>
  );
}