// components/Footer.jsx
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white rounded-lg p-2">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Kz</span>
                </div>
              </div>
              <span className="text-2xl font-bold">
                Kz <span className="text-orange-500">Crafting</span>
              </span>
            </div>
            <p className="text-white/70 max-w-md mb-6">
              We bring your ideas to life with high-quality printing services. 
              From custom apparel to personalized gifts, we craft it all.
            </p>
            <div className="flex space-x-4">
              {['📷', '👥', '🐦', '💼'].map((icon, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors text-sm"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Our Vision', 'Services', 'Portfolio'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-white/70 hover:text-orange-500 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-white/70">
                <span>✉️</span>
                <span>info@kzcrafting.com</span>
              </li>
              <li className="flex items-center space-x-2 text-white/70">
                <span>📞</span>
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60">
            &copy; {currentYear} Kz Crafting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}