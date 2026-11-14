import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Energy Saving Tips",
  description:
    "Practical ways to cut household electricity use across heating and cooling, water heating, appliances, electronics and lighting, ordered by impact.",
  path: "/energy-saving",
});

export default function EnergySavingPage() {
  return (
    <div className="container-page dw-enter py-12">
      <h1 className="mb-6 text-4xl font-normal text-slate-900 md:text-5xl dark:text-slate-50">Energy Saving Tips</h1>
      <section className="article-prose max-w-3xl">
        <p>
          The quickest way to a lower bill is to start with the loads that use
          the most energy. The tips below are grouped by area and ordered
          roughly by how much they save in a typical home, so the first items
          in each list are usually worth doing first.
        </p>

        <h2>Heating and cooling</h2>
        <p>
          In most homes this is the largest share of energy use, so small
          changes here save more than anything else.
        </p>
        <ul>
          <li>
            Set the thermostat to around 68°F (20°C) in winter and 78°F (26°C)
            in summer when you are home, and further back at night or when you
            are out. A programmable or smart thermostat does this automatically.
          </li>
          <li>Seal drafts around windows, doors and loft hatches with weatherstripping and draft excluders.</li>
          <li>Use ceiling or pedestal fans so you can raise the cooling setpoint without losing comfort.</li>
          <li>Close curtains on winter nights and on sunny summer afternoons.</li>
          <li>Clean or replace HVAC filters regularly and have heat pumps and boilers serviced.</li>
          <li>
            Heat or cool only the rooms you use. A portable heater in one room
            can be cheaper than heating the whole home, but a poor substitute
            for central heating in every room.
          </li>
          <li>When replacing a system, consider a heat pump, which delivers two to four units of heat per unit of electricity.</li>
        </ul>

        <h2>Water heating</h2>
        <ul>
          <li>Set the water heater to a safe but not excessive temperature, following local health guidance.</li>
          <li>Fit low-flow showerheads and keep showers short.</li>
          <li>Wash clothes at 20–30°C for everyday loads.</li>
          <li>Insulate hot water pipes and, if it is warm to the touch, the tank.</li>
          <li>Fix dripping hot taps promptly.</li>
          <li>On a time-of-use tariff, heat an electric tank off-peak with a timer.</li>
        </ul>

        <h2>Appliances</h2>
        <ul>
          <li>Retire an old second fridge or freezer; it can use more than the main one.</li>
          <li>Air-dry laundry when you can; a tumble dryer often costs more than the wash.</li>
          <li>Run dishwashers and washing machines full and on eco programs.</li>
          <li>Keep the fridge at 37–40°F (3–4°C), the freezer at 0°F (−18°C), and vacuum the condenser coils yearly.</li>
          <li>Use a microwave, air fryer or kettle instead of the oven or stove for small portions.</li>
          <li>Compare energy labels when buying; the cheapest appliance is not always the cheapest to own.</li>
        </ul>

        <h2>Electronics and standby</h2>
        <ul>
          <li>Measure your always-on load overnight and track down anything that never switches off.</li>
          <li>Disable quick start and instant-on modes on TVs and game consoles.</li>
          <li>Use smart power strips for entertainment and computer setups.</li>
          <li>Set computers to sleep after 15–30 minutes and lower screen brightness.</li>
        </ul>

        <h2>Lighting</h2>
        <ul>
          <li>Replace incandescent and halogen bulbs with LEDs, starting with the lights you use most. LEDs use at least 75% less energy.</li>
          <li>Use daylight where you can and switch lights off when leaving a room.</li>
          <li>Add motion sensors or timers in hallways, garages and outdoor areas.</li>
        </ul>

        <h2>Your tariff</h2>
        <ul>
          <li>Check your unit rate and fixed charges, and compare suppliers or plans if you can switch.</li>
          <li>Consider a time-of-use tariff if you can move laundry, dishwashing, water heating or EV charging to off-peak hours.</li>
          <li>Submit actual meter readings so you are not billed on high estimates.</li>
        </ul>

        <h2>Check the numbers before you spend</h2>
        <p>
          Before buying a new appliance or gadget to save energy, work out how
          much it will actually save. The{" "}
          <a href="/calculators/energy-savings" className="text-brand-600 underline">
            energy savings calculator
          </a>{" "}
          shows the yearly saving and payback period, and our guide to{" "}
          <a href="/guides/how-to-reduce-your-electricity-bill" className="text-brand-600 underline">
            reducing your electricity bill
          </a>{" "}
          ranks the changes by cost and effort. For a complete picture of your
          home, follow the{" "}
          <a href="/guides/how-to-conduct-a-diy-home-energy-audit" className="text-brand-600 underline">
            DIY energy audit
          </a>
          .
        </p>
      </section>
    </div>
  );
}
