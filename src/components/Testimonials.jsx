import { useEffect, useRef, useState } from 'react';
import { testimonials } from '../data/testimonials';
import Reveal from './Reveal';
import { ArrowLeft, ArrowRight, QuoteIcon, StarIcon } from './icons';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (paused) return;
    timeoutRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [index, paused]);

  const goTo = (i) => setIndex((i + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="relative bg-dark-secondary py-28 md:py-36 clip-diagonal-both overflow-hidden"
    >
      <div className="absolute inset-0 diagonal-stripes opacity-100" />
      <div className="container-custom relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-label justify-center">Voices of IronForge</span>
            <h2 className="section-heading mt-5">
              What our{' '}
              <span className="gold-gradient-text">members say.</span>
            </h2>
          </div>
        </Reveal>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Slides */}
          <div className="relative min-h-[420px] md:min-h-[360px]">
            {testimonials.map((t, i) => (
              <article
                key={t.id}
                aria-hidden={i !== index}
                className={`absolute inset-0 flex flex-col items-center text-center transition-all duration-700 ${
                  i === index
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-6 pointer-events-none'
                }`}
              >
                <QuoteIcon className="w-24 h-24 md:w-32 md:h-32 text-gold/15 mb-2" />

                <p className="font-body italic text-lg md:text-xl text-white/90 leading-[1.7] max-w-3xl px-4">
                  “{t.quote}”
                </p>

                <div className="mt-8 flex items-center gap-1 text-gold">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <StarIcon key={k} className="w-4 h-4" />
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold/60"
                  />
                  <div className="text-left">
                    <div className="font-display text-xl text-gold tracking-[0.15em]">
                      {t.name}
                    </div>
                    <div className="text-xs text-white/55 font-body mt-0.5">
                      {t.detail}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Arrows */}
          <button
            aria-label="Previous testimonial"
            onClick={() => goTo(index - 1)}
            className="hidden md:grid absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 place-items-center border border-gold/40 text-gold hover:bg-gold hover:text-black transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            aria-label="Next testimonial"
            onClick={() => goTo(index + 1)}
            className="hidden md:grid absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 place-items-center border border-gold/40 text-gold hover:bg-gold hover:text-black transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  i === index ? 'w-10 bg-gold' : 'w-3 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
