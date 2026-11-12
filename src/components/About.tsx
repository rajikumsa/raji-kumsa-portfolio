import { motion } from 'motion/react';
import { Server, Smartphone, ShieldCheck, GraduationCap, FileText, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface AboutProps {
  onOpenCV: () => void;
}

export default function About({ onOpenCV }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-[#07080b] relative border-t border-white/[0.08] text-left">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium mb-3">
            <Sparkles size={13} />
            <span>BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            About Me
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed mt-3 font-sans font-light">
            Computer Science graduate from Arsi University focused on building reliable C#/ASP.NET Core backend APIs and native Android applications with automated testing.
          </p>
        </motion.div>

        {/* 3 Concise Competence Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Backend */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="bg-[#0e1118] p-6 rounded-2xl border border-white/[0.08] hover:border-amber-500/40 transition-colors shadow-lg shadow-black/40"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <Server size={20} />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">
              Backend Architecture
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed font-sans font-light">
              Designing scalable RESTful APIs with <strong className="text-white font-medium">C#, ASP.NET Core, EF Core, and SQL Server</strong>.
            </p>
          </motion.div>

          {/* Card 2: Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#0e1118] p-6 rounded-2xl border border-white/[0.08] hover:border-amber-500/40 transition-colors shadow-lg shadow-black/40"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <Smartphone size={20} />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">
              Native Android &amp; Firebase
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed font-sans font-light">
              Native <strong className="text-white font-medium">Java</strong> applications with live Firebase cloud sync, offline SQLite, and 3-language localization.
            </p>
          </motion.div>

          {/* Card 3: Quality */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-[#0e1118] p-6 rounded-2xl border border-white/[0.08] hover:border-amber-500/40 transition-colors shadow-lg shadow-black/40"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">
              Testing &amp; Practices
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed font-sans font-light">
              Automated unit testing with <strong className="text-white font-medium">xUnit &amp; Moq</strong>, Docker containerization, Git version control, and Agile delivery.
            </p>
          </motion.div>
        </div>

        {/* Education & CV Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-8 bg-[#0e1118] border border-white/[0.08] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg shadow-black/40"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <GraduationCap size={20} />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-white font-semibold text-sm sm:text-base">
                  {PERSONAL_INFO.education.degree}
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 font-mono border border-amber-500/20">
                  {PERSONAL_INFO.education.period}
                </span>
              </div>
              <p className="text-neutral-400 text-xs mt-0.5">
                {PERSONAL_INFO.education.institution} · Class of 2025
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCV}
            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold rounded-xl transition duration-200 cursor-pointer shadow-md shadow-amber-500/20 shrink-0"
          >
            <FileText size={14} />
            <span>Open Complete CV</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
