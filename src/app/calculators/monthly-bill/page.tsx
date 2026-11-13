import type { Metadata } from "next";
import { CalculatorLayout } from "@/components/calculator-layout";
import { MonthlyBillCalculator } from "@/components/calculators/monthly-bill";
import { pageMetadata } from "@/lib/seo";

const title = "Monthly Electricity Bill Calculator";
const description =
  "Estimate your monthly electricity bill from total usage and rate.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/calculators/monthly-bill",
});

export default function MonthlyBillPage() {
  return (
    <CalculatorLayout
      title={title}
      description={description}
      formula="Bill = (kWh × Price per kWh) + Fixed Fees"
      example="850 kWh at $0.15/kWh plus $15 fixed fees equals a $142.50 bill."
    >
      <MonthlyBillCalculator />
    </CalculatorLayout>
  );
}