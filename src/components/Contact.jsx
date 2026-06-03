import { useState } from 'react';
import Reveal from './Reveal';
import {
  PinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  WhatsappIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  TiktokIcon,
  ArrowRight,
} from './icons';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Membership',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Required';
    if (!form.email.trim()) next.email = 'Required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Invalid email';
    if (!form.message.trim()) next.message = 'Required';
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({
        name: '',
        email: '',
        phone: '',
        interest: 'Membership',
        message: '',
      });
    }
  };

  return (
    <section id="contact" className="relative bg-dark-bg py-24 md:py-32 overflow-hidden">
      <div className="container-custom">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="section-label justify-center">Get In Touch</span>
            <h2 className="section-heading mt-5">
              Find us. <span className="gold-gradient-text">Join us.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT — Contact Info */}
          <Reveal>
            <div className="space-y-8">
              <ContactRow
                icon={<PinIcon className="w-5 h-5" />}
                title="Address"
                lines={['IronForge Gym, F-7 Markaz', 'Islamabad, Pakistan']}
              />
              <ContactRow
                icon={<PhoneIcon className="w-5 h-5" />}
                title="Phone"
                lines={['+92 (51) 111-IRON-GYM']}
              />
              <ContactRow
                icon={<MailIcon className="w-5 h-5" />}
                title="Email"
                lines={['train@ironforge.pk']}
              />
              <ContactRow
                icon={<ClockIcon className="w-5 h-5" />}
                title="Hours"
                lines={[
                  'Mon – Fri: 5:00 AM – 12:00 AM',
                  'Sat – Sun: 6:00 AM – 10:00 PM',
                  'Members: 24/7 Access',
                ]}
              />

              <div>
                <h4 className="text-xs uppercase tracking-[0.3em] text-gold font-body mb-4">
                  Follow Us
                </h4>
                <div className="flex items-center gap-4">
                  {[InstagramIcon, FacebookIcon, YoutubeIcon, TiktokIcon].map(
                    (Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="w-11 h-11 grid place-items-center border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all duration-300 hover:scale-110"
                        aria-label="Social link"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT — Form */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-dark-card border border-gold/25 p-8 md:p-10"
            >
              <h3 className="font-display text-3xl text-white tracking-[0.06em] mb-2">
                Get in touch
              </h3>
              <p className="text-sm text-white/55 font-body mb-8">
                We respond within 24 hours.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field
                  label="Full Name *"
                  error={errors.name}
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your name"
                />
                <Field
                  label="Email Address *"
                  type="email"
                  error={errors.email}
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@example.com"
                />
                <Field
                  label="Phone Number"
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="+92 ..."
                />
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] uppercase tracking-[0.25em] text-white/55 font-body">
                    I'm interested in
                  </label>
                  <select
                    value={form.interest}
                    onChange={update('interest')}
                    className="input-dark"
                  >
                    <option>Membership</option>
                    <option>Personal Training</option>
                    <option>Corporate Plans</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <label className="text-[11px] uppercase tracking-[0.25em] text-white/55 font-body">
                  Message *
                </label>
                <textarea
                  rows="4"
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell us about your goals..."
                  className="input-dark resize-none"
                />
                {errors.message && (
                  <span className="text-xs text-red-400 font-body">
                    {errors.message}
                  </span>
                )}
              </div>

              <button type="submit" className="btn-primary w-full mt-7 group">
                Send Message
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {submitted && (
                <p className="mt-4 text-sm text-gold text-center font-body">
                  ✓ Thanks! We'll be in touch within 24 hours.
                </p>
              )}

              <div className="mt-6 pt-6 border-t border-gold/15 flex items-center gap-3 text-sm font-body text-white/65">
                <WhatsappIcon className="w-5 h-5 text-gold" />
                <span>
                  Or WhatsApp us directly:{' '}
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-gold hover:text-gold-light"
                  >
                    +92 300 IRON GYM
                  </a>
                </span>
              </div>
            </form>
          </Reveal>
        </div>

        {/* Map placeholder */}
        <Reveal>
          <div className="mt-16 relative h-72 md:h-96 overflow-hidden border border-gold/20">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at center, #1A1A1A 0%, #0A0A0A 100%)',
              }}
            />
            <svg
              className="absolute inset-0 w-full h-full opacity-30"
              viewBox="0 0 800 400"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#C8A84B"
                    strokeWidth="0.5"
                    opacity="0.5"
                  />
                </pattern>
              </defs>
              <rect width="800" height="400" fill="url(#grid)" />
              <path
                d="M0,200 Q200,150 400,220 T800,180"
                stroke="#C8A84B"
                strokeWidth="2"
                fill="none"
                opacity="0.7"
              />
              <path
                d="M0,260 Q300,220 500,290 T800,250"
                stroke="#C8A84B"
                strokeWidth="1"
                fill="none"
                opacity="0.4"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <div className="relative mb-3">
                <div className="absolute inset-0 bg-gold/30 rounded-full animate-ping" />
                <div className="relative w-12 h-12 grid place-items-center bg-gold text-black rounded-full">
                  <PinIcon className="w-6 h-6" />
                </div>
              </div>
              <div className="font-display text-2xl text-gold tracking-[0.15em]">
                IRONFORGE GYM
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/55 font-body mt-1">
                F-7 Markaz · Islamabad · Pakistan
              </div>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="mt-4 text-xs text-gold uppercase tracking-[0.3em] font-body border-b border-gold/40 pb-1 hover:border-gold transition-colors"
              >
                Get Directions →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({ icon, title, lines }) {
  return (
    <div className="flex gap-5">
      <div className="w-12 h-12 shrink-0 grid place-items-center border border-gold/30 text-gold">
        {icon}
      </div>
      <div>
        <h4 className="text-xs uppercase tracking-[0.3em] text-gold font-body mb-2">
          {title}
        </h4>
        {lines.map((l) => (
          <div key={l} className="text-white/80 font-body text-[15px]">
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

function Field({ label, type = 'text', value, onChange, placeholder, error }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] uppercase tracking-[0.25em] text-white/55 font-body">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="input-dark"
      />
      {error && <span className="text-xs text-red-400 font-body">{error}</span>}
    </div>
  );
}
