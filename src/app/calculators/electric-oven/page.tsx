import type { Metadata } from "next";
import { CalculatorLayout } from "@/components/calculator-layout";
import { ElectricOvenCalculator } from "@/components/calculators/electric-oven";
import { pageMetadata } from "@/lib/seo";
import { calculatorNotes } from "@/lib/calculator-notes";

const title = "Electric Oven Cost Calculator";
const description =
  "Estimate the electricity cost of using your oven based on power and usage time.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/calculators/electric-oven",
});

export default function ElectricOvenPage() {
  return (
    <CalculatorLayout
      notes={calculatorNotes["electric-oven"]}
      title={title}
      description={description}
      formula="Cost = (Watts / 1000) × Hours × Price per kWh"
      example="A 2500W oven running for 1 hour at $0.15/kWh costs $0.38."
    >
      <ElectricOvenCalculator />
    </CalculatorLayout>
  );
}