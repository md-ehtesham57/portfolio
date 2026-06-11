import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ContactSection />
      <SectionDivider />
      <Footer/>
    </>
  );
}