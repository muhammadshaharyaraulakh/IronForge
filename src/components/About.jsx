import Reveal from './Reveal';
import { ArrowRight } from './icons';

const img1 = 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1200&q=85';
const img2 = 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&q=85';

const values = [
  { icon: '🏋️', label: 'Olympic Equipment' },
  { icon: '🧬', label: 'Science-Based Training' },
  { icon: '🌙', label: 'Open 24/7' },
  { icon: '🥗', label: 'In-House Nutrition Bar' },
];

export default function About() {
  return (
    <section id="about" className="relative bg-dark-bg py-24 md:py-32 overflow-hidden">
      <div className="container-custom grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* LEFT: Image stack */}
        <Reveal>
          <div className="relative">
            <div className="relative w-full aspect-[4/5] overflow-hidden">
              <img
                src={img1}
                alt="IronForge gym floor"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute top-6 left-6 px-4 py-2 bg-dark-bg/85 border border-gold backdrop-blur">
                <span className="font-display text-gold tracking-[0.18em] text-lg">
                  EST. 2016
                </span>
              </div>
            </div>

            <div className="hidden md:block absolute -bottom-10 -right-8 w-2/3 aspect-[4/3] border-[3px] border-gold overflow-hidden shadow-2xl">
              <img
                src={img2}
                alt="IronForge equipment"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </div>
        </Reveal>

        {/* RIGHT: Content */}
        <Reveal delay={120}>
          <div className="max-w-xl">
            <span className="section-label">About IronForge</span>
            <h2 className="section-heading mt-6 heading-accent">
              
              <span className="gold-gradient-text">We build champions.</span>
            </h2>
            <div className="mt-8 space-y-5 text-white/70 leading-[1.85] text-[17px] font-body">
              <p>
                Founded in Islamabad in 2016, IronForge was born from a simple
                belief: that everyone deserves access to elite-level fitness.
                We’ve grown from a 2,000 sq ft warehouse into Islamabad’s most
                respected training facility — not by accident, but by obsessing
                over every detail of your experience.
              </p>
              <p>
                From our Olympic-grade free weights to our recovery zone and
                nutrition bar, every square foot of IronForge is designed with
                one purpose: to help you become the strongest version of
                yourself.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="bg-dark-card border-t-2 border-gold border-x border-b border-x-gold/15 border-b-gold/15 px-5 py-5 flex items-center gap-3 transition-all duration-300 hover:bg-dark-card/70 hover:border-x-gold/50 hover:border-b-gold/50"
                >
                  <span className="text-2xl">{v.icon}</span>
                  <span className="font-body text-white/90 text-sm font-medium">
                    {v.label}
                  </span>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-secondary mt-10 group">
              Learn Our Story
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
