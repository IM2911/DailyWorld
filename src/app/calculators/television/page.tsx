import { CalculatorLayout } from "@/components/calculator-layout";
import { TelevisionCalculator } from "@/components/calculators/television";

export default function TelevisionPage() {
  return (
    <CalculatorLayout
      title="Television Electricity Cost Calculator"
      description="Estimate the electricity cost of watching your TV based on its power consumption."
      formula="Cost = (Watts / 1000) × Hours × Price per kWh"
      example="A 100W TV running for 5 hours at $0.15/kWh costs $0.08 per day."
    >
      <TelevisionCalculator />
    </CalculatorLayout>
  );
}