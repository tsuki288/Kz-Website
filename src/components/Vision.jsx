// components/Vision.jsx
export function Vision() {
  return (
    <section id="vision" className="py-20 md:py-32 bg-gradient-to-br from-blue-950 to-blue-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 bg-orange-600/20 text-orange-400 rounded-full text-sm font-medium mb-4">
            Our Vision
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Crafting Tomorrow, Today</h2>
          <p className="text-white/80 text-lg">
            We envision a world where creativity knows no bounds and every idea can be 
            transformed into a tangible masterpiece through the art of printing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Innovation */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6">
              <div className="text-2xl">💡</div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Innovation</h3>
            <p className="text-white/70">
              Embracing cutting-edge technology and creative solutions to deliver 
              exceptional results that exceed expectations.
            </p>
          </div>

          {/* Excellence */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6">
              <div className="text-2xl">🎯</div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Excellence</h3>
            <p className="text-white/70">
              Maintaining the highest standards in quality, precision, and attention 
              to detail in every project we undertake.
            </p>
          </div>

          {/* Passion */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-orange-600/20 rounded-xl flex items-center justify-center mb-6">
              <div className="text-2xl">❤️</div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Passion</h3>
            <p className="text-white/70">
              Driven by our love for craftsmanship and dedication to helping clients 
              bring their creative visions to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}