// components/About.jsx
import { useState, useEffect, useRef } from "react";

const aboutImages = [
  "https://images.unsplash.com/photo-1671124739629-0583d5c856a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
];

export function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const imageRef = useRef(null);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % aboutImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Mouse move effect for image
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (imageRef.current && isHovering) {
        const rect = imageRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
        setMousePosition({ x, y });
      }
    };

    const image = imageRef.current;
    if (image) {
      image.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (image) {
        image.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isHovering]);

  // Calculate transform values based on mouse position
  const imageTransform = isHovering 
    ? `scale(1.05) translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
    : 'scale(1)';

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Centered Header with Title and Small Paragraph */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <span className="inline-block text-orange-600 rounded-full text-xl font-medium mb-6 tracking-wide">
            About Us
          </span>
      
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Crafting Your Vision 
            <span className="text-orange-400"> Into Reality</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Transforming ideas into tangible creations through expert printing and personalized craftsmanship. 
            Your vision, our passion - brought to life with precision and care.
          </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-orange-400 text-3xl font-bold mb-2">500+</div>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-orange-400 text-3xl font-bold mb-2">5000+</div>
                <p className="text-gray-600">Projects Done</p>
              </div>
              <div className="text-center">
                <div className="text-orange-400 text-3xl font-bold mb-2">99%</div>
                <p className="text-gray-600">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image Slideshow */}
          <div className="relative">
            <div 
              ref={imageRef}
              className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ x: 0, y: 0 });
              }}
            >
              {/* Main Image with Zoom and Movement */}
              <img
                src={aboutImages[currentImageIndex]}
                alt="Kz Crafting Team"
                className="w-full h-[500px] object-cover transition-all duration-700 ease-out"
                style={{ transform: imageTransform }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-transparent" />
              
              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {currentImageIndex + 1} / {aboutImages.length}
              </div>

              {/* Hover Instruction */}
              {!isHovering && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-black/50 text-white px-4 py-2 rounded-lg backdrop-blur-sm text-sm opacity-0 animate-pulse hover:opacity-100 transition-opacity">
                    Hover to explore
                  </div>
                </div>
              )}
            </div>

            {/* Image Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-6">
              {aboutImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-orange-400 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-400/20 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-400/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}