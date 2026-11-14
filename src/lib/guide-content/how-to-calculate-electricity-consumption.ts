export const content = `
<p>Every electricity bill is a sum of kilowatt-hours. If you can work out the kWh used by a single appliance, you can work out its cost, compare it with alternatives and decide where saving effort pays off. The method is the same for a light bulb and for a heat pump, and it needs only a calculator.</p>

<h2>Three units you need to know</h2>
<ul>
  <li><strong>Watt (W)</strong> measures power: how fast an appliance uses energy at a given moment.</li>
  <li><strong>Kilowatt (kW)</strong> is 1,000 watts.</li>
  <li><strong>Kilowatt-hour (kWh)</strong> measures energy: power used over time. One kWh is 1,000 watts for one hour, or 100 watts for ten hours. It is the unit your utility charges for.</li>
</ul>

<h2>The formula</h2>
<p><strong>Energy (kWh) = Power (W) × Hours of use ÷ 1,000</strong></p>
<p><strong>Cost = Energy (kWh) × Price per kWh</strong></p>
<p>That is all. Everything else is about getting good inputs.</p>

<h2>Step by step</h2>
<ol>
  <li><strong>Find the power.</strong> Look for the rating plate or sticker on the appliance, the power supply or the manual. It may show watts directly (for example "1500W") or show amps and volts. If it shows amps, multiply: watts ≈ volts × amps. Use 120 V in North America and 230 V in most of Europe.</li>
  <li><strong>Estimate the hours.</strong> How many hours a day is it actually on? Be honest: a TV that is on "all evening" might be 4 hours; a phone charger may be plugged in all day but only charging for 2.</li>
  <li><strong>Calculate daily kWh</strong> with the formula above.</li>
  <li><strong>Scale up.</strong> Multiply by 30 for a month or by 365 for a year.</li>
  <li><strong>Multiply by your price.</strong> Use the price per kWh on your bill. If your bill has several rates, use the one that applies when the appliance runs.</li>
</ol>

<h2>Examples</h2>
<table>
  <thead><tr><th>Appliance</th><th>Power</th><th>Use per day</th><th>kWh per month</th><th>Cost per month at $0.15</th></tr></thead>
  <tbody>
    <tr><td>LED bulb</td><td>9 W</td><td>5 hours</td><td>1.35</td><td>$0.20</td></tr>
    <tr><td>Laptop</td><td>50 W</td><td>8 hours</td><td>12</td><td>$1.80</td></tr>
    <tr><td>Space heater</td><td>1,500 W</td><td>3 hours</td><td>135</td><td>$20.25</td></tr>
    <tr><td>Electric kettle</td><td>2,000 W</td><td>15 minutes</td><td>15</td><td>$2.25</td></tr>
    <tr><td>Wi-Fi router</td><td>10 W</td><td>24 hours</td><td>7.2</td><td>$1.08</td></tr>
  </tbody>
</table>
<p>Take the space heater: 1,500 × 3 ÷ 1,000 = 4.5 kWh per day. Over 30 days that is 135 kWh, and at $0.15 per kWh it costs $20.25. Short uses of powerful appliances, like the kettle, add up less than people expect; small loads that run all day, like the router, add up more.</p>

<h2>When the simple formula is not enough</h2>
<h3>Appliances that cycle</h3>
<p>Refrigerators, freezers, air conditioners, water heaters and ovens switch their main load on and off to hold a temperature. For these, multiply by the share of time the load is actually on (the duty cycle), or use the yearly kWh from the energy label. Our <a href="/calculators/appliance-energy">appliance energy calculator</a> lets you set this directly.</p>
<h3>Appliances with variable power</h3>
<p>A gaming PC might use 80 W on the desktop and 450 W in a game. A washing machine draws little while tumbling and a lot while heating water. Estimate each mode separately and add them, or measure.</p>
<h3>Standby power</h3>
<p>Many devices draw a few watts while "off". Multiply that standby wattage by the hours they spend in standby; across a whole home it can matter.</p>

<h2>Measure instead of guessing</h2>
<p>A plug-in energy meter sits between the socket and the appliance and shows watts in real time plus a running kWh total. Leave it for a day or a week for appliances with varying use. For things that are hard-wired, such as an electric water heater or central air conditioner, your smart meter's hourly data or a reading of the meter before and after a period of use gives a good estimate.</p>

<h2>Check your total against the bill</h2>
<p>Add up your estimates for the main appliances and compare with the kWh on your bill. If your estimate is far lower, something is using more than you think: often heating, water heating, an old second fridge or always-on electronics. The <a href="/calculators/monthly-bill">monthly bill calculator</a> helps you build the full picture appliance by appliance.</p>
`;
