import { CalculatorLayout } from "@/components/calculator-layout";
import { PriceComparisonCalculator } from "@/components/calculators/price-comparison";

export default function PriceComparisonPage() {
  return (
    <CalculatorLayout
      title="Electricity Price Comparison Calculator"
      description="Compare monthly electricity costs across different utility plans or tariffs."
      formula="Cost = kWh × Price per kWh"
      example="850kWh usage at $0.12/kWh vs $0.15/kWh vs $0.22/kWh."
    >
      <PriceComparisonCalculator />
    </CalculatorLayout>
  );
}