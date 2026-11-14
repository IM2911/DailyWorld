// Guide metadata. Each article's HTML lives in src/lib/guide-content/<slug>.ts.
import { content as refrigerator } from "./guide-content/how-much-electricity-does-a-refrigerator-use";
import { content as airConditioner } from "./guide-content/how-much-does-it-cost-to-run-an-air-conditioner";
import { content as calculateConsumption } from "./guide-content/how-to-calculate-electricity-consumption";
import { content as washingMachine } from "./guide-content/how-much-does-a-washing-machine-cost-per-cycle";
import { content as gamingPc } from "./guide-content/how-much-does-a-gaming-pc-use";
import { content as mostElectricity } from "./guide-content/what-uses-the-most-electricity-in-a-home";
import { content as reduceBill } from "./guide-content/how-to-reduce-your-electricity-bill";
import { content as kwhExplained } from "./guide-content/kwh-explained-a-complete-guide";
import { content as electricHeater } from "./guide-content/how-much-does-it-cost-to-run-an-electric-heater";
import { content as tv } from "./guide-content/how-much-electricity-does-a-tv-use";
import { content as timeOfUse } from "./guide-content/understanding-time-of-use-electricity-rates";
import { content as lighting } from "./guide-content/energy-efficient-lighting-guide";
import { content as readMeter } from "./guide-content/how-to-read-your-electricity-meter";
import { content as phantomLoads } from "./guide-content/phantom-loads-vampire-power-explained";
import { content as solar } from "./guide-content/solar-power-basics-is-it-worth-it";
import { content as dishwasher } from "./guide-content/how-much-electricity-does-a-dishwasher-use";
import { content as waterHeating } from "./guide-content/energy-efficient-water-heating";
import { content as smartHome } from "./guide-content/smart-home-devices-for-energy-savings";
import { content as energyAudit } from "./guide-content/how-to-conduct-a-diy-home-energy-audit";
import { content as evCharging } from "./guide-content/electric-vehicles-home-charging-costs";

export interface Guide {
  slug: string;
  title: string;
  description: string;
  content: string;
  /** Minutes, from the word count at about 220 words per minute. */
  readingTime: number;
}

function readingTime(html: string): number {
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(2, Math.round(words / 220));
}

