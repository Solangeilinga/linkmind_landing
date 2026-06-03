import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import Marquee       from "@/components/Marquee";
import Features      from "@/components/Features";
import Community     from "@/components/Community";
import Professionals from "@/components/Professionals";
import Mindo         from "@/components/Mindo";
import Testimonials  from "@/components/Testimonials";
import HowItWorks    from "@/components/HowItWorks";
import { CTABanner, Footer } from "@/components/CTAFooter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Community />
        <Professionals />
        <Mindo />
        <HowItWorks />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
