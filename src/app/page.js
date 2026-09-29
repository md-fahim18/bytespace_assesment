import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import CourseCatalog from "@/components/CourseCatalog";
import LearningPaths from "@/components/LearningPaths";
import GrowthSection from "@/components/GrowthSection";
import CreatorCta from "@/components/CreatorCta";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoStrip />
      <CourseCatalog />
      <LearningPaths />
      <GrowthSection />
      <CreatorCta />
      <Testimonials />
      <Footer />
    </main>
  );
}
