import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import Edge from "@/components/Edge";
import Domain from "@/components/Domain";
import Segmentation from "@/components/Segmentation";
import Audience from "@/components/Audience";
import Cat from "@/components/CAT";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Clients />
      <Edge />
      <Domain />
      <Segmentation />
      <Audience />
      <Cat />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <Footer />
    </main>
  );
}