import { CalculatorLayout } from "@/components/calculator-layout";
import { WaterHeaterCalculator } from "@/components/calculators/water-heater";

export default function WaterHeaterPage() {
  return (
    <CalculatorLayout
      title="Water Heater Electricity Cost Calculator"
      description="Estimate the electricity cost of running an electric water heater."
      formula="Cost = (Watts / 1000) × Hours × Price per kWh"
      example="A 4500W water heater running 3 hours per day at $0.15/kWh costs $60.75 per month."
    >
      <WaterHeaterCalculator />
    </CalculatorLayout>
  );
}