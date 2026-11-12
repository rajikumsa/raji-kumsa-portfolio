import { motion } from 'motion/react';
import { Server, Smartphone, GitPullRequest, GraduationCap, Globe2, FileText, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface AboutProps {
  onOpenCV: () => void;
}

export default function About({ onOpenCV }: AboutProps) {
  return (
    <section id="about" className="py-28 bg-[#07080b] relative border-t border-white/[0.08] text-left overflow-hidden">
      {/* Ambient background glow */}
      <div 
        className="pointer-events-none absolute -top-40 right-1/4 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header with Stagger Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium mb-3">
            <Sparkles size={13} className="text-amber-400" />
            <span>BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mt-2">
            Engineering resilient backend APIs & native mobile experiences
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mt-4 font-sans font-light">
            I am a Computer Science graduate from Arsi University (Class of 2025) specializing in backend systems, database performance, and native mobile engineering. I believe in clean boundaries, automated testing, and software built to last in production.
          </p>
        </motion.div>

        {/* 3 Core Competence Columns with Staggered Hover Sheen */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Backend Systems */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative bg-[#0e1118] p-7 sm:p-8 rounded-2xl border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/40 hover:shadow-amber-500/5"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                <Server size={22} />
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-amber-300 transition-colors">
                Backend Architecture
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-sans">
                Hands-on experience designing high-throughput RESTful APIs and asynchronous services using <strong className="text-white font-medium">C# and ASP.NET Core</strong>. Skilled with SQL Server, Entity Framework Core, database normalization, and query index optimization.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-amber-400/90">
              <span>C# · ASP.NET · SQL Server</span>
              <CheckCircle2 size={14} className="text-amber-400 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>

          {/* Card 2: Native Android & Firebase */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative bg-[#0e1118] p-7 sm:p-8 rounded-2xl border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/40 hover:shadow-amber-500/5"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                <Smartphone size={22} />
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-amber-300 transition-colors">
                Mobile & Localization
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-sans">
                Native Android development in <strong className="text-white font-medium">Java</strong> with Firebase real-time database sync, offline caching, and lifecycle safety. Fluent in multi-language localization supporting English, Amharic, and Afan Oromo.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-amber-400/90">
              <span>Java · Android · Firebase · i18n</span>
              <CheckCircle2 size={14} className="text-amber-400 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>

          {/* Card 3: Engineering Culture */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group relative bg-[#0e1118] p-7 sm:p-8 rounded-2xl border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/40 hover:shadow-amber-500/5"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                <GitPullRequest size={22} />
              </div>
              <h3 className="text-xl font-bold font-heading text-white mb-3 group-hover:text-amber-300 transition-colors">
                Quality & Practices
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-sans">
                Disciplined in Git version control, test-driven workflows with <strong className="text-white font-medium">xUnit and Moq</strong>, Agile sprint cadences, and clear API documentation. Experienced collaborating across cross-functional teams.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-amber-400/90">
              <span>xUnit · Docker · Agile · Git</span>
              <CheckCircle2 size={14} className="text-amber-400 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        </div>

        {/* Education & CV Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 bg-gradient-to-r from-[#0e1118] to-[#121620] border border-white/[0.08] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <GraduationCap size={24} />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white font-semibold text-base sm:text-lg">
                  {PERSONAL_INFO.education.degree}
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-mono font-medium border border-amber-500/20">
                  {PERSONAL_INFO.education.period}
                </span>
              </div>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                {PERSONAL_INFO.education.institution} · Class of 2025
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCV}
            className="relative group inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold rounded-xl transition duration-200 cursor-pointer shadow-lg shadow-amber-500/20 shrink-0 overflow-hidden"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <FileText size={15} />
            <span>Open Complete CV</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
