// components/About.jsx
export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1671124739629-0583d5c856a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Kz Crafting Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-orange-600/20 rounded-2xl -z-10" />
            </div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-blue-950/10 rounded-2xl -z-10" />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div>
              <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">About Kz Crafting</h2>
            </div>

            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                At Kz Crafting, we believe that every project tells a story. Founded with a passion 
                for creativity and precision, we specialize in transforming ordinary items into 
                extraordinary keepsakes through our expert printing services.
              </p>
              
              <p>
                Our team of skilled craftsmen and designers work tirelessly to ensure that each 
                product meets the highest standards of quality. Whether you're looking for custom 
                apparel, personalized gifts, or promotional materials, we have the expertise and 
                technology to bring your vision to life.
              </p>

              <p>
                We pride ourselves on our attention to detail, quick turnaround times, and 
                exceptional customer service. From small personal projects to large corporate 
                orders, we treat every client with the same dedication and care.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div>
                <div className="text-orange-600 text-2xl font-bold mb-1">500+</div>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div>
                <div className="text-orange-600 text-2xl font-bold mb-1">5000+</div>
                <p className="text-gray-600">Projects Done</p>
              </div>
              <div>
                <div className="text-orange-600 text-2xl font-bold mb-1">99%</div>
                <p className="text-gray-600">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}