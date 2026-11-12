import { CalculatorLayout } from "@/components/calculator-layout";
import { ElectricityCostCalculator } from "@/components/calculators/electricity-cost";

export default function ElectricityCostPage() {
  return (
    <CalculatorLayout
      title="Electricity Cost Calculator"
      description="Estimate how much any appliance costs to run based on its power rating, daily usage, and your electricity rate."
      formula="Cost = (Watts / 1000) × Hours Used × Price per kWh"
      example="A 1500W heater used for 4 hours at $0.15/kWh costs $0.90 per day."
    >
      <ElectricityCostCalculator />
    </CalculatorLayout>
  );
}