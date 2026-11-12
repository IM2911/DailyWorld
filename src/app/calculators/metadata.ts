import { Metadata } from "next";
import { guides } from "@/lib/guides";

export function generateMetadata(): Metadata {
  return {
    title: "All Calculators — DailyWorld",
    description: "Browse 15+ free electricity cost calculators for household appliances, monthly bills, and energy savings.",
  };
}

// Keep page content clean
export { default } from "./page-content";