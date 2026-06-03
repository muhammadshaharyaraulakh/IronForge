import Reveal from './Reveal';

const facilityImg =
  'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=1200&q=85';

const facilities = [
  {
    num: '01',
    title: 'FREE WEIGHTS FLOOR',
    desc: '8,000 sq ft of Olympic barbells, dumbbells up to 150lbs, and specialty bars including hex, safety squat, and cambered.',
  },
  {
    num: '02',
    title: 'CARDIO DECK',
    desc: '60+ machines including Assault bikes, ski ergs, Concept2 rowers, and incline treadmills — all with personal screens.',
  },
  {
    num: '03',
    title: 'FUNCTIONAL TRAINING ZONE',
    desc: 'Turf lanes, sleds, battle ropes, kettlebells, TRX, pull-up rigs, and plyo boxes for sport-specific conditioning.',
  },
  {
    num: '04',
    title: 'RECOVERY CENTRE',
    desc: 'Ice bath pools, infrared sauna, massage chairs, foam rolling area, and guided stretching stations to keep you training pain-free.',
  },
  {
    num: '05',
    title: 'NUTRITION BAR',
    desc: 'In-house protein shakes, meal prep boxes, supplements, and healthy snacks from our registered sports nutritionist.',
  },
  {
    num: '06',
    title: 'PRIVATE COACHING SUITES',
    desc: 'Soundproof 1-on-1 training rooms with mirrored walls, specialty equipment, and full video analysis capability.',
  },
];

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="relative bg-dark-secondary py-24 md:py-32 clip-diagonal-top"
    >
      <div className="container-custom">
        <Reveal>
          <div className="mb-16">
            <span className="section-label">The IronForge Experience</span>
            <h2 className="section-heading mt-5 heading-accent">
              World-class equipment.
              <br />
              <span className="gold-gradient-text">Every detail dialed.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <Reveal>
            <div className="relative w-full aspect-[4/5] overflow-hidden lg:sticky lg:top-28">
              <img
                src={facilityImg}
                alt="IronForge facility"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 border border-gold/30" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white/80">
                <span className="font-display text-2xl tracking-[0.18em] text-gold">
                  IRONFORGE HQ
                </span>
                <span className="text-xs tracking-[0.3em] uppercase font-body">
                  F-7 Markaz · Islamabad
                </span>
              </div>
            </div>
          </Reveal>

          <div className="space-y-1">
            {facilities.map((f, i) => (
              <Reveal key={f.num} delay={i * 70}>
                <div className="group flex gap-6 py-7 border-b border-gold/15 last:border-b-0 transition-all duration-300 hover:bg-dark-card/40 px-2 -mx-2">
                  <span className="font-display text-4xl text-gold leading-none tracking-wider w-16 shrink-0 transition-transform duration-300 group-hover:translate-x-1">
                    {f.num}
                  </span>
                  <div>
                    <h3 className="font-body font-bold text-white text-lg uppercase tracking-[0.12em]">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-white/60 leading-relaxed font-body text-[15px]">
                      {f.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
