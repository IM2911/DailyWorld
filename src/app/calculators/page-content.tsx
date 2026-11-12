import Link from "next/link";
import { guides } from "@/lib/guides";

export default function CalculatorsPage() {
  const calculators = [
    { href: "/calculators/electricity-cost", label: "Electricity Cost Calculator" },
    { href: "/calculators/appliance-energy", label: "Appliance Energy Calculator" },
    { href: "/calculators/kwh-to-cost", label: "kWh to Cost Calculator" },
    { href: "/calculators/monthly-bill", label: "Monthly Electricity Bill Calculator" },
    { href: "/calculators/air-conditioner", label: "Air Conditioner Electricity Cost" },
    { href: "/calculators/heating-cost", label: "Heating Cost Calculator" },
    { href: "/calculators/washing-machine", label: "Washing Machine Cost" },
    { href: "/calculators/refrigerator", label: "Refrigerator Energy Calculator" },
    { href: "/calculators/dishwasher", label: "Dishwasher Cost" },
    { href: "/calculators/electric-oven", label: "Electric Oven Cost" },
    { href: "/calculators/television", label: "Television Cost" },
    { href: "/calculators/gaming-pc", label: "Gaming PC Cost" },
    { href: "/calculators/water-heater", label: "Water Heater Cost" },
    { href: "/calculators/energy-savings", label: "Energy Savings Calculator" },
    { href: "/calculators/price-comparison", label: "Electricity Price Comparison" },
  ];

  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-bold mb-6 text-slate-900 dark:text-slate-50">Energy Calculators</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {calculators.map((c) => (
          <li key={c.href} className="border border-border rounded p-4 bg-surface hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
            <Link href={c.href} className="text-brand-600 font-medium hover:underline block">
              {c.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}