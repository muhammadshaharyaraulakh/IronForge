import Reveal from './Reveal';
import { ArrowRight } from './icons';

const items = [
  {
    img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=85',
    name: 'AHMED T.',
    duration: '14 months',
    goal: '+40kg total',
  },
  {
    img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=85',
    name: 'FATIMA M.',
    duration: '11 months',
    goal: '−18kg fat loss',
  },
  {
    img: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=85',
    name: 'KAMRAN H.',
    duration: '8 months',
    goal: 'Body recomp',
  },
  {
    img: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=85',
    name: 'BILAL S.',
    duration: '6 months',
    goal: 'Olympic Lift PRs',
  },
  {
    img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=85',
    name: 'NADIA A.',
    duration: '12 months',
    goal: 'Endurance gain',
  },
  {
    img: 'https://images.unsplash.com/photo-1544033527-b192daee1f5b?w=800&q=85',
    name: 'OMAR R.',
    duration: '9 months',
    goal: 'Combat ready',
  },
  {
    img: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=800&q=85',
    name: 'AYESHA J.',
    duration: '5 months',
    goal: 'First pull-up',
  },
  {
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=85',
    name: 'HAMZA K.',
    duration: '15 months',
    goal: '−24kg lean',
  },
  {
    img: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=800&q=85',
    name: 'TARIQ A.',
    duration: '7 months',
    goal: 'Powerlifting meet',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-dark-bg py-24 md:py-32 overflow-hidden">
      <div className="container-custom">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label justify-center">Transformations</span>
            <h2 className="section-heading mt-5">
              Real members.{' '}
              <span className="gold-gradient-text">Real results.</span>
            </h2>
            <p className="mt-5 text-white/60 font-body text-lg">
              No filters. No tricks. Just consistent work and expert guidance.
            </p>
          </div>
        </Reveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {items.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <figure className="gallery-item relative mb-5 break-inside-avoid overflow-hidden group cursor-pointer">
                <img
                  src={item.img}
                  alt={`${item.name} transformation`}
                  loading="lazy"
                  className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-105 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                <figcaption className="absolute inset-x-0 bottom-0 p-5 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="font-display text-xl text-white tracking-[0.1em]">
                    {item.name}
                  </div>
                  <div className="mt-1 flex items-center gap-3 text-xs text-white/65 font-body">
                    <span>{item.duration}</span>
                    <span className="w-1 h-1 rounded-full bg-gold" />
                    <span className="text-gold">{item.goal} ✓</span>
                  </div>
                </figcaption>

                {/* Animated gold sweep border */}
                <span className="gallery-border pointer-events-none absolute inset-0 border border-transparent" />
                <span className="pointer-events-none absolute inset-0 ring-0 group-hover:ring-1 ring-gold/60 transition-all duration-300" />
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 text-gold uppercase tracking-[0.25em] text-sm font-body hover:text-gold-light transition-colors"
          >
            See all 200+ transformations
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
