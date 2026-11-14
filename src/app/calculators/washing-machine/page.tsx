import type { Metadata } from "next";
import { CalculatorLayout } from "@/components/calculator-layout";
import { WashingMachineCalculator } from "@/components/calculators/washing-machine";
import { pageMetadata } from "@/lib/seo";
import { calculatorNotes } from "@/lib/calculator-notes";

const title = "Washing Machine Electricity Cost Calculator";
const description =
  "Estimate how much your washing machine costs to operate per load, daily, and monthly.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/calculators/washing-machine",
});

export default function WashingMachinePage() {
  return (
    <CalculatorLayout
      notes={calculatorNotes["washing-machine"]}
      title={title}
      description={description}
      formula="Cost = (Watts / 1000) × Hours per Cycle × Price per kWh"
      example="A 500W washer running for 1.5 hours at $0.15/kWh costs $0.11 per load."
    >
      <WashingMachineCalculator />
    </CalculatorLayout>
  );
}