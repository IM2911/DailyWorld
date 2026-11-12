import { CalculatorLayout } from "@/components/calculator-layout";
import { MonthlyBillCalculator } from "@/components/calculators/monthly-bill";

export default function MonthlyBillPage() {
  return (
    <CalculatorLayout
      title="Monthly Electricity Bill Calculator"
      description="Estimate your monthly electricity bill from total usage and rate."
      formula="Bill = (kWh × Price per kWh) + Fixed Fees"
      example="850 kWh at $0.15/kWh plus $15 fixed fees equals a $142.50 bill."
    >
      <MonthlyBillCalculator />
    </CalculatorLayout>
  );
}