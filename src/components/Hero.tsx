import { motion } from 'motion/react';
import { ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  onOpenCV: () => void;
  profilePic: string;
}

export default function Hero({ onOpenCV, profilePic }: HeroProps) {
  const handleScrollTo = (id: string) => {
    const targetEl = document.getElementById(id);
    if (targetEl) {
      window.scrollTo({
        top: targetEl.offsetTop - 85,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-20 bg-[#050505] overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div 
        className="absolute inset-0 pointer-events-none select-none opacity-40" 
        style={{
          background: 'radial-gradient(circle at 70% 30%, #1f1406 0%, transparent 60%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Headline & Bio */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Status Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 text-xs font-mono font-medium text-space-gold mb-3"
          >
            <span>BSc. Computer Science '25</span>
            <span aria-hidden="true">·</span>
            <span>Arsi University</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400">Available for Opportunities</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-tight"
          >
            Raji Kumsa
          </motion.h1>

          {/* Immediate 1-line headline summary */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mt-4 p-3.5 bg-white/5 border border-white/10 rounded-xl max-w-2xl text-left"
          >
            <p className="text-white/90 text-sm sm:text-base font-medium leading-relaxed font-sans">
              Backend &amp; Android developer &mdash; C#/ASP.NET Core, Java/Firebase. Trilingual (English, Amharic, Afan Oromo). Open to junior roles in Addis Ababa or remote.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-wrap gap-3.5 mt-6 items-center"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="px-6 py-3 bg-space-gold hover:bg-space-gold/90 text-black text-sm font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <span>View Projects</span>
              <ArrowUpRight size={16} />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-sm font-medium rounded-xl transition cursor-pointer"
            >
              Get in Touch
            </button>

            <button
              onClick={onOpenCV}
              className="px-4 py-3 text-space-gold hover:text-white text-sm font-medium transition cursor-pointer"
            >
              Curriculum Vitae &rarr;
            </button>
          </motion.div>

          {/* Direct Clickable Contacts Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-white/10 text-xs font-sans text-white/70"
          >
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1.5 hover:text-space-gold transition"
            >
              <Mail size={14} className="text-space-gold" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <span aria-hidden="true" className="text-white/20 hidden sm:inline">·</span>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="inline-flex items-center gap-1.5 hover:text-space-gold transition"
            >
              <Phone size={14} className="text-space-gold" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <span aria-hidden="true" className="text-white/20 hidden sm:inline">·</span>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-space-gold transition"
            >
              <Linkedin size={14} className="text-space-gold" />
              <span>LinkedIn</span>
            </a>
            <span aria-hidden="true" className="text-white/20 hidden sm:inline">·</span>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-space-gold transition"
            >
              <Github size={14} className="text-space-gold" />
              <span>GitHub</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Single Clean Framed Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="w-full max-w-[360px] bg-[#0a0a0a] rounded-2xl border border-white/10 p-3 shadow-2xl relative">
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#050505]">
              <img
                src={profilePic}
                alt="Raji Kumsa"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-left">
                <p className="text-white font-semibold text-sm">Raji Kumsa</p>
                <p className="text-space-gold text-xs font-mono">BSc. Computer Science · Arsi University</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
