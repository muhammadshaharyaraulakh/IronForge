import { useState } from 'react';
import { days, schedule, categoryColors, categoryDots } from '../data/schedule';
import Reveal from './Reveal';

export default function Schedule() {
  const [active, setActive] = useState('MON');
  const list = schedule[active] || [];

  return (
    <section id="schedule" className="relative bg-dark-bg py-24 md:py-32 overflow-hidden">
      <div className="container-custom">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-label justify-center">Plan Your Week</span>
            <h2 className="section-heading mt-5">Weekly schedule.</h2>
            <p className="mt-5 text-white/60 font-body text-lg">
              Choose a day to view classes, trainers, and live availability.
            </p>
          </div>
        </Reveal>

        {/* Day tabs */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {days.map((d) => {
              const isActive = active === d;
              return (
                <button
                  key={d}
                  onClick={() => setActive(d)}
                  className={`min-w-[64px] px-5 py-3 font-body uppercase text-xs tracking-[0.2em] font-bold border transition-all duration-300 ${
                    isActive
                      ? 'bg-gold text-black border-gold'
                      : 'bg-dark-card text-white/60 border-gold/20 hover:text-white hover:border-gold/50'
                  }`}
                >
                  {d}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {list.map((cls, i) => (
            <Reveal key={`${active}-${i}`} delay={i * 60}>
              <div
                className={`group flex items-stretch gap-4 md:gap-6 mb-3 bg-dark-card border border-gold/10 border-l-[4px] ${
                  categoryColors[cls.category]
                } transition-all duration-300 hover:border-gold/40 hover:bg-dark-card/70`}
              >
                {/* Time */}
                <div className="px-5 py-5 md:py-6 flex flex-col items-center justify-center border-r border-gold/15 min-w-[90px] md:min-w-[110px]">
                  <span className="font-display text-2xl md:text-3xl text-gold tracking-wider leading-none">
                    {cls.time}
                  </span>
                  <span className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/40 font-body">
                    {cls.duration}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 py-4 md:py-5 pr-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        categoryDots[cls.category]
                      }`}
                    />
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/45 font-body">
                      {cls.category}
                    </span>
                  </div>
                  <h3 className="font-display text-lg md:text-xl text-white tracking-[0.05em] leading-tight">
                    {cls.name}
                  </h3>
                  <div className="mt-1 text-xs text-white/55 font-body">
                    with <span className="text-white/80">{cls.trainer}</span>
                  </div>
                </div>

                {/* CTA / Spots */}
                <div className="flex items-center pr-4 md:pr-6">
                  {cls.spots === 0 ? (
                    <span className="px-4 py-2 text-[10px] uppercase tracking-[0.25em] font-bold bg-red-500/15 text-red-400 border border-red-500/30 font-body">
                      Full
                    </span>
                  ) : (
                    <div className="flex items-center gap-3">
                      <span className="hidden md:inline text-[11px] uppercase tracking-[0.2em] text-gold/80 font-body">
                        {cls.spots} spots left
                      </span>
                      <button className="px-4 py-2 text-[11px] uppercase tracking-[0.25em] font-bold border border-gold text-gold hover:bg-gold hover:text-black transition-colors duration-300 font-body">
                        Book
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Legend */}
        <Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/50 font-body">
            {Object.keys(categoryDots).map((cat) => (
              <div key={cat} className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${categoryDots[cat]}`} />
                <span className="uppercase tracking-[0.2em]">{cat}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
