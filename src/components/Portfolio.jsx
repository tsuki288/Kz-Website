// components/Portfolio.jsx
const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1641573335229-331ef3e6a2b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Custom Apparel",
    category: "T-Shirts & Hoodies"
  },
  {
    image: "https://images.unsplash.com/photo-1636127171118-f33d34e5e77b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Personalized Mugs",
    category: "Drinkware"
  },
  {
    image: "https://images.unsplash.com/photo-1667201698408-0c06e55b3da7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Business Cards",
    category: "Corporate Materials"
  },
  {
    image: "https://images.unsplash.com/photo-1759692071978-8bb602bcfe76?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Event Banners",
    category: "Large Format"
  },
  {
    image: "https://images.unsplash.com/photo-1634814407118-82745e40cd7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Custom Packaging",
    category: "Branding"
  },
  {
    image: "https://images.unsplash.com/photo-1613848531944-a30f04f6679b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    title: "Tote Bags",
    category: "Promotional Items"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">Works (Our Portfolio)</h2>
          <p className="text-gray-600 text-lg">
            Explore some of our recent projects and see the quality craftsmanship 
            we deliver to our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm text-orange-400 mb-2">{item.category}</p>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Want to see more? <a href="#contact" className="text-orange-600 hover:underline font-medium">Contact us</a> to request our full portfolio
          </p>
        </div>
      </div>
    </section>
  );
}