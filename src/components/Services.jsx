// components/Services.jsx
const services = [
  {
    icon: "👕",
    title: "Custom Apparel",
    description: "T-shirts, hoodies, uniforms, and more with your unique designs printed to perfection."
  },
  {
    icon: "🎁",
    title: "Personalized Gifts",
    description: "Mugs, keychains, photo frames, and special items that make memorable presents."
  },
  {
    icon: "🖨️",
    title: "Document Printing",
    description: "Business cards, flyers, brochures, and all your professional printing needs."
  },
  {
    icon: "🎨",
    title: "Banners & Signage",
    description: "Eye-catching displays for events, promotions, and advertising campaigns."
  },
  {
    icon: "📦",
    title: "Packaging Solutions",
    description: "Custom boxes, labels, and packaging materials that showcase your brand."
  },
  {
    icon: "✨",
    title: "Special Requests",
    description: "Have a unique idea? We love challenges and can create custom solutions for you."
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Our Services</h2>
          <p className="text-gray-600 text-lg">
            From concept to creation, we offer a comprehensive range of printing services 
            tailored to meet your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-t-orange-600 hover:-translate-y-1 p-6"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-blue-950 mb-3">{service.title}</h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}