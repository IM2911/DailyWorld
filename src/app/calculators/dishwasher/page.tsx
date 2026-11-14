import type { Metadata } from "next";
import { CalculatorLayout } from "@/components/calculator-layout";
import { DishwasherCalculator } from "@/components/calculators/dishwasher";
import { pageMetadata } from "@/lib/seo";
import { calculatorNotes } from "@/lib/calculator-notes";

const title = "Dishwasher Electricity Cost Calculator";
const description =
  "Estimate the electricity cost of running your dishwasher per load, daily, and monthly.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/calculators/dishwasher",
});

export default function DishwasherPage() {
  return (
    <CalculatorLayout
      notes={calculatorNotes["dishwasher"]}
      title={title}
      description={description}
      formula="Cost = (Watts / 1000) × Hours per Cycle × Price per kWh"
      example="An 1800W dishwasher running for 2 hours at $0.15/kWh costs $0.54 per load."
    >
      <DishwasherCalculator />
    </CalculatorLayout>
  );
}