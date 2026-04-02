import { createFileRoute } from '@tanstack/react-router';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ArchitecturalServicesSection from '../components/ArchitecturalServicesSection';
import InteriorDesignSection from '../components/InteriorDesignSection';
import PlanningExecutionSection from '../components/PlanningExecutionSection';
import DesignVisualizationSection from '../components/DesignVisualizationSection';
import ProjectsSection from '../components/ProjectsSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export const Route = createFileRoute('/')({
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ArchitecturalServicesSection />
        <InteriorDesignSection />
        <PlanningExecutionSection />
        <DesignVisualizationSection />
        <ProjectsSection />
        <WhyChooseUs />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}