import Reveal from './Reveal';

const bg = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85';

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden clip-diagonal-top">
      <div className="absolute inset-0 -z-10">
        <img
          src={bg}
          alt="IronForge gym"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(200,168,75,0.85) 0%, rgba(10,10,10,0.92) 60%)',
          }}
        />
      </div>

      <div className="container-custom py-28 md:py-40 text-center relative">
        <Reveal>
          <span className="inline-block px-4 py-1.5 border border-white/40 text-white/85 uppercase tracking-[0.3em] text-[11px] font-body mb-8">
            Limited Time Offer
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-display text-5xl md:text-7xl lg:text-[90px] text-white tracking-[0.04em] leading-[0.95] max-w-4xl mx-auto">
            Your first week
            <br />
            <span className="gold-gradient-text">is on us.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 text-white/80 max-w-xl mx-auto font-body text-lg">
            No credit card. No commitment. Just 7 days to experience the
            IronForge difference.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10">
            <a href="#contact" className="btn-primary text-base">
              Claim Your Free Trial
            </a>
          </div>
        </Reveal>
        <Reveal delay={400}>
          <p className="mt-6 text-xs text-white/50 tracking-[0.2em] uppercase font-body">
            Limited to new members · Offer valid through June 2025
          </p>
        </Reveal>
      </div>
    </section>
  );
}
