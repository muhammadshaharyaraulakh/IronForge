import { useMemo, useState } from 'react';
import { classes, classCategories } from '../data/classes';
import Reveal from './Reveal';
import { ArrowRight } from './icons';

const difficultyColor = {
  BEGINNER: 'bg-emerald-500/90 text-black',
  INTERMEDIATE: 'bg-gold text-black',
  ADVANCED: 'bg-red-500/90 text-white',
};

export default function Classes() {
  const [active, setActive] = useState('ALL');

  const filtered = useMemo(() => {
    if (active === 'ALL') return classes;
    return classes.filter((c) => c.category === active);
  }, [active]);

  return (
    <section id="classes" className="relative bg-dark-bg py-24 md:py-32 overflow-hidden">
      <div className="container-custom">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="section-label">Train Like Never Before</span>
              <h2 className="section-heading mt-5 heading-accent">Our Classes</h2>
              <p className="mt-4 text-white/60 text-lg font-body max-w-lg">
                Built for every goal. Designed for every level.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Filter tabs */}
        <Reveal>
          <div className="flex flex-wrap gap-2 md:gap-6 mb-12 border-b border-gold/15 pb-1">
            {classCategories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`relative font-body uppercase tracking-[0.2em] text-xs md:text-sm py-3 px-2 transition-colors duration-300 ${
                    isActive ? 'text-gold' : 'text-white/55 hover:text-white'
                  }`}
                >
                  {cat}
                  <span
                    className={`absolute left-0 right-0 -bottom-[1px] h-[2px] bg-gold origin-left transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c, i) => (
            <Reveal key={c.id} delay={i * 80}>
              <article className="group relative h-[460px] overflow-hidden cursor-pointer">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 brightness-[0.65] group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />

                {/* Difficulty badge */}
                <span
                  className={`absolute top-5 right-5 px-3 py-1 text-[10px] font-bold tracking-[0.2em] font-body ${
                    difficultyColor[c.difficulty]
                  }`}
                >
                  {c.difficulty}
                </span>

                {/* Bottom content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="text-[11px] uppercase tracking-[0.3em] text-gold font-body mb-2">
                    {c.category}
                  </div>
                  <h3 className="font-display text-3xl text-white tracking-wider leading-tight">
                    {c.name}
                  </h3>
                  <div className="mt-2 text-[13px] text-white/55 font-body">
                    {c.duration} · {c.frequency}
                  </div>
                  <p className="mt-3 text-sm text-white/70 font-body leading-relaxed line-clamp-2">
                    {c.description}
                  </p>

                  <div className="mt-4 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 overflow-hidden transition-all duration-500">
                    <span className="inline-flex items-center gap-2 text-gold uppercase text-xs tracking-[0.25em] font-body">
                      Book Class
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Bottom gold border slide-up */}
                <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
