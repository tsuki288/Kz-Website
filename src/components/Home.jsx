// components/Home.jsx
import { useState, useEffect, useRef } from "react";
import { homeContent } from "../data/homeContent";

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next'); // 'next' or 'prev'
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection('next');
      setCurrentSlide((prev) => (prev + 1) % homeContent.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
        setMousePosition({ x, y });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Manual slide navigation
  const goToSlide = (index) => {
    const newDirection = index > currentSlide ? 'next' : 'prev';
    setDirection(newDirection);
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setDirection('next');
    setCurrentSlide((prev) => (prev + 1) % homeContent.length);
  };

  const goToPrev = () => {
    setDirection('prev');
    setCurrentSlide((prev) => (prev - 1 + homeContent.length) % homeContent.length);
  };

  const currentContent = homeContent[currentSlide];

  // Calculate progress percentage for the bar
  const progressPercentage = (parseInt(currentContent.progress.split('/')[0]) / 5) * 100;

  // Calculate transform values based on mouse position
  const textTransform = `translate(${mousePosition.x * 20}px, ${mousePosition.y * 10}px)`;
  const imageTransform = `translate(${mousePosition.x * 30}px, ${mousePosition.y * 20}px) scale(1.1)`;

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden cursor-none"
    >
      {/* Background Images with Slide Animation and Mouse Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {homeContent.map((content, index) => (
          <div
            key={content.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide
                ? 'translate-x-0'
                : direction === 'next'
                ? index === (currentSlide - 1 + homeContent.length) % homeContent.length
                  ? '-translate-x-full'
                  : 'translate-x-full'
                : index === (currentSlide + 1) % homeContent.length
                ? 'translate-x-full'
                : '-translate-x-full'
            }`}
          >
            <img
              src={content.image}
              alt={content.title}
              className="w-full h-full object-cover transition-transform duration-1000 ease-out"
              style={{
                transform: index === currentSlide ? imageTransform : 'none'
              }}
            />
            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Content with Slide Animation and Mouse Effect */}
      <div className="container mx-auto px-4 relative z-10 overflow-hidden">
        <div className="relative h-96">
          {homeContent.map((content, index) => (
            <div
              key={content.id}
              className={`absolute top-0 left-0 w-full transition-transform duration-500 ease-in-out ${
                index === currentSlide
                  ? 'translate-x-0'
                  : direction === 'next'
                  ? index === (currentSlide - 1 + homeContent.length) % homeContent.length
                    ? '-translate-x-full'
                    : 'translate-x-full'
                  : index === (currentSlide + 1) % homeContent.length
                  ? 'translate-x-full'
                  : '-translate-x-full'
              }`}
            >
              <div className="gap-12 items-center max-w-4xl mx-auto">
                <div className="space-y-8 text-white">
                  {/* Main Heading with Mouse Follow */}
                  <h1 
                    className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight transition-transform duration-300 ease-out"
                    style={{
                      transform: index === currentSlide ? textTransform : 'none'
                    }}
                  >
                    {content.staticTitle}{" "}
                    <span className="text-orange-400">{content.highlightedTitle}</span> <br />
                    {content.staticSubtitle}
                  </h1>
                  
                  {/* Description */}
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                      {content.description}
                    </p>
                    
                    {/* Learn More Button */}
                    <div className="flex items-left space-x-8">
                      <button className="text-orange-400 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        {content.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     
      <div className="absolute bottom-8 left-8 z-10">
        <div className="flex items-center space-x-3 text-gray-300">
          <span className="text-sm font-medium">
            {currentContent.progress}
          </span>
          <div className="w-20 h-1  rounded-full overflow-hidden">
           
      <button
        onClick={goToPrev}
        className="absolute top-1/2 transform -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors p-2"
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white/70 hover:text-white transition-colors p-2"
        aria-label="Next slide"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
          </div>
        </div>
      </div>

    

      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 bg-orange-400 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out mix-blend-difference"
        style={{
          left: `${mousePosition.x * 50 + 50}%`,
          top: `${mousePosition.y * 50 + 50}%`,
          transform: 'translate(-50%, -50%)'
        }}
      />

    
    </section>
  );
}