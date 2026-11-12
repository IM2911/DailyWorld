import { CalculatorLayout } from "@/components/calculator-layout";
import { AirConditionerCalculator } from "@/components/calculators/air-conditioner";

export default function AirConditionerPage() {
  return (
    <CalculatorLayout
      title="Air Conditioner Electricity Cost Calculator"
      description="Estimate the electricity cost of running your air conditioner during summer."
      formula="Cost = (Watts / 1000) × Hours × Days × Price per kWh"
      example="A 1200W AC running 8 hours daily for 30 days at $0.15/kWh costs $43.20 per month."
    >
      <AirConditionerCalculator />
    </CalculatorLayout>
  );
}