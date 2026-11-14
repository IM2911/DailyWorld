import type { Metadata } from "next";
import { CalculatorLayout } from "@/components/calculator-layout";
import { KWhToCostCalculator } from "@/components/calculators/kwh-to-cost";
import { pageMetadata } from "@/lib/seo";
import { calculatorNotes } from "@/lib/calculator-notes";

const title = "kWh to Cost Calculator";
const description =
  "Convert kilowatt‑hours of electricity usage into a dollar cost based on your rate.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/calculators/kwh-to-cost",
});

export default function KWhToCostPage() {
  return (
    <CalculatorLayout
      notes={calculatorNotes["kwh-to-cost"]}
      title={title}
      description={description}
      formula="Cost = kWh × Price per kWh"
      example="500 kWh at $0.15/kWh costs $75.00."
    >
      <KWhToCostCalculator />
    </CalculatorLayout>
  );
}