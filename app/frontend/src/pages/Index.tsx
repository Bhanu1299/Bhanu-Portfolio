import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ThemeProvider from "@/components/ThemeProvider";
import SplashScreen from "@/components/SplashScreen";
import MarqueeDivider from "@/components/MarqueeDivider";
import InkWash from "@/components/InkWash";
import { marquees } from "@/data/portfolio";

export default function Index() {
  return (
    <SplashScreen>
      <ThemeProvider>
        <div className="min-h-screen bg-parchment dark:bg-sepia-bg text-brown-900 dark:text-cream theme-page-bg">
          <div className="grain-overlay" aria-hidden />
          <Navbar />
          <HeroSection />
          <MarqueeDivider phrases={marquees.afterHero} />
          <AboutSection />
          <InkWash />
          <ExperienceSection />
          <InkWash />
          <EducationSection />
          <MarqueeDivider phrases={marquees.beforeProjects} />
          <ProjectsSection />
          <InkWash />
          <ContactSection />
        </div>
      </ThemeProvider>
    </SplashScreen>
  );
}
