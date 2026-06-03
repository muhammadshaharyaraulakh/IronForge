import { trainers } from '../data/trainers';
import Reveal from './Reveal';
import { InstagramIcon, TwitterIcon } from './icons';

export default function Trainers() {
  return (
    <section id="trainers" className="relative bg-dark-bg py-24 md:py-32 overflow-hidden">
      <div className="container-custom">
        <Reveal>
          <div className="mb-14 max-w-3xl">
            <span className="section-label">Meet The Coaches</span>
            <h2 className="section-heading mt-5 heading-accent">
              The experts behind
              <br />
              <span className="gold-gradient-text">your results.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((t, i) => (
            <Reveal key={t.id} delay={i * 100}>
              <article className="group bg-dark-card overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-gold-glow-lg">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute top-5 right-5 flex flex-col gap-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      aria-label="Instagram"
                      className="w-9 h-9 grid place-items-center bg-dark-bg/85 border border-gold/40 text-gold hover:bg-gold hover:text-black transition-colors"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      aria-label="Twitter"
                      className="w-9 h-9 grid place-items-center bg-dark-bg/85 border border-gold/40 text-gold hover:bg-gold hover:text-black transition-colors"
                    >
                      <TwitterIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="border-t-[3px] border-gold p-7">
                  <h3 className="font-display text-2xl text-white tracking-[0.06em]">
                    {t.name}
                  </h3>
                  <div className="text-[12px] uppercase tracking-[0.25em] text-gold mt-2 font-body">
                    {t.specialty}
                  </div>
                  <div className="text-[12px] text-white/45 mt-1 font-body">
                    {t.certifications}
                  </div>
                  <p className="mt-4 text-white/65 leading-relaxed text-sm font-body">
                    {t.bio}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
