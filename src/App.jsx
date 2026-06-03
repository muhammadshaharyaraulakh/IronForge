import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Stats from './components/Stats';
import Classes from './components/Classes';
import Facilities from './components/Facilities';
import Trainers from './components/Trainers';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Schedule from './components/Schedule';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-dark-bg text-white selection:bg-gold selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Stats />
        <Classes />
        <Facilities />
        <Trainers />
        <Gallery />
        <Pricing />
        <Testimonials />
        <Schedule />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
