
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-pink-300 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent mb-4">
            LIOEM
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide">
            Where Quality Meets Emotion
          </p>
        </div>

        {/* Main Heading */}
        <div className="mb-8 animate-fade-in delay-300">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Amazing Karaoke Products
            <span className="block text-yellow-300">for Kids & Adults</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
            Discover our collection of high-quality karaoke products designed to bring families together, 
            spark creativity, and create unforgettable memories that last a lifetime.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
          <Button 
            onClick={scrollToProducts}
            size="lg" 
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Shop Our Products
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg rounded-full transition-all duration-300"
          >
            Watch Product Videos
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
