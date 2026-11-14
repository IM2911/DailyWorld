import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "DailyWorld is a free, independent resource with electricity cost calculators and guides that help households understand and reduce their energy use.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container-page dw-enter py-12">
      <h1 className="mb-6 text-4xl font-normal text-slate-900 md:text-5xl dark:text-slate-50">About DailyWorld</h1>
      <section className="prose">
        <p>
          DailyWorld is a free, independent website that answers one everyday
          question: <strong>what does it actually cost to run the things in
          my home?</strong> Electricity bills arrive as a single total, which
          makes it hard to know whether the fridge, the air conditioner or the
          gaming PC is the one worth worrying about. We built DailyWorld to
          break that total down.
        </p>

        <h2>What you will find here</h2>
        <ul>
          <li>
            <a href="/calculators" className="text-brand-600 underline">
              Fifteen calculators
            </a>
            , one for each common appliance or question, from refrigerators
            and water heaters to a full monthly bill and a comparison of two
            electricity prices.
          </li>
          <li>
            <a href="/guides" className="text-brand-600 underline">
              Twenty guides
            </a>{" "}
            that explain how much energy appliances typically use, how tariffs
            and meters work, and which changes save the most money.
          </li>
          <li>
            <a href="/energy-saving" className="text-brand-600 underline">
              Practical saving tips
            </a>{" "}
            for every room of the home.
          </li>
        </ul>

        <h2>How the calculators work</h2>
        <p>
          Every calculator is built on the same basic relationship: energy in
          kilowatt-hours equals power in kilowatts multiplied by hours of use,
          and cost equals that energy multiplied by your price per kWh. Where
          an appliance does not run at full power all the time, such as a
          refrigerator compressor or a water heater, the calculator adds a
          duty cycle or usage pattern and tells you which assumption it uses.
        </p>
        <p>
          The formula and a worked example sit next to every calculator, so you
          can check the arithmetic yourself. You always enter your own
          electricity price, because rates vary enormously between countries,
          suppliers and times of day. Nothing you type is sent to us: the
          numbers are processed in your browser.
        </p>

        <h2>Where our numbers come from</h2>
        <p>
          The typical wattages and consumption ranges in our guides are
          general figures for common household appliances, based on the power
          ratings printed on appliance labels, published energy-label data
          and the basic physics of heating, cooling and motors. They are
          ranges, not promises: a specific model can sit well above or below
          them. For the most precise answer, use the wattage on your
          appliance&apos;s rating plate or energy label, or measure it with a
          plug-in energy meter, and the price per kWh shown on your latest
          bill.
        </p>

        <h2>Independence and advertising</h2>
        <p>
          DailyWorld does not sell appliances, energy plans or any other
          product, and no company pays to be mentioned in our guides. The site
          is free to use and is funded by advertising served through Google
          AdSense. Ads are shown in clearly separated spaces and never change
          what a calculator returns or what a guide recommends.
        </p>

        <h2>Corrections and feedback</h2>
        <p>
          If you spot a mistake in a formula, a figure that looks wrong for
          your region, or a calculator you would like us to add, please{" "}
          <a href="/contact" className="text-brand-600 underline">
            contact us
          </a>
          . We read every message and update pages when a correction is
          confirmed.
        </p>

        <h2>Privacy</h2>
        <p>
          You do not need an account to use anything on DailyWorld. Read how we
          handle data and cookies in our{" "}
          <a href="/privacy-policy" className="text-brand-600 underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/cookie-policy" className="text-brand-600 underline">
            Cookie Policy
          </a>
          .
        </p>
      </section>
    </div>
  );
}
