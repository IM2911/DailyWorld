import type { Metadata } from "next";
import { CalculatorLayout } from "@/components/calculator-layout";
import { WaterHeaterCalculator } from "@/components/calculators/water-heater";
import { pageMetadata } from "@/lib/seo";

const title = "Water Heater Electricity Cost Calculator";
const description =
  "Estimate the electricity cost of running an electric water heater.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/calculators/water-heater",
});

export default function WaterHeaterPage() {
  return (
    <CalculatorLayout
      title={title}
      description={description}
      formula="Cost = (Watts / 1000) × Hours × Price per kWh"
      example="A 4500W water heater running 3 hours per day at $0.15/kWh costs $60.75 per month."
    >
      <WaterHeaterCalculator />
    </CalculatorLayout>
  );
}