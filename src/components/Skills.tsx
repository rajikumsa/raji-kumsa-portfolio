import { motion } from 'motion/react';
import { Server, Smartphone, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Backend & Testing',
    icon: Server,
    skills: [
      'C# / ASP.NET Core',
      'RESTful APIs & Swagger',
      'SQL Server & EF Core',
      'xUnit & Moq Testing',
      'Relational Schema Design',
      'Asynchronous APIs'
    ]
  },
  {
    title: 'Mobile & Web',
    icon: Smartphone,
    skills: [
      'Java (Android SDK)',
      'Firebase Auth & Realtime DB',
      'Offline SQLite Caching',
      'Multi-Language i18n',
      'React & TypeScript',
      'Tailwind CSS'
    ]
  },
  {
    title: 'DevOps & Collaboration',
    icon: Wrench,
    skills: [
      'Docker Containerization',
      'Git & GitHub Workflows',
      'Postman API Testing',
      'Agile / Scrum Cadence',
      'Trilingual (EN / AM / OM)',
      'Problem-Solving'
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#07080b] relative border-t border-white/[0.08] text-left">
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
            <span>TECH STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Skills &amp; Competencies
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed mt-3 font-sans font-light">
            Core technologies and tools I work with daily to build production software.
          </p>
        </motion.div>

        {/* 3 Clean Category Boxes with Quick Tags */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#0e1118] border border-white/[0.08] rounded-2xl p-6 sm:p-7 hover:border-amber-500/40 transition-colors shadow-lg shadow-black/40"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] text-neutral-200 text-xs font-mono border border-white/[0.06] hover:border-amber-400/40 hover:text-white transition-colors"
                    >
                      <CheckCircle2 size={12} className="text-amber-400 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
