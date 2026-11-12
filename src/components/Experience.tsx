import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#07080b] relative border-t border-white/[0.08] text-left overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute -bottom-40 right-10 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium mb-3">
            <Sparkles size={13} className="text-amber-400" />
            <span>CAREER JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mt-1">
            Work Experience
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed mt-4 font-sans font-light">
            Hands-on software development background spanning enterprise airline backend engineering, financial workflows at Digaf Microfinance, and university capstone leadership.
          </p>
        </motion.div>

        {/* Experience List with Timeline Cards */}
        <div className="max-w-4xl space-y-6">
          {EXPERIENCE_DATA.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              whileHover={{ x: 4, transition: { duration: 0.2 } }}
              className="group relative bg-[#0e1118] p-6 sm:p-8 rounded-2xl border border-white/[0.08] hover:border-amber-500/40 transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-amber-500/5 border-l-4 border-l-transparent hover:border-l-amber-400"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-amber-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-neutral-400">
                    <span className="text-amber-400 font-semibold">{exp.company}</span>
                    <span aria-hidden="true" className="text-white/20">·</span>
                    <span className="flex items-center gap-1 text-neutral-400">
                      <MapPin size={12} className="text-amber-400/70" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-amber-300 bg-amber-500/10 px-3 py-1.5 rounded-lg self-start sm:self-auto border border-amber-500/20">
                  <Calendar size={12} className="text-amber-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2 mb-6 text-sm text-neutral-300 font-sans font-light">
                {exp.description.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold mt-1 text-xs">•</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Applied */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                {exp.skillsApplied.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.04] text-neutral-300 border border-white/[0.06]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
