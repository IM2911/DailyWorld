import type { Metadata } from "next";
import { CalculatorLayout } from "@/components/calculator-layout";
import { EnergySavingsCalculator } from "@/components/calculators/energy-savings";
import { pageMetadata } from "@/lib/seo";
import { calculatorNotes } from "@/lib/calculator-notes";

const title = "Energy Savings Calculator";
const description =
  "Calculate the potential savings from replacing an old appliance with a more efficient model.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/calculators/energy-savings",
});

export default function EnergySavingsPage() {
  return (
    <CalculatorLayout
      notes={calculatorNotes["energy-savings"]}
      title={title}
      description={description}
      formula="Savings = (Old Watts - New Watts) × Hours × Price per kWh"
      example="Replacing a 100W light with a 10W LED saves $10.80 per year at $0.15/kWh."
    >
      <EnergySavingsCalculator />
    </CalculatorLayout>
  );
}