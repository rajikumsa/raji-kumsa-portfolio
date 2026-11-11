import { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

interface NavbarProps {
  onOpenCV: () => void;
}

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
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
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
        {/* Brand Zone */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group whitespace-nowrap shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-space-gold flex items-center justify-center text-black font-bold font-heading text-sm shadow-sm group-hover:scale-105 transition-transform">
            RK
          </div>
          <span className="font-heading font-bold text-white text-base tracking-tight group-hover:text-space-gold transition-colors">
            Raji Kumsa
          </span>
        </a>

        {/* Nav Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
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
                  isActive ? 'text-space-gold font-semibold' : ''
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Primary Action Button */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCV}
            className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-space-gold text-black text-xs font-semibold rounded-lg transition-colors cursor-pointer shadow-sm"
          >
            <FileText size={14} />
            <span>View CV</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCV}
            className="p-2 text-white/80 hover:text-space-gold rounded-lg transition"
            title="View CV"
          >
            <FileText size={18} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/80 hover:text-white rounded-lg transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 px-6 py-4 flex flex-col gap-2 animate-fadeIn">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
              className="py-2.5 text-sm text-white/80 hover:text-space-gold font-medium transition"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 mt-1">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCV();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-space-gold text-black text-xs font-bold rounded-lg transition"
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
