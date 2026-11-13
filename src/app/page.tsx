import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  Lightbulb,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Practical calculators",
    description:
      "Estimate the running cost of everyday appliances and make sense of your household electricity use.",
    href: "/calculators",
    link: "Explore calculators",
  },
  {
    icon: BookOpen,
    title: "Straightforward guides",
    description:
      "Understand energy, bills and efficiency with clear explanations written to make complex topics easier.",
    href: "/guides",
    link: "Read the guides",
  },
  {
    icon: Lightbulb,
    title: "Ideas that make a difference",
    description:
      "Discover practical ways to reduce wasted energy while keeping the comfort and routines that matter.",
    href: "/energy-saving",
    link: "Find ways to save",
  },
];

export const metadata: Metadata = {
  ...pageMetadata({
    title: "DailyWorld — Electricity Cost Calculators & Energy Guides",
    description:
      "Free electricity cost calculators, appliance energy guides, and energy-saving tips. Calculate how much your appliances cost to run, compare electricity prices, and reduce your household energy bill.",
    path: "/",
  }),
  title: { absolute: "DailyWorld — Electricity Cost Calculators & Energy Guides" },
};

export default function HomePage() {
  return (
    <div>
      <section className="container-page home-hero">
        <div className="home-hero-copy animate-soft-rise">
          <span className="eyebrow">Energy, made clearer</span>
          <h1>
            Make smarter decisions about{" "}
            <span className="text-gradient">energy.</span>
          </h1>
          <p className="home-hero-description">
            Understand what your appliances cost to run, explore practical
            energy-saving ideas and take control of your household bills with
            clear electricity cost calculators and expert guides.
          </p>
          <div className="home-hero-actions">
            <Link href="/calculators" className="btn btn-primary">
              Explore calculators <ArrowRight size={17} />
            </Link>
            <Link href="/guides" className="btn btn-outline">
              Browse energy guides
            </Link>
          </div>
        </div>

        <div className="hero-art animate-soft-rise delay-200" aria-hidden="true">
          <div className="hero-orbit" />
          <div className="hero-energy-card">
            <div className="energy-card-top">
              <span>DailyWorld</span>
              <span>01 / Clarity</span>
            </div>
            <div className="energy-card-icon">
              <Zap size={27} strokeWidth={2.1} />
            </div>
            <div className="energy-card-title">
              Understand your energy.
            </div>
            <p className="energy-card-copy">
              Small insights can make everyday energy use easier to understand.
            </p>
            <div className="energy-card-rule">
              <span />
              Measure <span />
              Compare <span />
              Improve
            </div>
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="container-page">
          <div className="section-heading">
            <span className="section-eyebrow">A simpler way forward</span>
            <h2 className="mt-4 mb-4">
              Everything you need to make energy make sense.
            </h2>
            <p className="mx-auto max-w-2xl">
              Useful tools and clear information, brought together in one
              place. No unnecessary complexity — just the insight you need.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className="feature-card" key={feature.title}>
                  <div className="feature-card-icon">
                    <Icon size={22} strokeWidth={1.9} />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <Link href={feature.href} className="feature-card-link">
                    {feature.link}
                    <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page">
        <div className="home-note">
          <div>
            <span className="section-eyebrow">Start with one question</span>
            <h2>Know where your energy goes — and what you can do next.</h2>
            <p>
              Start with a quick calculation or explore a guide. DailyWorld
              helps turn everyday energy questions into useful, understandable
              answers.
            </p>
          </div>
          <Link href="/calculators" className="btn btn-primary">
            Find your calculator <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
