
const AboutUs = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Us
          </h2>
          
          <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
            <p className="text-xl mb-6 text-purple-600 font-semibold">
              Nice to meet you — we're Lioem, a brand born out of love for the small moments that make all the difference.
            </p>
            
            <p className="text-lg mb-6">
              We started with fun karaoke products designed for both kids and adults — and we're just getting started. 
              We're constantly working on new ideas and exciting products that are coming soon, always with a focus on 
              quality, user experience, and of course – fun.
            </p>
            
            <p className="text-lg mb-6">
              Our goal is simple: To bring products that connect people, spark smiles, and create lasting memories.
            </p>
            
            <p className="text-lg mb-8">
              If you love moments of joy – you're in the right place.
            </p>
            
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 mt-12">
              <p className="text-2xl font-bold text-purple-800">
                Lioem – Where Quality Meets Emotion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
