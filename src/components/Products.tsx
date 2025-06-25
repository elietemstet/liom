
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Kids Karaoke Microphone Pro",
      description: "Professional-grade wireless microphone designed specifically for children. Features LED lights, echo effects, and Bluetooth connectivity for hours of musical fun.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
      amazonUrl: "#"
    },
    {
      id: 2,
      name: "Portable Karaoke Speaker Set",
      description: "All-in-one karaoke system with powerful speakers, colorful LED display, and dual microphone support. Perfect for parties and family gatherings.",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop",
      amazonUrl: "#"
    },
    {
      id: 3,
      name: "Interactive Karaoke Stage",
      description: "Transform any room into a concert stage! Complete with stage lights, smoke effects, and a digital scoring system to make every performance special.",
      image: "https://images.unsplash.com/photo-1501286353178-1ec881214838?w=400&h=300&fit=crop",
      amazonUrl: "#"
    }
  ];

  return (
    <section id="products" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Our Amazing Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully crafted collection of karaoke products, designed to bring out the star in everyone
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <Button 
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                  onClick={() => window.open(product.amazonUrl, '_blank')}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Buy on Amazon
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
