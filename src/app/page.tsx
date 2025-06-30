"use client";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SkillsSection from "./components/SkillsSection";
import WorkProcessSection from "./components/WorkProcessSection";
import { ThemeProvider } from "./context/theme-context";

export default function Page() {
  return (
    <ThemeProvider>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <WorkProcessSection />
      <ContactSection />
      <FooterSection />
    </ThemeProvider>
  );
}
