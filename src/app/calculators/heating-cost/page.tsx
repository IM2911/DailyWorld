import { CalculatorLayout } from "@/components/calculator-layout";
import { HeatingCostCalculator } from "@/components/calculators/heating-cost";

export default function HeatingCostPage() {
  return (
    <CalculatorLayout
      title="Heating Cost Calculator"
      description="Estimate electricity cost of using a space heater or electric heating system."
      formula="Cost = (Watts / 1000) × Hours × Price per kWh"
      example="A 1500W heater running 6 hours daily at $0.15/kWh costs $13.14 per month."
    >
      <HeatingCostCalculator />
    </CalculatorLayout>
  );
}