// components/Header.jsx
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Our Vision", href: "#vision" },
  { name: "Our Services", href: "#services" },
  { name: "Works (Our Portfolio)", href: "#portfolio" },
  { name: "Contact Us", href: "#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('#about');
      if (aboutSection) {
        const aboutPosition = aboutSection.getBoundingClientRect().top;
        setIsScrolled(aboutPosition < 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-orange-400 shadow-sm backdrop-blur-sm' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
        <div className="flex items-center space-x-2">
  <span className={`text-2xl font-bold tracking-tight transition-colors ${
    isScrolled ? 'text-blue-950' : 'text-white'
  }`}>
    Kz <span className={`transition-colors ${
      isScrolled ? 'text-white':'text-orange-600'
    }`}>Crafting</span>
  </span>
</div>

          {/* 3-Dot Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={`p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'hover:bg-gray-100 text-blue-950' 
                : 'hover:bg-white/20 text-white'
            }`}
            aria-label="Open menu"
          >
            <div className="space-y-1">
              <div className={`w-6 h-0.5 transition-colors ${
                isScrolled ? 'bg-blue-950' : 'bg-white'
              }`}></div>
              <div className={`w-6 h-0.5 transition-colors ${
                isScrolled ? 'bg-blue-950' : 'bg-white'
              }`}></div>
              <div className={`w-6 h-0.5 transition-colors ${
                isScrolled ? 'bg-blue-950' : 'bg-white'
              }`}></div>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-blue-950/95 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative z-10 text-center w-full px-6">
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors text-3xl w-10 h-10 flex items-center justify-center"
              aria-label="Close menu"
            >
              ×
            </button>

            {/* Navigation Links */}
            <nav className="space-y-6">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(link.href)}
                  className="block text-white hover:text-orange-500 transition-colors text-2xl font-medium w-full py-3"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}