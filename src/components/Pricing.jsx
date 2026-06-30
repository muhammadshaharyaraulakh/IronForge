import { useState } from 'react';
import { pricingPlans } from '../data/pricing';
import Reveal from './Reveal';
import { CheckIcon, XIcon, ShieldIcon, ArrowRight } from './icons';

const billingTabs = [
  { id: 'monthly', label: 'Monthly' },
  { id: 'quarterly', label: 'Quarterly' },
  { id: 'annual', label: 'Annual' },
];

export default function Pricing() {
  const [billing, setBilling] = useState('monthly');

  return (
    <section id="pricing" className="relative bg-dark-bg py-24 md:py-32 overflow-hidden">
      <div className="container-custom">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="section-label justify-center">Invest in Yourself</span>
            <h2 className="section-heading mt-5">
              Choose your{' '}
              <span className="gold-gradient-text">commitment.</span>
            </h2>
            <p className="mt-5 text-white/60 font-body text-lg">
              Simple, transparent pricing. Cancel anytime. Free 7-day trial on every plan.
            </p>
          </div>
        </Reveal>

        {/* Toggle */}
        <Reveal>
          <div className="flex justify-center mb-14">
            <div className="inline-flex bg-dark-card border border-gold/20 p-1 rounded-full">
              {billingTabs.map((tab) => {
                const active = billing === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setBilling(tab.id)}
                    className={`relative px-6 py-2.5 text-xs uppercase tracking-[0.25em] font-body font-bold rounded-full transition-all duration-300 ${
                      active
                        ? 'bg-gold text-black'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {tab.label}
                    {tab.id === 'annual' && (
                      <span >
                        
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 lg:items-stretch">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 100}>
              <div
                className={`relative h-full flex flex-col ${
                  plan.highlight ? 'lg:-translate-y-4 lg:scale-[1.04] z-10' : ''
                }`}
              >
                

                <div
                  className={`relative h-full flex flex-col p-8 ${
                    plan.highlight
                      ? 'gold-border-card shadow-gold-glow'
                      : plan.premium
                      ? 'bg-gradient-to-br from-dark-card to-[#0F0F0F] border border-gold/30'
                      : 'bg-dark-card border border-gold/15'
                  }`}
                >
                  {plan.premium && (
                    <span className="absolute inset-0 pointer-events-none diagonal-stripes opacity-100" />
                  )}

                  <div className="relative">
                    <div className="font-display text-3xl text-gold tracking-[0.12em]">
                      {plan.name}
                    </div>
                    <div className="mt-1 text-xs text-white/55 font-body">
                      {plan.tagline}
                    </div>

                    <div className="mt-7 flex items-end gap-2">
                      <span className="text-xs uppercase tracking-[0.2em] text-white/50 font-body pb-2">
                        PKR
                      </span>
                      <span className="font-display text-6xl md:text-7xl text-white leading-none tracking-wider">
                        {plan.prices[billing].toLocaleString()}
                      </span>
                      <span className="text-xs text-white/50 font-body pb-3">
                        / mo
                      </span>
                    </div>
                    <div className="mt-1 text-xs text-white/40 font-body">
                      Billed {billing === 'monthly' ? 'monthly' : billing}
                    </div>

                    <div className="my-7 h-px bg-gold/15" />

                    <ul className="space-y-3.5">
                      {plan.features.map((f) => (
                        <li
                          key={f.text}
                          className={`flex items-start gap-3 text-sm font-body ${
                            f.included ? 'text-white/85' : 'text-white/30'
                          }`}
                        >
                          <span
                            className={`mt-0.5 grid place-items-center w-5 h-5 rounded-full shrink-0 ${
                              f.included
                                ? 'bg-gold/15 text-gold'
                                : 'bg-white/5 text-white/30'
                            }`}
                          >
                            {f.included ? (
                              <CheckIcon className="w-3 h-3" />
                            ) : (
                              <XIcon className="w-3 h-3" />
                            )}
                          </span>
                          <span className={f.included ? '' : 'line-through'}>
                            {f.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      {plan.highlight ? (
                        <a
                          href="#cta"
                          className="btn-primary w-full"
                        >
                          {plan.cta}
                        </a>
                      ) : (
                        <a href="#cta" className="btn-secondary w-full group">
                          {plan.cta}
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex items-center justify-center gap-3 text-white/55 text-sm font-body">
            <ShieldIcon className="w-4 h-4 text-gold" />
            <span>
              All plans include a <span className="text-gold">FREE 7-day trial</span>.
              No contracts. Cancel anytime.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
