// components/Services.jsx
import { useState, useEffect } from "react";


const services = [
  {
    id: 1,
    image: "/service/refmagnet.webp",  // Public folder path
    badge: "BEST SELLER",
    title: "Custom Ref Magnets",
    description: "Personalized ref magnets, perfect for souvenirs or giveaways.",
    features: ["Starting at ₱18 (auto-cut)", "Various shapes and sizes", "Durable and vibrant prints"]
  },
  {
    id: 2,
    image: "/service/mugprinting.webp ",
    badge: "POPULAR",
    title: "Personalized Mug Printing",
    description: "Create unique mugs with your photos, logos, or custom messages.",
    features: ["Only ₱89 (with box, sticker, and ribbon)", "Sublimation Printing", "Full-color designs"]
  },
  {
    id: 3,
    image: "/service/nordicmug.webp",
    badge: "NEW",
    title: "Nordic Mug",
    description: "Stylish Nordic mugs, perfect for a modern touch to your personalized collection.",
    features: ["Only ₱249", "Premium ceramic material", "Unique design"]
  },
  {
    id: 4,
    image: "/service/tumbler.webp",  // Public folder path
    badge: "TRENDING",
    title: "Customized Tumbler",
    description: "Personalized tumblers for your daily hydration or as unique gifts.",
    features: ["Only ₱589", "High-quality insulation", "Durable and portable"]
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1580990368320-2bd6615f6796?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "HOT",
    title: "Magic Mug",
    description: "Reveal your hidden design when hot liquid is poured into this magical mug!",
    features: ["Only ₱129", "Heat-sensitive coating", "Surprise and delight"]
  },
  {
    id: 6,
    image: "/service/premium tshirt.jfif",  // Public folder path
    badge: "BEST SELLER",
    title: "T-Shirt Printing",
    description: "Express yourself with custom-designed t-shirts for events, businesses, or personal wear.",
    features: ["Starting at ₱99", "Various printing methods", "Comfortable fabric"]
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1580990368320-2bd6615f6796?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "POPULAR",
    title: "Glass Cup",
    description: "Elegant glass cups for a sophisticated drinking experience.",
    features: ["Only ₱105", "Clear and durable glass", "Perfect for any beverage"]
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "NEW",
    title: "Inner Mug",
    description: "Mugs with a colored inner lining for a subtle pop of color.",
    features: ["Only ₱119", "Various inner colors available", "Customizable exterior"]
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "TRENDING",
    title: "Vinyl Sticker (Per Inch)",
    description: "Durable vinyl stickers, perfect for tumblers, motors, or any outdoor use.",
    features: ["Only ₱5 per inch", "Weatherproof and long-lasting", "Custom shapes and sizes"]
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "HOT",
    title: "Customized Notebook",
    description: "Personalized notebooks for school, office, or as thoughtful gifts.",
    features: ["Only ₱89", "60 pages", "Custom cover design"]
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1556655851-8fa0b5c1246a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "BEST SELLER",
    title: "Premium T-Shirt",
    description: "High-quality t-shirts with premium fabric and printing.",
    features: ["Starting at ₱300", "Soft and durable materials", "Vibrant prints"]
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "POPULAR",
    title: "Custom Tote Bags",
    description: "Eco-friendly and stylish tote bags with your custom designs.",
    features: ["Starting at ₱65", "Durable fabric", "Perfect for branding"]
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1580990368320-2bd6615f6796?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "NEW",
    title: "Customized Loot Box",
    description: "Personalized loot boxes for parties, events, or special occasions.",
    features: ["Only ₱180 (10 pcs)", "Custom themes and designs", "Perfect for party favors"]
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "TRENDING",
    title: "Baptism Candle",
    description: "Beautifully customized candles for baptisms and religious events.",
    features: ["Starting at ₱20 each", "Personalized designs", "High-quality wax"]
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1580990368320-2bd6615f6796?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "HOT",
    title: "Customized Event Hat",
    description: "Personalized hats for events, promotions, or team wear.",
    features: ["Only ₱105 each", "Various colors and styles", "Custom embroidery"]
  },
  {
    id: 16,
    image: "https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "BEST SELLER",
    title: "Photo Printing (A4)",
    description: "High-quality photo printing on A4 size paper.",
    features: ["Only ₱45", "Vibrant colors", "Professional finish"]
  },
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "POPULAR",
    title: "Sticker (A4 Size Vinyl)",
    description: "Custom vinyl stickers on A4 size sheets for outdoor use.",
    features: ["Only ₱45", "Waterproof and long-lasting", "Customizable designs"]
  },
  {
    id: 18,
    image: "https://images.unsplash.com/photo-1556655851-8fa0b5c1246a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "NEW",
    title: "ID Lace Printing",
    description: "Customized ID laces for corporate events, schools, and organizations.",
    features: ["Full-color printing", "Various widths", "With or without accessories"]
  },
  {
    id: 19,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "TRENDING",
    title: "Button Pin Printing",
    description: "Fun and customizable button pins for souvenirs or personal flair.",
    features: ["Various sizes", "Glossy finish", "Quick turnaround"]
  },
  {
    id: 20,
    image: "https://images.unsplash.com/photo-1580990368320-2bd6615f6796?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "HOT",
    title: "Custom Chip Bag (Small)",
    description: "Personalized small chip bags for party favors or snacks.",
    features: ["Only ₱10", "Custom designs", "Perfect for small treats"]
  },
  {
    id: 21,
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    badge: "BEST SELLER",
    title: "Custom Chip Bag (Big)",
    description: "Larger personalized chip bags for events and gatherings.",
    features: ["Only ₱16", "Custom designs", "More space for goodies"]
  }
];

