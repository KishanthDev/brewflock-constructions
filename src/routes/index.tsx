import { createFileRoute } from '@tanstack/react-router';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import { WhyChooseUs } from '../components/WhyChooseUs';
import ProcessSection from '../components/ProcessSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Plans from '../components/Plans';

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
        <ProjectsSection />
        <WhyChooseUs />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
        <Plans />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}