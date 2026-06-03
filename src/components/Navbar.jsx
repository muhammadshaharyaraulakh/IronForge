import { useEffect, useState } from 'react';
import { DumbbellIcon, MenuIcon, CloseIcon } from './icons';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Classes', href: '#classes' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
          scrolled
            ? 'bg-dark-bg/95 backdrop-blur-xl border-b border-gold/20 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-gold">
            <DumbbellIcon className="w-7 h-7" />
            <span className="font-display text-[28px] tracking-[0.08em] leading-none">
              IRONFORGE
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link font-body uppercase text-[13px] tracking-[0.2em] text-white/80 hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="hidden md:inline-flex items-center bg-gold text-black font-bold uppercase tracking-[0.18em] text-xs px-6 py-3 rounded-full transition-all duration-300 hover:bg-gold-light hover:scale-105 font-body"
            >
              Join Now
            </a>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="lg:hidden text-gold p-2"
            >
              <MenuIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className={`lg:hidden fixed inset-0 z-[10000] bg-dark-bg/98 backdrop-blur-xl transition-all duration-500 ${
          open
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gold/15">
          <span className="font-display text-gold text-2xl tracking-wider flex items-center gap-2">
            <DumbbellIcon className="w-[60px] h-[60px]" /> IRONFORGE
          </span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="text-gold p-2"
          >
            <CloseIcon />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8 mt-16 px-6">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{
                transitionDelay: open ? `${i * 80 + 150}ms` : '0ms',
                transform: open ? 'translateY(0)' : 'translateY(20px)',
                opacity: open ? 1 : 0,
              }}
              className="font-display text-5xl text-white tracking-[0.05em] hover:text-gold transition-all duration-500"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="btn-primary mt-6"
          >
            Join Now
          </a>
        </nav>
      </div>
    </>
  );
}
