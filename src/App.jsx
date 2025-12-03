// App.jsx
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials"; // Add this import
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Home />
      <About />
      <Services />
      <Testimonials /> {/* Add this line */}
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}