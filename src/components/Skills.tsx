import { CodeXml, Database, Smartphone, Flame, Globe, GitBranch, Users, Languages, Network, ShieldCheck, Box } from 'lucide-react';

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
    <section id="skills" className="py-24 bg-[#050505] relative border-t border-white/10 text-left">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-space-gold font-semibold">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight mt-2">
            Skills & Competencies
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mt-4 font-sans">
            A practical summary of core technical proficiencies, testing frameworks, DevOps tools, and collaborative practices.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, groupIdx) => (
            <div
              key={groupIdx}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  {group.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed mb-6 font-sans">
                  {group.description}
                </p>

                <div className="space-y-4">
                  {group.skills.map((skill, sIdx) => {
                    const IconComp = skill.icon;
                    return (
                      <div key={sIdx} className="flex gap-3.5 items-start">
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-space-gold shrink-0 mt-0.5">
                          <IconComp size={16} />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white">
                            {skill.name}
                          </h4>
                          <p className="text-white/60 text-xs mt-1 leading-relaxed font-sans">
                            {skill.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
