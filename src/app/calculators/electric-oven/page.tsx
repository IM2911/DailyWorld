import { CalculatorLayout } from "@/components/calculator-layout";
import { ElectricOvenCalculator } from "@/components/calculators/electric-oven";

export default function ElectricOvenPage() {
  return (
    <CalculatorLayout
      title="Electric Oven Cost Calculator"
      description="Estimate the electricity cost of using your oven based on power and usage time."
      formula="Cost = (Watts / 1000) × Hours × Price per kWh"
      example="A 2500W oven running for 1 hour at $0.15/kWh costs $0.38."
    >
      <ElectricOvenCalculator />
    </CalculatorLayout>
  );
}