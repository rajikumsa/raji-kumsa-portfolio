import { useState, MouseEvent } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, Linkedin, Mail, Phone, MapPin, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  onOpenCV: () => void;
  profilePic: string;
}

export default function Hero({ onOpenCV, profilePic }: HeroProps) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

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
      onMouseMove={handleMouseMove}
      className="relative min-h-[88vh] flex items-center justify-center pt-28 pb-20 bg-[#07080b] overflow-hidden"
    >
      {/* Interactive Ambient Radial Mesh */}
      <div 
        className="absolute inset-0 pointer-events-none select-none transition-opacity duration-700" 
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}% ${mousePos.y}%, rgba(245, 158, 11, 0.08), transparent 70%), radial-gradient(800px circle at 80% 20%, rgba(245, 158, 11, 0.04), transparent 60%)`
        }}
      />

      {/* Decorative Micro Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Side: Headline & Bio */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Status Kicker with Radar Pulse */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-xs font-mono text-white/80 mb-5 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-white/90">BSc. Computer Science '25</span>
            <span aria-hidden="true" className="text-white/30">·</span>
            <span className="text-amber-400 font-medium">Available for Developer Roles</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.1]"
          >
            Raji Kumsa
          </motion.h1>

          {/* Elevated 1-line headline summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 p-4 bg-gradient-to-r from-white/[0.05] via-white/[0.02] to-transparent border border-white/[0.08] rounded-2xl max-w-2xl text-left backdrop-blur-sm"
          >
            <p className="text-white/90 text-sm sm:text-base font-medium leading-relaxed font-sans">
              Backend &amp; Android developer &mdash; C#/ASP.NET Core, Java/Firebase. Trilingual (English, Amharic, Afan Oromo). Open to junior roles in Addis Ababa or remote.
            </p>
          </motion.div>

          {/* Action Buttons with Shimmer & Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3.5 mt-7 items-center"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="relative group overflow-hidden px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black text-sm font-bold rounded-xl transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-lg shadow-amber-500/20 active:scale-[0.98]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>View Projects</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform pointer-events-none" />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="px-6 py-3.5 bg-[#0e1118] hover:bg-[#151a26] text-white border border-white/[0.12] hover:border-amber-400/40 text-sm font-semibold rounded-xl transition-all duration-200 cursor-pointer shadow-sm active:scale-[0.98]"
            >
              Get in Touch
            </button>

            <button
              onClick={onOpenCV}
              className="px-4 py-3.5 text-amber-400 hover:text-white text-sm font-semibold transition-colors duration-200 cursor-pointer flex items-center gap-1 group"
            >
              <span>Curriculum Vitae</span>
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </button>
          </motion.div>

          {/* Direct Clickable Contacts Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-5 mt-7 pt-6 border-t border-white/[0.08] text-xs font-sans text-white/70"
          >
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors py-1"
            >
              <div className="w-6 h-6 rounded-md bg-white/[0.05] flex items-center justify-center text-amber-400">
                <Mail size={13} />
              </div>
              <span>{PERSONAL_INFO.email}</span>
            </a>
            <span aria-hidden="true" className="text-white/20 hidden sm:inline">·</span>
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors py-1"
            >
              <div className="w-6 h-6 rounded-md bg-white/[0.05] flex items-center justify-center text-amber-400">
                <Phone size={13} />
              </div>
              <span>{PERSONAL_INFO.phone}</span>
            </a>
            <span aria-hidden="true" className="text-white/20 hidden sm:inline">·</span>
            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors py-1"
            >
              <div className="w-6 h-6 rounded-md bg-white/[0.05] flex items-center justify-center text-amber-400">
                <Linkedin size={13} />
              </div>
              <span>LinkedIn</span>
            </a>
            <span aria-hidden="true" className="text-white/20 hidden sm:inline">·</span>
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors py-1"
            >
              <div className="w-6 h-6 rounded-md bg-white/[0.05] flex items-center justify-center text-amber-400">
                <Github size={13} />
              </div>
              <span>GitHub</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side: High-Craft Portrait Frame with Glow Aura */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center"
        >
          <div className="relative group/frame w-full max-w-[360px]">
            {/* Ambient Breathing Amber Glow Behind Image */}
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/25 via-orange-500/15 to-amber-600/25 rounded-3xl blur-2xl opacity-60 group-hover/frame:opacity-90 transition-opacity duration-700 pointer-events-none" />

            <div className="relative bg-[#0d1017] rounded-2xl border border-white/[0.12] p-3 shadow-2xl overflow-hidden backdrop-blur-md">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#07080b]">
                <img
                  src={profilePic}
                  alt="Raji Kumsa"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover/frame:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07080b]/90 via-[#07080b]/20 to-transparent pointer-events-none" />
                
                {/* Floating Micro Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/[0.12] flex items-center gap-1.5 text-[10px] font-mono font-medium text-amber-300">
                  <Terminal size={11} className="text-amber-400" />
                  <span>Software Engineer</span>
                </div>

                {/* Bottom Frame Info */}
                <div className="absolute bottom-3.5 left-4 right-4 text-left">
                  <p className="text-white font-bold text-base font-heading tracking-tight">Raji Kumsa</p>
                  <p className="text-amber-400 text-xs font-mono mt-0.5">BSc. Computer Science · Arsi University</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