export function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerView(2); // Mobile: 2 items
      } else if (width < 768) {
        setItemsPerView(3); // Small tablet: 3 items
      } else if (width < 1024) {
        setItemsPerView(4); // Tablet: 4 items
      } else if (width < 1280) {
        setItemsPerView(5); // Small desktop: 5 items
      } else {
        setItemsPerView(6); // Large desktop: 6 items
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const totalSlides = Math.ceil(services.length / itemsPerView);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section id="services" className="py-16 bg-orange-200">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium mb-3">
            Our Service
          </span>
        
          <div className="w-16 h-0.5 bg-orange-400 mx-auto mb-4"></div>
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
            Discover our most popular printing products and services
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 bg-white hover:bg-orange-400 text-gray-700 hover:text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200"
            aria-label="Previous products"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 bg-white hover:bg-orange-400 text-gray-700 hover:text-white w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-gray-200"
            aria-label="Next products"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div 
                  key={slideIndex} 
                  className="w-full flex-shrink-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 px-2"
                >
                  {services
                    .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                    .map((service) => (
                      <div 
                        key={service.id} 
                        className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                      >
                        {/* Product Image */}
                        <div className="relative overflow-hidden">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-28 md:h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {/* Badge */}
                          <div className="absolute top-2 left-2">
                            <span className="bg-orange-400 text-white px-2 py-1 rounded-full text-xs font-bold">
                              {service.badge}
                            </span>
                          </div>
                        </div>

                        {/* Product Content */}
                        <div className="p-3">
                          {/* Title */}
                          <h2 className="text-xs md:text-sm font-bold text-gray-900 mb-2 line-clamp-2 leading-tight">
                            {service.title}
                          </h2>

                          {/* Separator */}
                          <div className="w-6 h-0.5 bg-gray-300 mb-2"></div>

                          {/* Description */}
                          <p className="text-xs text-gray-600 mb-2 leading-relaxed line-clamp-2">
                            {service.description}
                          </p>

                          {/* Features */}
                          <ul className="space-y-1">
                            {service.features.slice(0, 2).map((feature, index) => (
                              <li key={index} className="flex items-start text-gray-700 text-xs">
                                <span className="w-1 h-1 bg-orange-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                                <span className="line-clamp-1">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators - Only show if multiple slides */}
          {totalSlides > 1 && (
            <div className="flex justify-center space-x-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-orange-400 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Counter */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Showing {Math.min(services.length, (currentSlide + 1) * itemsPerView)} of {services.length} products
          </p>
        </div>

        {/* View All Products */}
        <div className="text-center mt-8">
          <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors duration-300 shadow-lg hover:shadow-xl">
            View All {services.length} Products
          </button>
        </div>
      </div>
    </section>
  );
}