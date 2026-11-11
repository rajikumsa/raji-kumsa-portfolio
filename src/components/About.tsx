import { motion } from 'motion/react';
import { Server, Smartphone, GitPullRequest, GraduationCap, Globe2, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface AboutProps {
  onOpenCV: () => void;
}

export default function About({ onOpenCV }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative border-t border-white/10 text-left">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-space-gold font-semibold">
            Background & Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight mt-2">
            About Me
          </h2>
          <p className="text-white/70 text-base leading-relaxed mt-4 font-sans">
            I am a Computer Science graduate from Arsi University (Class of 2025) with a strong foundation in backend systems, database architecture, and native mobile development. I focus on writing clean, well-tested code that bridges the gap between scalable server APIs and intuitive mobile interfaces.
          </p>
        </div>

        {/* 3 Core Competence Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Backend Systems */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#050505] p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-space-gold mb-5">
                <Server size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading text-white mb-2">
                Backend Architecture
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-sans">
                Hands-on experience designing RESTful APIs and microservices using <strong className="text-white/90">C# and ASP.NET Core</strong>. Skilled with SQL Server, Entity Framework Core, database normalization, and asynchronous endpoints.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-space-gold font-mono">
              C# · ASP.NET · SQL Server · REST
            </div>
          </motion.div>

          {/* Card 2: Native Android & Firebase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-[#050505] p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-space-gold mb-5">
                <Smartphone size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading text-white mb-2">
                Mobile & Localization
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-sans">
                Native Android development in <strong className="text-white/90">Java</strong> with Firebase real-time database sync and offline caching. Experienced in multi-language localization supporting English, Amharic, and Afan Oromo.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-space-gold font-mono">
              Java · Android SDK · Firebase · i18n
            </div>
          </motion.div>

          {/* Card 3: Engineering Culture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="bg-[#050505] p-6 sm:p-8 rounded-2xl border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-space-gold mb-5">
                <GitPullRequest size={20} />
              </div>
              <h3 className="text-lg font-bold font-heading text-white mb-2">
                Engineering Practices
              </h3>
              <p className="text-white/60 text-sm leading-relaxed font-sans">
                Disciplined in Git version control, Agile sprint cadences, and comprehensive documentation. Experienced working collaboratively in cross-functional teams to resolve query bottlenecks and deliver features.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-space-gold font-mono">
              Git · Agile · Problem Solving · Teamwork
            </div>
          </motion.div>
        </div>

        {/* Education & CV Bar */}
        <div className="mt-12 bg-[#050505] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-space-gold shrink-0">
              <GraduationCap size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-semibold text-sm sm:text-base">
                  {PERSONAL_INFO.education.degree}
                </span>
                <span className="text-xs text-space-gold font-mono">({PERSONAL_INFO.education.period})</span>
              </div>
              <p className="text-white/50 text-xs sm:text-sm mt-0.5">
                {PERSONAL_INFO.education.institution} · {PERSONAL_INFO.education.graduationStatus}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenCV}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-space-gold text-black text-xs font-semibold rounded-xl transition cursor-pointer shrink-0"
          >
            <FileText size={14} />
            <span>Open Complete CV</span>
          </button>
        </div>
      </div>
    </section>
  );
}
