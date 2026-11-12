import { motion } from 'motion/react';
import { CodeXml, Database, Smartphone, Flame, Globe, GitBranch, Users, Languages, Network, ShieldCheck, Box, Sparkles } from 'lucide-react';

const SKILL_GROUPS = [
  {
    title: 'Backend & Automated Testing',
    description: 'Developing scalable web services, API endpoints, and verifiable test suites.',
    skills: [
      {
        name: 'C# / ASP.NET Core',
        icon: CodeXml,
        detail: 'Object-oriented architecture, Web APIs, controller routing, dependency injection, and EF Core.',
      },
      {
        name: 'RESTful API & Swagger',
        icon: Network,
        detail: 'HTTP verbs, request/response DTOs, input validation, and OpenAPI Swagger documentation.',
      },
      {
        name: 'Unit Testing (xUnit & Moq)',
        icon: ShieldCheck,
        detail: 'Automated test suites with xUnit, NUnit, and Moq to validate domain logic and mock data layers.',
      },
      {
        name: 'SQL Server & Database Design',
        icon: Database,
        detail: 'Relational schema design, normalization, complex queries, stored procedures, and migrations.',
      },
    ],
  },
  {
    title: 'Mobile & Frontend Development',
    description: 'Crafting responsive client interfaces and native Android applications.',
    skills: [
      {
        name: 'Java (Android SDK)',
        icon: Smartphone,
        detail: 'Native Android architecture, activity lifecycles, XML layouts, and asynchronous background threads.',
      },
      {
        name: 'Firebase Integration',
        icon: Flame,
        detail: 'Firebase Authentication, Real-time Database synchronization, security rules, and offline caching.',
      },
      {
        name: 'Modern Web (React / TS / HTML5)',
        icon: Globe,
        detail: 'Responsive layouts, TypeScript interfaces, Flexbox/Grid, and component-driven architecture.',
      },
    ],
  },
  {
    title: 'DevOps & Professional Practice',
    description: 'Agile team dynamics, containerization, version control, and trilingual communication.',
    skills: [
      {
        name: 'Docker & DevOps CI',
        icon: Box,
        detail: 'Containerizing services with Docker, Postman collections, and GitHub CI deployment workflows.',
      },
      {
        name: 'Git & GitHub Collaboration',
        icon: GitBranch,
        detail: 'Branching models, merge conflict resolution, pull request reviews, and continuous integration.',
      },
      {
        name: 'Trilingual Localization',
        icon: Languages,
        detail: 'Fluent in English, Amharic, and Afan Oromo, with practical experience in i18n application strings.',
      },
      {
        name: 'Agile & Team Problem Solving',
        icon: Users,
        detail: 'Daily standups, sprint retrospectives, root-cause debugging, and cross-functional collaboration.',
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#07080b] relative border-t border-white/[0.08] text-left overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px]"
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
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mt-1">
            Skills & Competencies
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed mt-4 font-sans font-light">
            A comprehensive breakdown of core technical capabilities, testing frameworks, DevOps tooling, and collaborative software practices.
          </p>
        </motion.div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: groupIdx * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-[#0e1118] border border-white/[0.08] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-amber-500/5"
            >
              <div>
                <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {group.title}
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed mb-6 font-sans font-light">
                  {group.description}
                </p>

                <div className="space-y-4">
                  {group.skills.map((skill, sIdx) => {
                    const IconComp = skill.icon;
                    return (
                      <div 
                        key={sIdx} 
                        className="flex gap-3.5 items-start p-2.5 rounded-xl hover:bg-white/[0.03] transition-colors"
                      >
                        <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                          <IconComp size={18} />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">
                            {skill.name}
                          </h4>
                          <p className="text-neutral-400 text-xs mt-1 leading-relaxed font-sans font-light">
                            {skill.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
