import Link from "next/link";
import {
  Calculator,
  Zap,
  Thermometer,
  WashingMachine,
  Refrigerator,
  ChefHat,
  Tv,
  Gamepad2,
  Droplet,
  Flame,
  TrendingUp,
  DollarSign,
  BatteryCharging,
  ArrowUpRight,
} from "lucide-react";

const calculators = [
  { href: "/calculators/electricity-cost", label: "Electricity Cost Calculator", icon: Calculator, desc: "Calculate your total electricity cost based on usage." },
  { href: "/calculators/appliance-energy", label: "Appliance Energy Calculator", icon: Zap, desc: "Estimate energy consumption of household appliances." },
  { href: "/calculators/kwh-to-cost", label: "kWh to Cost Calculator", icon: DollarSign, desc: "Convert kilowatt-hours to monetary cost." },
  { href: "/calculators/monthly-bill", label: "Monthly Electricity Bill Calculator", icon: TrendingUp, desc: "Estimate your monthly electricity bill." },
  { href: "/calculators/air-conditioner", label: "Air Conditioner Electricity Cost", icon: Thermometer, desc: "Calculate AC running costs based on usage." },
  { href: "/calculators/heating-cost", label: "Heating Cost Calculator", icon: Flame, desc: "Estimate heating costs for your home." },
  { href: "/calculators/washing-machine", label: "Washing Machine Cost", icon: WashingMachine, desc: "Calculate washing machine operating costs." },
  { href: "/calculators/refrigerator", label: "Refrigerator Energy Calculator", icon: Refrigerator, desc: "Estimate refrigerator running costs." },
  { href: "/calculators/dishwasher", label: "Dishwasher Cost", icon: ChefHat, desc: "Calculate dishwasher energy consumption." },
  { href: "/calculators/electric-oven", label: "Electric Oven Cost", icon: Flame, desc: "Estimate electric oven operating costs." },
  { href: "/calculators/television", label: "Television Cost", icon: Tv, desc: "Calculate TV electricity consumption." },
  { href: "/calculators/gaming-pc", label: "Gaming PC Cost", icon: Gamepad2, desc: "Estimate gaming PC power costs." },
  { href: "/calculators/water-heater", label: "Water Heater Cost", icon: Droplet, desc: "Calculate water heater energy costs." },
  { href: "/calculators/energy-savings", label: "Energy Savings Calculator", icon: BatteryCharging, desc: "Estimate potential energy savings." },
  { href: "/calculators/price-comparison", label: "Electricity Price Comparison", icon: DollarSign, desc: "Compare electricity rates and find savings." },
];

export default function CalculatorsPage() {
  return (
    <div className="container-page py-12 md:py-16">
      <header className="page-intro">
        <span className="section-eyebrow">The calculator library</span>
        <h1>Energy calculators</h1>
        <p>
          Straightforward tools to estimate appliance consumption, understand
          electricity costs and make more informed decisions at home.
        </p>
      </header>

      <div className="directory-grid">
        {calculators.map((calculator) => {
          const Icon = calculator.icon;

          return (
            <Link
              key={calculator.href}
              href={calculator.href}
              className="directory-card group"
            >
              <div className="mb-5 flex items-start justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-muted text-brand">
                  <Icon size={21} strokeWidth={1.9} />
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-text-subtle transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                />
              </div>
              <h2 className="transition-colors group-hover:text-brand">
                {calculator.label}
              </h2>
              <p className="mb-0">{calculator.desc}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
