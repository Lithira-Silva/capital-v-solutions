import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Pillars } from "@/components/Pillars";
import { Difference } from "@/components/Difference";
import { Engagement } from "@/components/Engagement";
import { TechStack } from "@/components/TechStack";
import { Partners } from "@/components/Partners";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Problem />
      <Pillars />
      <Difference />
      <Engagement />
      <TechStack />
      <Partners />
      <CTA />
      <Footer />
    </main>
  );
}
