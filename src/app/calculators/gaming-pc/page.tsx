import type { Metadata } from "next";
import { CalculatorLayout } from "@/components/calculator-layout";
import { GamingPCCalculator } from "@/components/calculators/gaming-pc";
import { pageMetadata } from "@/lib/seo";

const title = "Gaming PC Electricity Cost Calculator";
const description =
  "Calculate how much power your gaming computer and monitor use per month.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/calculators/gaming-pc",
});

export default function GamingPCPage() {
  return (
    <CalculatorLayout
      title={title}
      description={description}
      formula="Cost = (Watts / 1000) × Hours × Price per kWh"
      example="A 450W PC setup running 4 hours daily at $0.15/kWh costs $8.10 per month."
    >
      <GamingPCCalculator />
    </CalculatorLayout>
  );
}