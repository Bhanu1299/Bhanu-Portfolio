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

export default function Index() {
  return (
    <SplashScreen>
      <ThemeProvider>
        <div className="min-h-screen bg-parchment dark:bg-sepia-bg text-brown-900 dark:text-cream theme-page-bg">
          <div className="grain-overlay" aria-hidden />
          <Navbar />
          <HeroSection />
          <MarqueeDivider
            phrases={[
              "Software Engineering",
              "Full-Stack Development",
              "Machine Learning",
              "Cloud Systems",
            ]}
          />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <MarqueeDivider
            phrases={["Selected Works", "Built to Ship", "Crafted with Care"]}
          />
          <ProjectsSection />
          <ContactSection />
        </div>
      </ThemeProvider>
    </SplashScreen>
  );
}
