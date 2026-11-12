export interface Guide {
  slug: string;
  title: string;
  description: string;
  content: string;
  readingTime: number;
}

export const guides: Guide[] = [
  {
    slug: "how-much-electricity-does-a-refrigerator-use",
    title: "How Much Electricity Does a Refrigerator Use?",
    description: "Learn how to estimate the energy consumption and cost of a typical household refrigerator.",
    content: `
      <h2>Refrigerator Energy Consumption</h2>
      <p>Refrigerators are one of the few household appliances that run 24 hours a day, 7 days a week. Because they maintain a constant internal temperature, their compressors cycle on and off continuously throughout the day.</p>
      <h3>Typical Power Draw and kWh</h3>
      <p>Most modern household refrigerators consume between 100 and 200 watts when the compressor is actively running. However, because they do not run continuously, their average duty cycle is about 33% to 40%. This translates to roughly 1.5 to 3 kWh per day, or about 45 to 90 kWh per month.</p>
      <h3>Calculating Your Fridge's Cost</h3>
      <p>At an average electricity rate of $0.15 per kWh, a standard refrigerator costs between $6.75 and $13.50 per month to operate. Older models, particularly those over 15 years old, can consume twice as much electricity due to worn-out seals and less efficient compressors.</p>
      <h3>Tips to Lower Refrigerator Energy Use</h3>
      <ul>
        <li>Set your refrigerator to 37°F–40°F and your freezer to 0°F–5°F.</li>
        <li>Ensure door gaskets form a tight seal without gaps.</li>
        <li>Clean refrigerator condenser coils at least once a year.</li>
        <li>Avoid putting hot food directly into the fridge.</li>
      </ul>
    `,
    readingTime: 5,
  },
  {
    slug: "how-much-does-it-cost-to-run-an-air-conditioner",
    title: "How Much Does It Cost to Run an Air Conditioner?",
    description: "Estimate the electricity cost of cooling your home with a window unit or central AC system.",
    content: `
      <h2>Air Conditioner Energy Costs</h2>
      <p>Air conditioning is often the single largest driver of high electricity bills during summer months. Understanding how much power your unit consumes helps you budget and control cooling costs.</p>
      <h3>Window Units vs. Central Air</h3>
      <p>Window AC units typically consume between 500 and 1,500 watts depending on their cooling capacity (BTUs). Central air conditioning systems draw between 3,000 and 5,000 watts when running.</p>
      <h3>Calculating Monthly AC Expenses</h3>
      <p>If you run a 1,200W window AC for 8 hours a day at $0.15/kWh, you consume 9.6 kWh daily, costing about $1.44 per day or $43.20 per month. Central systems running several hours daily can easily exceed $150 to $250 per month in peak summer.</p>
      <h3>Ways to Reduce Air Conditioning Bills</h3>
      <ul>
        <li>Set thermostats to 78°F (26°C) while home, higher when away.</li>
        <li>Use ceiling fans to create a wind-chill effect that feels 4°F cooler.</li>
        <li>Clean or replace air filters monthly.</li>
        <li>Block direct sunlight with curtains and blinds during peak hours.</li>
      </ul>
    `,
    readingTime: 5,
  },
  {
    slug: "how-to-calculate-electricity-consumption",
    title: "How to Calculate Electricity Consumption",
    description: "A complete step-by-step guide to understanding kilowatt-hours (kWh) and calculating energy use.",
    content: `
      <h2>Understanding Kilowatt-Hours (kWh)</h2>
      <p>Your electricity bill is measured in kilowatt-hours (kWh). One kWh represents one thousand watts of electricity used continuously for one hour.</p>
      <h3>The Energy Formula</h3>
      <p>To calculate how much energy any appliance uses, use the following formula:</p>
      <p><strong>Energy (kWh) = (Power in Watts ÷ 1,000) × Hours Used</strong></p>
      <p>To find the total cost, multiply the resulting kWh by your local utility rate per kWh.</p>
      <h3>Practical Example</h3>
      <p>Suppose you use a 1,500W space heater for 3 hours. Energy used = (1500 ÷ 1000) × 3 = 4.5 kWh. If your electricity rate is $0.15/kWh, the total cost is 4.5 × 0.15 = $0.68.</p>
    `,
    readingTime: 5,
  },
  {
    slug: "how-much-does-a-washing-machine-cost-per-cycle",
    title: "How Much Does a Washing Machine Cost Per Cycle?",
    description: "Calculate the exact electricity cost of washing clothes, including hot water heating effects.",
    content: `
      <h2>Washing Machine Energy Breakdown</h2>
      <p>Washing machines consume electricity in two main ways: powering the motor and drum rotation (300–800W) and heating water (if connected to hot water or using internal heaters, which can spike power to 2,000W+).</p>
      <h3>Cost Per Load</h3>
      <p>A typical wash cycle lasting 1 hour with a combined motor and water-heating draw of 1,000W consumes about 1 kWh. At $0.15/kWh, each load costs roughly $0.15 in electricity.</p>
      <h3>Water Temperature Impact</h3>
      <p>Roughly 75% to 90% of the energy used by a washing machine goes toward heating the water. Washing with cold water drastically reduces cycle energy costs.</p>
    `,
    readingTime: 5,
  },
  {
    slug: "how-much-does-a-gaming-pc-use",
    title: "How Much Does a Gaming PC Use?",
    description: "Estimate the electricity consumption of a high-performance gaming PC and monitor setup.",
    content: `
      <h2>Gaming PC Power Consumption</h2>
      <p>Modern gaming PCs equipped with powerful graphics cards (GPUs) and processors (CPUs) can draw substantial power under heavy gaming loads.</p>
      <h3>Power Draw Ranges</h3>
      <p>While idling or browsing the web, a gaming PC uses about 60–100W. Under heavy gaming loads, total system draw (including monitors) often reaches 350W to 600W.</p>
      <h3>Monthly Cost Estimation</h3>
      <p>Playing for 4 hours daily at an average load of 450W consumes 1.8 kWh per day, or 54 kWh per month. At $0.15/kWh, that amounts to $8.10 per month in electricity.</p>
    `,
    readingTime: 5,
  },
  {
    slug: "what-uses-the-most-electricity-in-a-home",
    title: "What Uses the Most Electricity in a Home?",
    description: "Discover the top energy-consuming household appliances and how to manage them.",
    content: `
      <h2>Major Home Energy Hogs</h2>
      <p>Not all appliances impact your utility bill equally. Understanding where energy goes allows you to target the most impactful efficiency measures.</p>
      <h3>1. Heating and Cooling (HVAC)</h3>
      <p>Space heating and air conditioning account for nearly 50% of the average home's energy consumption.</p>
      <h3>2. Water Heaters</h3>
      <p>Water heating is the second largest energy expense, consuming 18% of household energy.</p>
      <h3>3. Lighting and Refrigeration</h3>
      <p>Lighting, refrigerators, clothes washers, and dryers make up the remaining major categories.</p>
    `,
    readingTime: 5,
  },
  {
    slug: "how-to-reduce-your-electricity-bill",
    title: "How to Reduce Your Electricity Bill",
    description: "Practical, proven strategies to lower your monthly electricity expenses without sacrificing comfort.",
    content: `
      <h2>Actionable Energy Reduction Strategies</h2>
      <p>Lowering your electricity bill doesn't require drastic lifestyle changes. By targeting phantom loads, optimizing thermostat settings, and upgrading key habits, you can see noticeable savings.</p>
      <h3>Eliminate Vampire Loads</h3>
      <p>Many electronics consume power even when turned off (standby mode). Using smart power strips for entertainment centers and home offices prevents this idle drain.</p>
      <h3>Optimize Appliance Schedules</h3>
      <p>Run energy-intensive appliances like dishwashers and clothes dryers during off-peak hours if your utility provider offers time-of-use pricing.</p>
    `,
    readingTime: 5,
  },
  {
    slug: "kwh-explained-a-complete-guide",
    title: "kWh Explained: A Complete Guide",
    description: "Everything you need to know about kilowatt-hours, wattage, and electrical measurement.",
    content: `
      <h2>Demystifying the Kilowatt-Hour</h2>
      <p>To understand your electric bill, you must understand the kilowatt-hour (kWh). A watt is a measure of power (rate of energy use), while a kilowatt-hour is a measure of energy over time.</p>
      <h3>Watts vs. Kilowatts</h3>
      <p>One kilowatt equals 1,000 watts. If you run a 1,000W appliance for 1 hour, you have used 1 kWh of electricity.</p>
    `,
    readingTime: 5,
  },
  {
    slug: "how-much-does-it-cost-to-run-an-electric-heater",
    title: "How Much Does It Cost to Run an Electric Heater?",
    description: "Calculate space heater running costs and compare them with central heating systems.",
    content: `
      <h2>Electric Space Heater Costs</h2>
      <p>Portable electric space heaters almost universally draw 1,500 watts on their high setting. Running a 1,500W heater for 6 hours daily consumes 9 kWh per day.</p>
      <h3>Monthly Expense</h3>
      <p>At $0.15/kWh, running a space heater 6 hours a day costs $1.35 daily, or $40.50 per month. Relying on multiple space heaters across rooms can quickly inflate winter utility bills.</p>
    `,
    readingTime: 5,
  },
  {
    slug: "how-much-electricity-does-a-tv-use",
    title: "How Much Electricity Does a TV Use?",
    description: "Compare LED, OLED, and LCD television power consumption and running costs.",
    content: `
      <h2>Television Energy Consumption</h2>
      <p>Modern LED and OLED televisions are remarkably energy efficient compared to older plasma or CRT models.</p>
      <h3>Typical Power Draw</h3>
      <p>A standard 55-inch LED TV draws between 60 and 100 watts. Larger OLED screens or TVs with high brightness HDR enabled may draw 120 to 200 watts.</p>
      <h3>Cost of Viewing</h3>
      <p>Watching an 80W television for 5 hours a day consumes 0.4 kWh daily ($0.06/day or $1.80/month at $0.15/kWh).</p>
    `,
    readingTime: 5,
  },
  {
    slug: "understanding-time-of-use-electricity-rates",
    title: "Understanding Time-of-Use Electricity Rates",
    description: "How TOU pricing works and how shifting your electricity usage can save you money.",
    content: `
      <h2>What Are Time-of-Use Rates?</h2>
      <p>Many utility providers use Time-of-Use (TOU) pricing, charging different rates for electricity depending on the time of day.</p>
      <h3>Peak vs. Off-Peak Hours</h3>
      <p>Peak hours occur during late afternoon and evening when demand is highest. Off-peak hours occur overnight and on weekends when electricity is cheaper and cleaner to generate.</p>
    `,
    readingTime: 5,
  },
  {
    slug: "energy-efficient-lighting-guide",
    title: "Energy-Efficient Lighting Guide: LEDs vs. Incandescents",
    description: "Compare bulb technologies and calculate potential savings from switching to LEDs.",
    content: `
      <h2>The Evolution of Home Lighting</h2>
      <p>Lighting accounts for a smaller share of household energy today than in the past, largely due to the widespread adoption of LED technology.</p>
      <h3>LED vs. Incandescent</h3>
      <p>A 10W LED bulb provides the same brightness (lumens) as an old 60W incandescent bulb, using 83% less electricity and lasting 25 times longer.</p>
    `,
    readingTime: 5,
  },
  {
    slug: "how-to-read-your-electricity-meter",
    title: "How to Read Your Electricity Meter",
    description: "A practical guide to checking analog and digital utility meters to verify your consumption.",
    content: `
      <h2>Reading Your Electric Meter</h2>
      <p>Checking your own electric meter allows you to verify utility bill accuracy and monitor the immediate impact of turning appliances on or off.</p>
      <h3>Digital Smart Meters</h3>
      <p>Most modern homes feature digital smart meters with LCD screens cycling through total kWh consumed, current demand in kW, and time stamps.</p>
    `,
    readingTime: 5,
  },
  {
    slug: "phantom-loads-vampire-power-explained",
    title: "Phantom Loads and Vampire Power Explained",
    description: "Identify which idle electronics consume electricity even when turned off.",
    content: `
      <h2>What is Vampire Power?</h2>
      <p>Vampire power (or standby power) refers to electricity consumed by electronic devices while they are switched off or in standby mode.</p>
      <h3>Common Culprits</h3>
      <p>Cable boxes, gaming consoles in instant-on mode, smart speakers, and phone chargers left plugged in continuously contribute to phantom loads.</p>
    `,
    readingTime: 5,
  },
  {
    slug: "solar-power-basics-is-it-worth-it",
    title: "Solar Power Basics: Is Home Solar Worth It?",
    description: "An objective introduction to residential solar panels, savings, and payback periods.",
    content: `
      <h2>Residential Solar Energy Basics</h2>
      <p>Installing rooftop solar photovoltaic (PV) panels allows homeowners to generate their own electricity and offset utility bills.</p>
      <h3>Key Considerations</h3>
      <p>System cost, local insolation (sunlight), net metering policies, and financing options determine your return on investment (ROI).</p>
    `,
    readingTime: 5,
  },
  {
    slug: "how-much-electricity-does-a-dishwasher-use",
    title: "How Much Electricity Does a Dishwasher Use?",
    description: "Estimate dishwasher energy consumption per cycle and compare hand washing vs. machine washing.",
    content: `
      <h2>Dishwasher Energy and Water Use</h2>
      <p>Dishwashers use internal heating elements to heat water and dry dishes, resulting in a power draw of 1,200 to 2,400 watts during active cycles.</p>
      <h3>Running Cost</h3>
      <p>A typical cycle consuming 1.5 kWh costs about $0.23 at $0.15/kWh. Running full loads makes dishwashers more water- and energy-efficient than hand washing.</p>
    `,
    readingTime: 5,
  },
  {
    slug: "energy-efficient-water-heating",
    title: "Energy-Efficient Water Heating: Tank vs. Tankless vs. Heat Pump",
    description: "Compare water heater technologies to find the most efficient option for your home.",
    content: `
      <h2>Water Heater Technologies Compared</h2>
      <p>Water heating represents a major household energy expense. Choosing the right technology can cut water heating bills in half.</p>
      <h3>Heat Pump Water Heaters</h3>
      <p>Heat pump (hybrid) water heaters pull warmth from surrounding air rather than generating heat directly, using up to 70% less electricity than standard tank models.</p>
    `,
    readingTime: 5,
  },
  {
    slug: "smart-home-devices-for-energy-savings",
    title: "Smart Home Devices for Energy Savings",
    description: "How smart thermostats, plugs, and sensors can automate your home energy efficiency.",
    content: `
      <h2>Automating Energy Efficiency</h2>
      <p>Smart home technology makes it easier than ever to eliminate waste without manual monitoring.</p>
      <h3>Smart Thermostats</h3>
      <p>Devices like Nest or Ecobee learn your schedule and automatically adjust heating and cooling when you are away or sleeping, saving 10% to 15% on HVAC bills.</p>
    `,
    readingTime: 5,
  },
  {
    slug: "how-to-conduct-a-diy-home-energy-audit",
    title: "How to Conduct a DIY Home Energy Audit",
    description: "Inspect your home for air leaks, insulation gaps, and inefficient appliances.",
    content: `
      <h2>Conducting a DIY Energy Audit</h2>
      <p>You don't need a professional to find major sources of energy waste in your home. A weekend walkthrough can uncover significant savings.</p>
      <h3>Key Inspection Areas</h3>
      <p>Check windows and doors for drafts, inspect attic insulation levels, and check appliance age and efficiency ratings.</p>
    `,
    readingTime: 5,
  },
  {
    slug: "electric-vehicles-home-charging-costs",
    title: "Electric Vehicle Home Charging Costs Explained",
    description: "Calculate how much it costs to charge an electric car at home compared to gasoline.",
    content: `
      <h2>EV Home Charging Economics</h2>
      <p>Charging an electric vehicle (EV) at home is convenient and significantly cheaper than purchasing gasoline.</p>
      <h3>Calculating Charging Cost</h3>
      <p>A standard EV battery holding 60 kWh provides roughly 200–250 miles of range. Charging from empty to full at $0.15/kWh costs 60 × $0.15 = $9.00.</p>
    `,
    readingTime: 5,
  },
];
