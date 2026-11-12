import { useState, useEffect } from 'react';
import { Menu, X, FileText, Mail, Phone, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface NavbarProps {
  onOpenCV: () => void;
}

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenCV }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => {
        const el = document.getElementById(item.href.replace('#', ''));
        return {
          hash: item.href,
          top: el ? el.offsetTop - 120 : 0,
          bottom: el ? el.offsetTop + el.offsetHeight - 120 : 0,
        };
      });

      const currentScroll = window.scrollY;
      const currentSection = sections.find(
        (sec) => currentScroll >= sec.top && currentScroll < sec.bottom
      );

      if (currentSection) {
        setActiveHash(currentSection.hash);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    setActiveHash(href);
    const targetEl = document.getElementById(href.replace('#', ''));
    if (targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop - 85,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07080b]/90 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-black/60'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
        {/* Brand Zone */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group whitespace-nowrap shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-black font-bold font-heading text-sm shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
            RK
          </div>
          <span className="font-heading font-bold text-white text-base tracking-tight group-hover:text-amber-300 transition-colors">
            Raji Kumsa
          </span>
        </a>

        {/* Nav Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
          {NAV_ITEMS.map((item) => {
            const isActive = activeHash === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className={`transition-colors whitespace-nowrap hover:text-white ${
                  isActive ? 'text-amber-400 font-semibold' : ''
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right Zone: Quick Contact Icons + View CV Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Quick contact icons */}
          <div className="flex items-center gap-1.5 pr-2 border-r border-white/10">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-1.5 text-white/60 hover:text-space-gold hover:bg-white/5 rounded-md transition"
              title={`Email: ${PERSONAL_INFO.email}`}
            >
              <Mail size={16} />
            </a>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-1.5 text-white/60 hover:text-space-gold hover:bg-white/5 rounded-md transition"
              title={`Call: ${PERSONAL_INFO.phone}`}
            >
              <Phone size={16} />
            </a>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-white/60 hover:text-space-gold hover:bg-white/5 rounded-md transition"
              title="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-1.5 text-white/60 hover:text-space-gold hover:bg-white/5 rounded-md transition"
              title="GitHub Profile"
            >
              <Github size={16} />
            </a>
          </div>

          <button
            onClick={onOpenCV}
            className="flex items-center gap-2 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold rounded-xl transition duration-200 cursor-pointer shadow-md shadow-amber-500/20"
          >
            <FileText size={14} />
            <span>View CV</span>
          </button>
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 text-neutral-300 hover:text-amber-400"
            title="Email"
          >
            <Mail size={17} />
          </a>
          <button
            onClick={onOpenCV}
            className="p-2 text-neutral-300 hover:text-amber-400 rounded-lg transition"
            title="View CV"
          >
            <FileText size={17} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white rounded-lg transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1118] border-b border-white/[0.08] px-6 py-4 flex flex-col gap-2 animate-fadeIn text-left">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
              className="py-2.5 text-sm text-neutral-300 hover:text-amber-300 font-medium transition"
            >
              {item.label}
            </a>
          ))}

          {/* Mobile Direct Contacts */}
          <div className="pt-3 border-t border-white/[0.06] mt-1 flex items-center justify-between text-xs text-neutral-400">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1.5 text-amber-400">
              <Mail size={14} />
              <span>Email</span>
            </a>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center gap-1.5 text-amber-400">
              <Phone size={14} />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-neutral-400">
              <Github size={14} />
              <span>GitHub</span>
            </a>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-amber-400 text-black text-xs font-bold rounded-xl transition shadow-md shadow-amber-500/20"
            >
              <FileText size={14} />
              <span>View Curriculum Vitae (PDF)</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
