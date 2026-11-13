import type { Metadata } from "next";
import { CalculatorLayout } from "@/components/calculator-layout";
import { HeatingCostCalculator } from "@/components/calculators/heating-cost";
import { pageMetadata } from "@/lib/seo";

const title = "Heating Cost Calculator";
const description =
  "Estimate electricity cost of using a space heater or electric heating system.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/calculators/heating-cost",
});

export default function HeatingCostPage() {
  return (
    <CalculatorLayout
      title={title}
      description={description}
      formula="Cost = (Watts / 1000) × Hours × Price per kWh"
      example="A 1500W heater running 6 hours daily at $0.15/kWh costs $13.14 per month."
    >
      <HeatingCostCalculator />
    </CalculatorLayout>
  );
}