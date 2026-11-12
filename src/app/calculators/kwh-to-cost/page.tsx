import { CalculatorLayout } from "@/components/calculator-layout";
import { KWhToCostCalculator } from "@/components/calculators/kwh-to-cost";

export default function KWhToCostPage() {
  return (
    <CalculatorLayout
      title="kWh to Cost Calculator"
      description="Convert kilowatt‑hours of electricity usage into a dollar cost based on your rate."
      formula="Cost = kWh × Price per kWh"
      example="500 kWh at $0.15/kWh costs $75.00."
    >
      <KWhToCostCalculator />
    </CalculatorLayout>
  );
}