import type { Metadata } from "next";
import { CalculatorLayout } from "@/components/calculator-layout";
import { RefrigeratorCalculator } from "@/components/calculators/refrigerator";
import { pageMetadata } from "@/lib/seo";
import { calculatorNotes } from "@/lib/calculator-notes";

const title = "Refrigerator Energy Calculator";
const description =
  "Estimate the running cost of your refrigerator by accounting for its power rating and the compressor's duty cycle.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/calculators/refrigerator",
});

export default function RefrigeratorCalculatorPage() {
  return (
    <CalculatorLayout
      notes={calculatorNotes["refrigerator"]}
      title={title}
      description={description}
      formula="Cost = (Watts / 1000) × (24 × Duty Cycle) × Days × Price per kWh"
      example="A 150W fridge with a 40% duty cycle running for 30 days at $0.15/kWh costs $6.48 per month."
    >
      <RefrigeratorCalculator />
    </CalculatorLayout>
  );
}