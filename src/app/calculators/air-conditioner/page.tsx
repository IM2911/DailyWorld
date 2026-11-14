import type { Metadata } from "next";
import { CalculatorLayout } from "@/components/calculator-layout";
import { AirConditionerCalculator } from "@/components/calculators/air-conditioner";
import { pageMetadata } from "@/lib/seo";
import { calculatorNotes } from "@/lib/calculator-notes";

const title = "Air Conditioner Electricity Cost Calculator";
const description =
  "Estimate the electricity cost of running your air conditioner during summer.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/calculators/air-conditioner",
});

export default function AirConditionerPage() {
  return (
    <CalculatorLayout
      notes={calculatorNotes["air-conditioner"]}
      title={title}
      description={description}
      formula="Cost = (Watts / 1000) × Hours × Days × Price per kWh"
      example="A 1200W AC running 8 hours daily for 30 days at $0.15/kWh costs $43.20 per month."
    >
      <AirConditionerCalculator />
    </CalculatorLayout>
  );
}