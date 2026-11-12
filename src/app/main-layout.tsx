import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}