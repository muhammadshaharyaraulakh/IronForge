import {
  DumbbellIcon,
  InstagramIcon,
  FacebookIcon,
  YoutubeIcon,
  TiktokIcon,
} from './icons';

const explore = ['About', 'Classes', 'Trainers', 'Pricing', 'Schedule', 'Blog', 'Careers'];
const services = [
  'Personal Training',
  'Group Classes',
  'Nutrition Coaching',
  'Corporate Wellness',
  'Online Programs',
  'Gift Cards',
];

export default function Footer() {
  return (
    <footer className="bg-dark-deeper border-t border-gold/30 pt-20">
      <div className="container-custom grid lg:grid-cols-4 md:grid-cols-2 gap-12 pb-14">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 text-gold">
            <DumbbellIcon className="w-7 h-7" />
            <span className="font-display text-3xl tracking-[0.08em]">IRONFORGE</span>
          </div>
          <p className="mt-3 text-xs uppercase tracking-[0.3em] text-gold/70 font-body">
            Forge your legacy. One rep at a time.
          </p>
          <p className="mt-5 text-white/55 text-sm leading-relaxed font-body max-w-xs">
            Islamabad’s premier elite training facility — built for those who
            refuse to settle.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {[InstagramIcon, FacebookIcon, YoutubeIcon, TiktokIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Social"
                className="w-10 h-10 grid place-items-center border border-gold/30 text-gold hover:bg-gold hover:text-black transition-all hover:scale-110"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <FooterCol heading="Explore" items={explore} />

        {/* Services */}
        <FooterCol heading="Services" items={services} />

        {/* Contact */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.35em] text-gold font-body mb-5">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/65 font-body">
            <li>F-7 Markaz, Islamabad, Pakistan</li>
            <li>+92 (51) 111-IRON-GYM</li>
            <li>train@ironforge.pk</li>
            <li>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-gold hover:text-gold-light"
              >
                WhatsApp: +92 300 IRON GYM
              </a>
            </li>
          </ul>
          <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 border border-gold/40 text-[10px] uppercase tracking-[0.25em] text-gold font-body">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Open 24/7 for members
          </div>
        </div>
      </div>

      <div className="border-t border-gold/15">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/45 font-body">
          <span>© 2025 IronForge Gym. All rights reserved.</span>
          <span>
            Made with <span className="text-gold">💪</span> in Islamabad
          </span>
          <div className="flex items-center gap-5">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold">
              Privacy Policy
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold">
              Terms
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ heading, items }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.35em] text-gold font-body mb-5">
        {heading}
      </h4>
      <ul className="space-y-3 text-sm text-white/65 font-body">
        {items.map((label) => (
          <li key={label}>
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="hover:text-gold transition-colors duration-300"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
