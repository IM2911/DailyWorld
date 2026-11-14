import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Energy Saving Tips",
  description:
    "Practical ways to cut household electricity use across lighting, heating and cooling, appliances and water heating.",
  path: "/energy-saving",
});

export default function EnergySavingPage() {
  return (
    <div className="container-page dw-enter py-12">
      <h1 className="mb-6 text-4xl font-normal text-slate-900 md:text-5xl dark:text-slate-50">Energy Saving Tips</h1>
      <section className="prose">
        <p>Reducing your electricity consumption not only saves money but also helps the environment. Below are practical, proven strategies you can implement today.</p>
        <h2>Lighting</h2>
        <ul>
          <li>Switch to LED bulbs – they use up to 80% less energy.</li>
          <li>Use natural daylight whenever possible.</li>
          <li>Install motion sensors in rarely used rooms.</li>
        </ul>
        <h2>Heating & Cooling</h2>
        <ul>
          <li>Set your thermostat to 78 °F (26 °C) in summer and 68 °F (20 °C) in winter.</li>
          <li>Maintain HVAC filters and schedule regular tune‑ups.</li>
          <li>Use ceiling fans to circulate air and reduce AC load.</li>
        </ul>
        <h2>Appliances</h2>
        <ul>
          <li>Run dishwashers and washing machines with full loads and on eco‑wash cycles.</li>
          <li>Unplug chargers and devices when not in use (or use smart power strips).</li>
          <li>Consider ENERGY STAR certified appliances for long‑term savings.</li>
        </ul>
        <h2>Water Heating</h2>
        <ul>
          <li>Lower the water heater thermostat to 120 °F (49 °C).</li>
          <li>Insulate hot water pipes.</li>
          <li>Take shorter showers and use low‑flow fixtures.</li>
        </ul>
        <p>For detailed calculations on how each change impacts your bill, try our <a href="/calculators" className="text-brand-600 underline">interactive calculators</a>.</p>
      </section>
    </div>
  );
}