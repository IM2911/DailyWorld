import { CalculatorLayout } from "@/components/calculator-layout";
import { EnergySavingsCalculator } from "@/components/calculators/energy-savings";

export default function EnergySavingsPage() {
  return (
    <CalculatorLayout
      title="Energy Savings Calculator"
      description="Calculate the potential savings from replacing an old appliance with a more efficient model."
      formula="Savings = (Old Watts - New Watts) × Hours × Price per kWh"
      example="Replacing a 100W light with a 10W LED saves $10.80 per year at $0.15/kWh."
    >
      <EnergySavingsCalculator />
    </CalculatorLayout>
  );
}