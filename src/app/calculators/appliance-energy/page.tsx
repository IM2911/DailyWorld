import type { Metadata } from "next";
import { CalculatorLayout } from "@/components/calculator-layout";
import { ApplianceEnergyCalculator } from "@/components/calculators/appliance-energy";
import { pageMetadata } from "@/lib/seo";

const title = "Appliance Energy Calculator";
const description =
  "Estimate the energy consumption and cost of any household appliance.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/calculators/appliance-energy",
});

export default function ApplianceEnergyPage() {
  return (
    <CalculatorLayout
      title={title}
      description={description}
      formula="Energy (kWh) = (Watts / 1000) × Hours Used × Days"
      example="A 1500W appliance used for 2 hours daily at $0.15/kWh costs $13.50 per month."
    >
      <ApplianceEnergyCalculator />
    </CalculatorLayout>
  );
}