const entries: Omit<Guide, "readingTime">[] = [
  {
    slug: "how-much-electricity-does-a-refrigerator-use",
    title: "How Much Electricity Does a Refrigerator Use?",
    description:
      "Typical kWh per year for every type of fridge, how to find your own model's figure, what drives consumption up and when replacing an old fridge pays off.",
    content: refrigerator,
  },
  {
    slug: "how-much-does-it-cost-to-run-an-air-conditioner",
    title: "How Much Does It Cost to Run an Air Conditioner?",
    description:
      "Power draw and cost per hour for window, portable, mini-split and central air conditioners, with worked monthly examples and ways to cool for less.",
    content: airConditioner,
  },
  {
    slug: "how-to-calculate-electricity-consumption",
    title: "How to Calculate Electricity Consumption",
    description:
      "A step-by-step method to turn any appliance's watts and hours into kWh and cost, including appliances that cycle, variable loads and standby power.",
    content: calculateConsumption,
  },
  {
    slug: "how-much-does-a-washing-machine-cost-per-cycle",
    title: "How Much Does a Washing Machine Cost Per Cycle?",
    description:
      "Energy and cost per load at every wash temperature, why eco programs take longer, the hidden cost of the dryer and how to cut the cost of laundry.",
    content: washingMachine,
  },
  {
    slug: "how-much-does-a-gaming-pc-use",
    title: "How Much Does a Gaming PC Use?",
    description:
      "Real power draw of entry, midrange and high-end gaming PCs, laptops and consoles, with monthly cost examples and tweaks that save power without losing frames.",
    content: gamingPc,
  },
  {
    slug: "what-uses-the-most-electricity-in-a-home",
    title: "What Uses the Most Electricity in a Home?",
    description:
      "The biggest electricity users in a typical home ranked, with yearly kWh and cost for each, how to find your own top loads and where saving effort pays most.",
    content: mostElectricity,
  },
  {
    slug: "how-to-reduce-your-electricity-bill",
    title: "How to Reduce Your Electricity Bill",
    description:
      "Free habits, low-cost upgrades, cheaper tariffs and bigger investments that lower an electricity bill, with example savings for a typical household.",
    content: reduceBill,
  },
  {
    slug: "kwh-explained-a-complete-guide",
    title: "kWh Explained: A Complete Guide",
    description:
      "What a kilowatt-hour is, how it differs from a kilowatt, what one kWh can do, and how to read the kWh, rates and fixed charges on your electricity bill.",
    content: kwhExplained,
  },
  {
    slug: "how-much-does-it-cost-to-run-an-electric-heater",
    title: "How Much Does It Cost to Run an Electric Heater?",
    description:
      "Cost per hour and per month for 750 W to 3,000 W heaters, how thermostats change the real cost, the types of electric heater and when zone heating saves money.",
    content: electricHeater,
  },
  {
    slug: "how-much-electricity-does-a-tv-use",
    title: "How Much Electricity Does a TV Use?",
    description:
      "Typical TV power by screen size and panel type, yearly running cost, standby consumption and the picture settings that cut energy use.",
    content: tv,
  },
  {
    slug: "understanding-time-of-use-electricity-rates",
    title: "Understanding Time-of-Use Electricity Rates",
    description:
      "How peak and off-peak pricing works, a worked comparison with a flat tariff, which loads you can shift and how to check if TOU will save you money.",
    content: timeOfUse,
  },
  {
    slug: "energy-efficient-lighting-guide",
    title: "Energy-Efficient Lighting Guide: LEDs vs. Incandescents",
    description:
      "Lumens versus watts for every bulb type, lifespans, the yearly savings of switching to LED and how to choose colour temperature, CRI and dimmable bulbs.",
    content: lighting,
  },
  {
    slug: "how-to-read-your-electricity-meter",
    title: "How to Read Your Electricity Meter",
    description:
      "How to read digital, two-rate, dial and smart meters, turn readings into kWh, check estimated bills and use the meter to find hidden consumption.",
    content: readMeter,
  },
  {
    slug: "phantom-loads-vampire-power-explained",
    title: "Phantom Loads and Vampire Power Explained",
    description:
      "How much standby power common devices draw, what always-on loads cost over a year, how to measure yours and the easiest ways to cut it.",
    content: phantomLoads,
  },
  {
    slug: "solar-power-basics-is-it-worth-it",
    title: "Solar Power Basics: Is Home Solar Worth It?",
    description:
      "How to estimate a solar system's yearly output, what decides whether it pays, a worked payback example and a checklist before you get quotes.",
    content: solar,
  },
  {
    slug: "how-much-electricity-does-a-dishwasher-use",
    title: "How Much Electricity Does a Dishwasher Use?",
    description:
      "Energy and cost per dishwasher cycle by program, dishwasher versus hand washing, and simple ways to make every load cheaper.",
    content: dishwasher,
  },
  {
    slug: "energy-efficient-water-heating",
    title: "Energy-Efficient Water Heating: Tank vs. Tankless vs. Heat Pump",
    description:
      "Running costs of standard electric tanks, tankless heaters and heat pump water heaters compared, plus savings that work for any water heater.",
    content: waterHeating,
  },
  {
    slug: "smart-home-devices-for-energy-savings",
    title: "Smart Home Devices for Energy Savings",
    description:
      "Which smart thermostats, plugs, power strips and monitors actually save energy, which rarely do, and how to work out a device's payback.",
    content: smartHome,
  },
  {
    slug: "how-to-conduct-a-diy-home-energy-audit",
    title: "How to Conduct a DIY Home Energy Audit",
    description:
      "A seven-step home energy audit you can do yourself: bills, always-on load, air leaks, insulation, heating, appliances and a prioritized action list.",
    content: energyAudit,
  },
  {
    slug: "electric-vehicles-home-charging-costs",
    title: "Electric Vehicle Home Charging Costs Explained",
    description:
      "The formula for EV charging cost, a worked monthly example at different electricity prices, home charging levels and how to charge for less.",
    content: evCharging,
  },
];

export const guides: Guide[] = entries.map((entry) => ({
  ...entry,
  readingTime: readingTime(entry.content),
}));
