import { useEffect, useState } from 'react';
import { PlayIcon, ChevronDown } from './icons';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=85';

// Fallback in case the primary image fails (rare, but keeps hero looking premium)
const FALLBACK_IMAGE =
  'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1920&q=85';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [imgSrc, setImgSrc] = useState(HERO_IMAGE);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex items-center bg-dark-bg isolate"
    >
      {/* Background image (covers the whole section) */}
      <div className="absolute inset-0 z-0">
        {/* CSS-backed image as the bulletproof base layer */}
        <div
          className="absolute inset-0 bg-center bg-cover animate-ken-burns"
          style={{ backgroundImage: `url("${imgSrc}")` }}
          aria-hidden="true"
        />
        {/* Hidden <img> used to detect load failures and switch to fallback */}
        <img
          src={imgSrc}
          alt=""
          aria-hidden="true"
          className="hidden"
          onError={() => {
            if (imgSrc !== FALLBACK_IMAGE) setImgSrc(FALLBACK_IMAGE);
          }}
        />

        {/* Dark cinematic overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.92) 30%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.35) 100%)',
          }}
        />
        {/* Vertical fade at bottom for clean section transition */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-dark-bg" />
        {/* Subtle gold diagonal stripes texture */}
        <div className="absolute inset-0 diagonal-stripes opacity-50" />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Small label */}
          <div
            className={`flex items-center gap-4 mb-8 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="block w-12 h-px bg-gold" />
            <span className="text-gold uppercase tracking-[0.35em] text-xs font-body">
              Premium Fitness Experience
            </span>
          </div>

          {/* Headlines */}
          <h1 className="font-display leading-[0.92] tracking-[0.04em] text-white">
            <span
              className={`block text-6xl md:text-8xl lg:text-[110px] transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Forge Your
            </span>
            <span
              className={`block text-6xl md:text-8xl lg:text-[110px] gold-gradient-text transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              Strongest
            </span>
            <span
              className={`block text-6xl md:text-8xl lg:text-[110px] transition-all duration-700 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              Self.
            </span>
          </h1>

          {/* Subtext */}
          <p
            className={`mt-8 text-base md:text-lg text-white/70 max-w-xl leading-relaxed font-body transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            Join Islamabad’s most elite training facility. State-of-the-art
            equipment, world-class coaches, and a community built to push you
            beyond limits.
          </p>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <a href="#cta" className="btn-primary">
              Start Free Trial
            </a>
            <a href="#about" className="btn-secondary group">
              <span className="w-7 h-7 rounded-full border border-gold flex items-center justify-center transition-colors duration-300 group-hover:border-black">
                <PlayIcon className="w-3 h-3" />
              </span>
              Watch Our Story
            </a>
          </div>

          {/* Stats */}
          <div
            className={`mt-16 flex flex-wrap items-center gap-x-10 gap-y-6 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '1200ms' }}
          >
            {[
              { value: '2,400+', label: 'Members' },
              { value: '15+', label: 'Expert Trainers' },
              { value: '8+', label: 'Years of Excellence' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-10">
                <div>
                  <div className="font-display text-4xl md:text-5xl text-gold leading-none tracking-wider">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-[11px] uppercase tracking-[0.25em] text-white/50 font-body">
                    {stat.label}
                  </div>
                </div>
                {i < 2 && <span className="hidden sm:block w-px h-12 bg-gold/40" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold flex flex-col items-center gap-2 z-10"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-body opacity-70">
          Scroll
        </span>
        <ChevronDown className="w-6 h-6 animate-bounce-slow" />
      </a>
    </section>
  );
}
