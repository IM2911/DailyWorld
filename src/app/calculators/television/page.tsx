import type { Metadata } from "next";
import { CalculatorLayout } from "@/components/calculator-layout";
import { TelevisionCalculator } from "@/components/calculators/television";
import { pageMetadata } from "@/lib/seo";
import { calculatorNotes } from "@/lib/calculator-notes";

const title = "Television Electricity Cost Calculator";
const description =
  "Estimate the electricity cost of watching your TV based on its power consumption.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/calculators/television",
});

export default function TelevisionPage() {
  return (
    <CalculatorLayout
      notes={calculatorNotes["television"]}
      title={title}
      description={description}
      formula="Cost = (Watts / 1000) × Hours × Price per kWh"
      example="A 100W TV running for 5 hours at $0.15/kWh costs $0.08 per day."
    >
      <TelevisionCalculator />
    </CalculatorLayout>
  );
}