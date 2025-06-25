
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-pink-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Logo */}
          <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            LIOEM
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Where Quality Meets Emotion
          </p>
          
          {/* Tagline */}
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-gray-200 leading-relaxed">
              Creating products that connect people, spark smiles, and create lasting memories. 
              Thank you for choosing Lioem for your family's musical journey.
            </p>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-white/20 pt-6">
            <p className="text-gray-300">
              © 2024 Lioem. All rights reserved. | Bringing joy through quality karaoke products.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
