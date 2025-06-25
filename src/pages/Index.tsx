
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import VideoSection from "@/components/VideoSection";
import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      <Hero />
      <Products />
      <VideoSection />
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
