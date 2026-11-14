/**
 * Explanatory text shown under each calculator: how to fill it in, typical
 * values and how to lower the cost. Keyed by the calculator's route segment.
 * HTML, rendered inside .article-prose by CalculatorLayout.
 */
export const calculatorNotes: Record<string, string> = {
  "electricity-cost": `
<h2>How to use this calculator</h2>
<p>Enter the appliance's power in watts, how many hours a day it is on and your price per kWh. The calculator converts watts to kilowatts, multiplies by the hours to get kWh per day, and multiplies by your price to give the cost per hour, week, month and year.</p>
<h3>Where to find the numbers</h3>
<ul>
  <li><strong>Watts:</strong> on the rating plate or sticker, usually on the back or underside, or in the manual. If only amps are listed, multiply amps by your mains voltage (about 120 V in North America, 230 V in most of Europe).</li>
  <li><strong>Hours:</strong> the time the appliance actually draws power, not the time it is plugged in.</li>
  <li><strong>Price per kWh:</strong> the unit rate on your latest bill. Leave out fixed daily charges; they do not change with use.</li>
</ul>
<h3>Typical power of common appliances</h3>
<table>
  <thead><tr><th>Appliance</th><th>Typical power</th></tr></thead>
  <tbody>
    <tr><td>LED bulb</td><td>5–15 W</td></tr>
    <tr><td>Laptop</td><td>30–90 W</td></tr>
    <tr><td>Desktop PC with monitor</td><td>100–500 W</td></tr>
    <tr><td>Microwave</td><td>800–1,200 W</td></tr>
    <tr><td>Hair dryer</td><td>1,200–2,000 W</td></tr>
    <tr><td>Electric kettle</td><td>1,800–3,000 W</td></tr>
    <tr><td>Space heater</td><td>750–2,000 W</td></tr>
  </tbody>
</table>
<p>Appliances with a thermostat, such as heaters and fridges, do not draw full power all the time. Use the hours they actually run, or a specialised calculator for them. For the full method, read <a href="/guides/how-to-calculate-electricity-consumption">how to calculate electricity consumption</a>.</p>
`,
  "appliance-energy": `
<h2>How to use this calculator</h2>
<p>This calculator shows how much <strong>energy</strong> an appliance uses, in kWh per hour, day and month, along with its yearly cost. Enter its power in watts and the hours it is used each day.</p>
<p>Knowing the kWh, not only the cost, makes it easy to compare an appliance with your bill: if your bill shows 600 kWh a month and one appliance uses 120 kWh, it is a fifth of your consumption.</p>
<h3>Tips for accurate results</h3>
<ul>
  <li><strong>Measure if you can.</strong> A plug-in energy meter shows real consumption, including standby and variable power, which beats any estimate.</li>
  <li><strong>Use average power for cycling appliances.</strong> A fridge rated at 150 W might average 60 W because the compressor runs only part of the time.</li>
  <li><strong>Separate modes.</strong> If an appliance has a high-power and a low-power mode (a PC gaming versus browsing), calculate each mode with its own hours and add them.</li>
  <li><strong>Include standby.</strong> A device that draws 5 W for the 20 hours it is "off" uses 0.1 kWh a day, or 36.5 kWh a year.</li>
</ul>
<h3>From kWh to a yearly picture</h3>
<table>
  <thead><tr><th>Constant load</th><th>kWh per year</th></tr></thead>
  <tbody>
    <tr><td>1 W running all year</td><td>8.76</td></tr>
    <tr><td>10 W running all year</td><td>87.6</td></tr>
    <tr><td>100 W running all year</td><td>876</td></tr>
  </tbody>
</table>
<p>See <a href="/guides/what-uses-the-most-electricity-in-a-home">what uses the most electricity in a home</a> to compare your results with typical figures.</p>
`,
  "kwh-to-cost": `
<h2>How to use this calculator</h2>
<p>Enter an amount of energy in kWh and your price per kWh to see what it costs. Use it to price the consumption shown on your bill or smart meter, the kWh per year on an energy label, or the kWh you calculated for an appliance.</p>
<h3>Where kWh figures come from</h3>
<ul>
  <li><strong>Your bill:</strong> the consumption for the billing period, the difference between two meter readings.</li>
  <li><strong>Energy labels:</strong> the US EnergyGuide label lists kWh per year; the EU and UK label lists kWh per year or per 100 cycles, depending on the appliance.</li>
  <li><strong>Smart meters and apps:</strong> kWh per hour, day or month.</li>
  <li><strong>Electric vehicles:</strong> the kWh added during a charging session.</li>
</ul>
<h3>Choosing the right price</h3>
<p>Use the <strong>unit rate</strong> from your bill, the price per kWh before fixed charges. If your tariff has tiers, use the rate for the tier you usually reach; on a time-of-use tariff, use the rate for the hours when the energy is used. To include fixed charges and see your effective rate, use the <a href="/calculators/monthly-bill">monthly bill calculator</a>.</p>
<h3>Quick reference at $0.15 per kWh</h3>
<table>
  <thead><tr><th>Energy</th><th>Cost</th></tr></thead>
  <tbody>
    <tr><td>1 kWh</td><td>$0.15</td></tr>
    <tr><td>100 kWh</td><td>$15</td></tr>
    <tr><td>500 kWh</td><td>$75</td></tr>
    <tr><td>1,000 kWh</td><td>$150</td></tr>
  </tbody>
</table>
<p>New to kilowatt-hours? Read <a href="/guides/kwh-explained-a-complete-guide">kWh explained</a>.</p>
`,
  "monthly-bill": `
<h2>How to use this calculator</h2>
<p>Enter the kWh you use in a month, your price per kWh and any fixed monthly charges such as a standing charge, service fee or fixed taxes. The calculator splits your bill into the energy charge and the fixed part, and shows your <strong>effective rate</strong>: the total bill divided by the kWh used.</p>
<h3>Why the effective rate is higher than the unit rate</h3>
<p>Fixed charges are paid even if you use nothing. In months with low consumption they make each kWh look more expensive. For example, 300 kWh at $0.15 plus $15 of fixed charges is $60, an effective rate of $0.20 per kWh. At 900 kWh the same tariff gives $150, an effective rate of about $0.167.</p>
<p>When you estimate savings, use the unit rate: reducing consumption lowers the energy charge, not the fixed charges.</p>
<h3>Building your monthly kWh from appliances</h3>
<ol>
  <li>List your main appliances and estimate their monthly kWh with the <a href="/calculators/appliance-energy">appliance energy calculator</a>.</li>
  <li>Add heating, cooling and water heating, which are usually the largest items.</li>
  <li>Compare the total with your actual bill. A large gap usually points to heating, an old second fridge or always-on electronics.</li>
</ol>
<h3>Typical monthly consumption</h3>
<p>Usage varies enormously: a small apartment heated with gas may use 150–250 kWh a month, while a large home with electric heating, air conditioning or an electric car can use 1,500 kWh or more. Your own bills are the best benchmark.</p>
<p>For ways to bring the total down, see <a href="/guides/how-to-reduce-your-electricity-bill">how to reduce your electricity bill</a>.</p>
`,
  "air-conditioner": `
<h2>How to use this calculator</h2>
<p>Enter the air conditioner's power in watts, the hours its compressor runs each day, the days per month you use it and your price per kWh. The result shows the daily, hourly and monthly cost and an estimate for a three-month summer season.</p>
<h3>Converting BTU to watts</h3>
<p>Many units list cooling capacity in BTU per hour rather than power. Divide the BTU rating by the efficiency rating (EER) to get watts: a 10,000 BTU unit with an EER of 10 draws about 1,000 W. If you know neither, these are typical figures:</p>
<table>
  <thead><tr><th>Unit</th><th>Typical power</th></tr></thead>
  <tbody>
    <tr><td>5,000–6,000 BTU window unit</td><td>450–600 W</td></tr>
    <tr><td>8,000–10,000 BTU window unit</td><td>700–1,000 W</td></tr>
    <tr><td>12,000–15,000 BTU window or portable</td><td>1,000–1,500 W</td></tr>
    <tr><td>Mini-split, one room</td><td>600–1,100 W</td></tr>
    <tr><td>Central air, 3 tons</td><td>2,500–3,500 W</td></tr>
  </tbody>
</table>
<h3>Choosing the hours</h3>
<p>Once the room is cool, the compressor cycles on and off. On a warm day it may run 40% of the time; in a heat wave, nearly always. If the AC is on for 10 hours but the compressor runs about half the time, enter 5 hours.</p>
<h3>Ways to cut the cost</h3>
<ul>
  <li>Raise the thermostat to around 78°F (26°C) and use a fan alongside the AC.</li>
  <li>Close blinds on sunny windows and cool only the rooms you use.</li>
  <li>Clean the filter regularly; a clogged filter makes the unit work harder.</li>
</ul>
<p>More in our guide to <a href="/guides/how-much-does-it-cost-to-run-an-air-conditioner">air conditioner running costs</a>.</p>
`,
  "heating-cost": `
<h2>How to use this calculator</h2>
<p>Enter the heater's power in watts, the hours per day it runs and your price per kWh. You will see the daily and monthly cost and an estimate for a four-month winter.</p>
<h3>Full power or thermostat?</h3>
<p>The power on the label is the maximum. A heater with a thermostat switches off once the room reaches the set temperature, so in a reasonably insulated room the average is often half of the maximum or less. If the heater is on for 8 hours but its thermostat keeps it running about 60% of the time, enter 4.8 hours for a realistic estimate.</p>
<h3>Typical heater power</h3>
<table>
  <thead><tr><th>Heater</th><th>Typical power</th></tr></thead>
  <tbody>
    <tr><td>Small fan heater, low setting</td><td>600–1,000 W</td></tr>
    <tr><td>Standard portable heater (North America)</td><td>1,500 W</td></tr>
    <tr><td>Convector or fan heater (Europe)</td><td>2,000–3,000 W</td></tr>
    <tr><td>Oil-filled radiator</td><td>700–2,000 W</td></tr>
    <tr><td>Infrared panel</td><td>300–1,000 W</td></tr>
  </tbody>
</table>
<p>All electric resistance heaters convert almost all their electricity into heat, so a 1,500 W heater produces the same heat whatever its type. A heat pump is different: it delivers two to four times as much heat per kWh, so it costs far less for the same warmth.</p>
<h3>Ways to cut the cost</h3>
<ul>
  <li>Heat only the room you are using and keep its door closed.</li>
  <li>Use the thermostat and a timer instead of running at full power.</li>
  <li>Seal drafts around windows and doors before buying a bigger heater.</li>
</ul>
<p>Read more in <a href="/guides/how-much-does-it-cost-to-run-an-electric-heater">how much it costs to run an electric heater</a>.</p>
`,
  "washing-machine": `
<h2>How to use this calculator</h2>
<p>Enter the machine's power in watts, the number of cycles per day and the length of each cycle in hours, plus your price per kWh. The result shows the cost per day, week, month and year.</p>
<h3>Which power figure to use</h3>
<p>A washing machine's power changes during a cycle: high while the heater warms the water, low while the drum turns. Using the maximum rating with the full cycle time will overestimate the cost. Better options:</p>
<ul>
  <li>Use the <strong>average power</strong>: divide the energy per cycle on the energy label by the cycle length. A 0.7 kWh cycle lasting 2 hours averages 350 W.</li>
  <li>Use typical energy per cycle: about 0.1–0.3 kWh for cold washes, 0.5–0.9 kWh at 40°C and 1.0–1.5 kWh at 60°C.</li>
  <li>Measure a cycle with a plug-in energy meter.</li>
</ul>
<h3>Cycles per day</h3>
<p>If you run 5 loads a week, enter about 0.7 cycles per day (5 ÷ 7).</p>
<h3>Ways to cut the cost</h3>
<ul>
  <li>Wash at 20–30°C for everyday loads; heating the water is most of the energy.</li>
  <li>Run full loads and use the eco program, which is longer but uses less energy.</li>
  <li>Spin at high speed before tumble drying, or air-dry; the dryer often costs more than the wash.</li>
</ul>
<p>See the full breakdown in <a href="/guides/how-much-does-a-washing-machine-cost-per-cycle">how much a washing machine costs per cycle</a>.</p>
`,
  refrigerator: `
<h2>How to use this calculator</h2>
<p>Enter the refrigerator's running power in watts, the compressor duty cycle (the share of the day the compressor runs) and your price per kWh. The calculator works out the average runtime per day, the energy per day and month, and the yearly cost.</p>
<h3>Choosing the duty cycle</h3>
<ul>
  <li><strong>30–40%:</strong> a modern fridge in a kitchen at normal room temperature.</li>
  <li><strong>40–50%:</strong> an older fridge, a warm kitchen or frequent door openings.</li>
  <li><strong>50% or more:</strong> a fridge in a hot garage or with failing seals.</li>
</ul>
<h3>Check against the energy label</h3>
<p>If your fridge has an energy label, its kWh per year is the most reliable figure. Divide it by 365 to get kWh per day and compare with the calculator's result. If they differ a lot, adjust the duty cycle.</p>
<table>
  <thead><tr><th>Type</th><th>Typical kWh per year</th></tr></thead>
  <tbody>
    <tr><td>Compact / mini fridge</td><td>200–300</td></tr>
    <tr><td>Top-freezer, recent model</td><td>300–450</td></tr>
    <tr><td>French door or side-by-side</td><td>450–800</td></tr>
    <tr><td>15–20 years old</td><td>900–1,400</td></tr>
  </tbody>
</table>
<h3>Ways to cut the cost</h3>
<ul>
  <li>Set the fridge to about 37–40°F (3–4°C) and the freezer to 0°F (−18°C).</li>
  <li>Vacuum the condenser coils and check the door seals.</li>
  <li>Leave space around the fridge for air to flow, away from the oven and direct sun.</li>
  <li>Retire an old second fridge: it can cost more than the main one.</li>
</ul>
<p>More in <a href="/guides/how-much-electricity-does-a-refrigerator-use">how much electricity a refrigerator uses</a>.</p>
`,
  dishwasher: `
<h2>How to use this calculator</h2>
<p>Enter the dishwasher's power in watts, the number of cycles per day and the length of a cycle in hours, plus your price per kWh. The result shows the cost per day, per month and per year.</p>
<h3>Use average power, not the maximum</h3>
<p>The heating element draws 1,200–2,400 W, but only for part of the cycle. Multiplying the maximum by the full cycle length overestimates the cost. Instead, take the energy per cycle and divide by the cycle length: a 1.0 kWh cycle that lasts 2.5 hours averages 400 W. Typical energy per cycle:</p>
<table>
  <thead><tr><th>Program</th><th>Typical energy</th></tr></thead>
  <tbody>
    <tr><td>Eco</td><td>0.6–0.9 kWh</td></tr>
    <tr><td>Normal / auto</td><td>0.9–1.3 kWh</td></tr>
    <tr><td>Intensive</td><td>1.3–1.8 kWh</td></tr>
  </tbody>
</table>
<p>EU energy labels list kWh per 100 eco cycles; divide by 100 for one cycle.</p>
<h3>Cycles per day</h3>
<p>Running the dishwasher 5 times a week is about 0.7 cycles per day.</p>
<h3>Ways to cut the cost</h3>
<ul>
  <li>Only run it full, and choose eco for everyday loads.</li>
  <li>Scrape plates instead of rinsing them under the hot tap.</li>
  <li>Turn off heated drying and let dishes air-dry.</li>
  <li>Use delay start to run overnight on a time-of-use tariff.</li>
</ul>
<p>Read more in <a href="/guides/how-much-electricity-does-a-dishwasher-use">how much electricity a dishwasher uses</a>.</p>
`,
  "electric-oven": `
<h2>How to use this calculator</h2>
<p>Enter the oven's power in watts, the hours it is used per day and your price per kWh to see the weekly, monthly and yearly cost.</p>
<h3>Ovens cycle too</h3>
<p>An electric oven typically has a rated power of 2,000–5,000 W. It runs at full power while preheating, then its thermostat switches the elements on and off to hold the temperature. Over a typical hour of baking, the average is often around half of the rated power. To estimate one hour of baking at 180°C (350°F) in a 3,000 W oven, enter about 0.5–0.6 hours at 3,000 W, or 1 hour at about 1,500 W. A typical oven uses around 1–1.5 kWh per hour of baking.</p>
<h3>Oven or smaller appliance?</h3>
<table>
  <thead><tr><th>Appliance</th><th>Typical energy for a typical dish</th></tr></thead>
  <tbody>
    <tr><td>Electric oven, 1 hour</td><td>1.0–1.5 kWh</td></tr>
    <tr><td>Air fryer, 20 minutes</td><td>0.3–0.5 kWh</td></tr>
    <tr><td>Microwave, 10 minutes</td><td>0.15–0.2 kWh</td></tr>
    <tr><td>Slow cooker, 6 hours on low</td><td>0.8–1.3 kWh</td></tr>
  </tbody>
</table>
<p>For small portions, an air fryer or microwave is much cheaper because it heats a far smaller space.</p>
<h3>Ways to cut the cost</h3>
<ul>
  <li>Skip preheating for dishes that cook a long time, and avoid opening the door, which lets heat out.</li>
  <li>Cook several dishes at once, or batch-cook and reheat.</li>
  <li>Use the fan (convection) setting, which cooks at a lower temperature.</li>
  <li>Switch off a few minutes early; the oven stays hot.</li>
</ul>
<p>More ideas in <a href="/guides/how-to-reduce-your-electricity-bill">how to reduce your electricity bill</a>.</p>
`,
  television: `
<h2>How to use this calculator</h2>
<p>Enter your TV's power in watts, the hours you watch each day and your price per kWh. The result shows the cost per hour, per day and per year.</p>
<h3>Finding your TV's power</h3>
<p>Check the energy label, the sticker on the back or the manual. EU and UK energy labels list kWh per 1,000 hours of viewing: 80 kWh per 1,000 hours equals 80 W. If you cannot find a figure, use these typical values:</p>
<table>
  <thead><tr><th>Television</th><th>Typical power</th></tr></thead>
  <tbody>
    <tr><td>32-inch LED</td><td>20–40 W</td></tr>
    <tr><td>50–55-inch LED</td><td>60–120 W</td></tr>
    <tr><td>65-inch LED</td><td>80–150 W</td></tr>
    <tr><td>65-inch OLED</td><td>100–200 W</td></tr>
    <tr><td>Older 50-inch plasma</td><td>150–400 W</td></tr>
  </tbody>
</table>
<p>Bright "vivid" picture modes and HDR content increase power; eco and standard modes reduce it.</p>
<h3>Remember the rest of the setup</h3>
<p>Game consoles, soundbars and set-top boxes can use more than the TV itself. Add them separately, including their standby power, with the <a href="/calculators/electricity-cost">electricity cost calculator</a>.</p>
<h3>Ways to cut the cost</h3>
<ul>
  <li>Use a standard or eco picture mode and turn on the ambient light sensor.</li>
  <li>Disable quick start if you don't need instant power-on.</li>
  <li>Use the sleep timer and a smart power strip for the whole setup.</li>
</ul>
<p>More in <a href="/guides/how-much-electricity-does-a-tv-use">how much electricity a TV uses</a>.</p>
`,
  "gaming-pc": `
<h2>How to use this calculator</h2>
<p>Enter the combined power of your PC and monitor while gaming, the hours you play each day and your price per kWh. The result shows the cost per day, per month and per year.</p>
<h3>Estimating power under load</h3>
<p>Your power supply's rating (for example 850 W) is a maximum, not what the PC uses. Typical totals while gaming, including a monitor:</p>
<table>
  <thead><tr><th>System</th><th>Typical power while gaming</th></tr></thead>
  <tbody>
    <tr><td>Entry-level PC</td><td>230–350 W</td></tr>
    <tr><td>Midrange PC</td><td>330–500 W</td></tr>
    <tr><td>High-end PC</td><td>550–900 W</td></tr>
    <tr><td>Gaming laptop (plugged in)</td><td>140–280 W</td></tr>
    <tr><td>Home console with TV</td><td>230–320 W</td></tr>
  </tbody>
</table>
<p>For an accurate figure, plug the PC and monitor into a plug-in energy meter and read it during a demanding game.</p>
<h3>Don't forget idle time</h3>
<p>A PC left on the desktop all day can cost almost as much as the gaming hours. Run the calculator a second time with your idle power (often 60–130 W including the monitor) and idle hours, and add the two results.</p>
<h3>Ways to cut the cost</h3>
<ul>
  <li>Cap the frame rate at your monitor's refresh rate.</li>
  <li>Lower the GPU power limit or undervolt; you usually lose only a few percent of performance.</li>
  <li>Set the PC to sleep after 15–30 minutes of inactivity.</li>
</ul>
<p>More in <a href="/guides/how-much-does-a-gaming-pc-use">how much a gaming PC uses</a>.</p>
`,
  "water-heater": `
<h2>How to use this calculator</h2>
<p>Enter the power of your water heater's element in watts, the equivalent number of hours per day the element runs at full power, and your price per kWh. The result shows the daily, monthly and yearly cost.</p>
<h3>Estimating the runtime</h3>
<p>A tank's element switches on to reheat water after you use it and to replace heat lost through the tank walls. Typical electric tank elements are 3,000–5,500 W. A family of four commonly uses around 3,000–4,500 kWh a year for hot water, which for a 4,500 W element is about 2–3 hours of full-power runtime per day. A single person might be closer to 1 hour.</p>
<p>If you know your daily hot water use, you can estimate the energy directly: heating 1 litre by 1°C takes about 1.16 Wh. Heating 150 litres from 15°C to 50°C takes about 6 kWh, or 1.3 hours for a 4,500 W element.</p>
<h3>Comparing water heater types</h3>
<table>
  <thead><tr><th>Type</th><th>Typical yearly use (family of four)</th></tr></thead>
  <tbody>
    <tr><td>Standard electric tank</td><td>3,500–4,500 kWh</td></tr>
    <tr><td>Tankless electric</td><td>2,800–3,800 kWh</td></tr>
    <tr><td>Heat pump water heater</td><td>1,000–1,600 kWh</td></tr>
  </tbody>
</table>
<h3>Ways to cut the cost</h3>
<ul>
  <li>Set the thermostat to a safe but not excessive temperature, following local health guidance.</li>
  <li>Fit low-flow showerheads and insulate hot water pipes.</li>
  <li>Heat the tank off-peak with a timer if you have a time-of-use tariff.</li>
</ul>
<p>Compare the options in <a href="/guides/energy-efficient-water-heating">tank vs. tankless vs. heat pump</a>.</p>
`,
  "energy-savings": `
<h2>How to use this calculator</h2>
<p>Compare an old appliance with a more efficient replacement. Enter the power of each, the hours per day they run, the purchase price of the new appliance and your price per kWh. The calculator shows the yearly cost of each, your monthly saving and how long the new appliance takes to pay for itself.</p>
<h3>Good uses for this calculator</h3>
<ul>
  <li><strong>Lighting:</strong> a 60 W incandescent bulb against a 9 W LED.</li>
  <li><strong>Refrigerators:</strong> use average power (kWh per year ÷ 8.76) for each model.</li>
  <li><strong>Heating:</strong> a resistance heater against a heat pump delivering the same heat with a fraction of the power.</li>
  <li><strong>Electronics:</strong> an old TV or monitor against a new one.</li>
</ul>
<h3>Reading the payback period</h3>
<p>The payback period is the purchase price divided by the yearly saving. A rule of thumb:</p>
<ul>
  <li><strong>Under 2 years:</strong> almost always worth doing now.</li>
  <li><strong>2–7 years:</strong> worth it if the appliance will last longer than the payback, which most do.</li>
  <li><strong>Longer than the appliance's life:</strong> not worth replacing for energy alone; choose efficiency when the old one fails.</li>
</ul>
<h3>Example</h3>
<p>Replacing a 60 W bulb with a 9 W LED used 4 hours a day saves 51 W × 4 h × 365 = 74 kWh a year, about $11 at $0.15/kWh. An LED costing $3 pays for itself in about three months.</p>
<p>For more ideas ranked by cost and effort, see <a href="/guides/how-to-reduce-your-electricity-bill">how to reduce your electricity bill</a>.</p>
`,
  "price-comparison": `
<h2>How to use this calculator</h2>
<p>Enter your monthly electricity use in kWh and the price per kWh of up to three plans or suppliers. The calculator shows what each plan would cost for the same consumption, so you can see the difference at a glance.</p>
<h3>Comparing plans fairly</h3>
<ul>
  <li><strong>Use your real consumption.</strong> Take an average of 12 months from your bills, or check a high and a low month separately.</li>
  <li><strong>Include fixed charges.</strong> A plan with a cheaper unit rate but a higher daily standing charge can cost more overall, especially if you use little electricity. Add fixed charges with the <a href="/calculators/monthly-bill">monthly bill calculator</a>.</li>
  <li><strong>Check contract terms:</strong> fixed versus variable prices, contract length and exit fees.</li>
</ul>
<h3>Time-of-use plans</h3>
<p>For a plan with peak and off-peak prices, work out a weighted average rate. If 25% of your kWh fall in the peak at $0.30 and 75% off-peak at $0.11, your average is 0.25 × 0.30 + 0.75 × 0.11 = $0.1575 per kWh. Enter that as the plan's rate. Shifting more use off-peak lowers the average; see <a href="/guides/understanding-time-of-use-electricity-rates">time-of-use rates explained</a>.</p>
<h3>What a small rate difference is worth</h3>
<table>
  <thead><tr><th>Monthly use</th><th>Saving from 2¢ less per kWh</th></tr></thead>
  <tbody>
    <tr><td>300 kWh</td><td>$6 a month, $72 a year</td></tr>
    <tr><td>600 kWh</td><td>$12 a month, $144 a year</td></tr>
    <tr><td>1,000 kWh</td><td>$20 a month, $240 a year</td></tr>
  </tbody>
</table>
`,
};
