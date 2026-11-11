import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#0a0a0a] relative border-t border-white/10 text-left">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-space-gold font-semibold">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight mt-2">
            Work Experience
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mt-4 font-sans">
            Practical development background including enterprise backend engineering at Ethiopian Airlines, digital systems at Digaf Microfinance, and university capstone leadership.
          </p>
        </div>

        {/* Experience List */}
        <div className="max-w-4xl space-y-6">
          {EXPERIENCE_DATA.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#050505] p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-white/60">
                    <span className="text-space-gold font-semibold">{exp.company}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-white/40" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-white/50 bg-white/5 px-3 py-1.5 rounded-lg self-start sm:self-auto border border-white/5">
                  <Calendar size={12} className="text-space-gold" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2 mb-5 text-sm text-white/70 font-sans">
                {exp.description.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-space-gold font-bold mt-1 text-xs">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Skills Applied */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {exp.skillsApplied.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-white/5 text-white/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
