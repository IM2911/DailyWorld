import type { Metadata } from "next";
import { CalculatorLayout } from "@/components/calculator-layout";
import { PriceComparisonCalculator } from "@/components/calculators/price-comparison";
import { pageMetadata } from "@/lib/seo";

const title = "Electricity Price Comparison Calculator";
const description =
  "Compare monthly electricity costs across different utility plans or tariffs.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/calculators/price-comparison",
});

export default function PriceComparisonPage() {
  return (
    <CalculatorLayout
      title={title}
      description={description}
      formula="Cost = kWh × Price per kWh"
      example="850kWh usage at $0.12/kWh vs $0.15/kWh vs $0.22/kWh."
    >
      <PriceComparisonCalculator />
    </CalculatorLayout>
  );
}