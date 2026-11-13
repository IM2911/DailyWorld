import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ContactPageClient } from "./contact-page-client";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us",
  description:
    "Send DailyWorld a suggestion, complaint, bug report or question through the contact form.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactPageClient />;
}
