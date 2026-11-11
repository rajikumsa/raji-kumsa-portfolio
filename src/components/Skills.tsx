import { CodeXml, Database, Smartphone, Flame, Globe, GitBranch, Users, Lightbulb, Languages, Network } from 'lucide-react';

const SKILL_GROUPS = [
  {
    title: 'Backend & Systems Architecture',
    description: 'Developing scalable web services, API endpoints, and relational database structures.',
    skills: [
      {
        name: 'C# / ASP.NET Core',
        icon: CodeXml,
        detail: 'Object-oriented programming, Web APIs, controller routing, and Entity Framework Core.',
      },
      {
        name: 'RESTful API Design',
        icon: Network,
        detail: 'HTTP verbs, request/response models, input validation, and asynchronous processing.',
      },
      {
        name: 'SQL & Database Design',
        icon: Database,
        detail: 'Relational schema design, normalization, queries, stored procedures, and migrations.',
      },
    ],
  },
  {
    title: 'Mobile & Frontend',
    description: 'Crafting responsive client interfaces and native Android applications.',
    skills: [
      {
        name: 'Java (Android SDK)',
        icon: Smartphone,
        detail: 'Native Android architecture, activity lifecycles, XML layouts, and background threads.',
      },
      {
        name: 'Firebase Integration',
        icon: Flame,
        detail: 'Firebase Authentication, Real-time Database synchronization, and offline persistence.',
      },
      {
        name: 'Web Technologies (HTML/CSS/JS)',
        icon: Globe,
        detail: 'Semantic markup, modern responsive layouts, Flexbox/Grid, and client DOM scripting.',
      },
    ],
  },
  {
    title: 'Workflows & Collaboration',
    description: 'Agile team dynamics, version control, and cross-cultural communication.',
    skills: [
      {
        name: 'Git & Version Control',
        icon: GitBranch,
        detail: 'Branching models, merge conflict resolution, pull request reviews, and GitHub tracking.',
      },
      {
        name: 'Multilingual Localization',
        icon: Languages,
        detail: 'Fluent in English, Amharic, and Afan Oromo, with experience in localized application strings.',
      },
      {
        name: 'Agile & Problem Solving',
        icon: Users,
        detail: 'Daily standups, sprint retrospectives, systematic root-cause debugging, and teamwork.',
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
            A practical summary of core technical proficiencies, development frameworks, and collaborative practices.
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
