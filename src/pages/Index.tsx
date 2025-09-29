import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Demo from "@/components/Demo";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Features />
        <Demo />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
