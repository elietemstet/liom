
import { Card } from "@/components/ui/card";
import { Video } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            See Our Products in Action
          </h2>
          <p className="text-xl text-gray-600">
            Watch how our karaoke products bring joy and excitement to families worldwide
          </p>
        </div>

        <Card className="overflow-hidden shadow-2xl border-0 animate-scale-in">
          <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            {/* Placeholder for video - replace with actual video embed */}
            <div className="text-center text-white">
              <Video className="w-20 h-20 mx-auto mb-4 text-blue-400" />
              <h3 className="text-2xl font-bold mb-2">Product Demo Video</h3>
              <p className="text-gray-300">
                Insert your product video embed code here
              </p>
              <div className="mt-6 text-sm text-gray-400">
                <p>To add your video:</p>
                <p>1. Upload your video to YouTube or Vimeo</p>
                <p>2. Get the embed code</p>
                <p>3. Replace this placeholder with the embed</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Video Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Product Demos</h3>
            <p className="text-gray-600">Watch detailed demonstrations of all features</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Happy Customers</h3>
            <p className="text-gray-600">See real families enjoying our products</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Setup Guides</h3>
            <p className="text-gray-600">Easy step-by-step setup instructions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
