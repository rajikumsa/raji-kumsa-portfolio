import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Code2, Database, Layout, Terminal, X, Check, Eye, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Backend', 'Mobile', 'Web', 'Experiments'];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (selectedCategory === 'All') return true;
    return proj.category === selectedCategory;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Mobile':
        return <Code2 className="text-amber-400" size={18} />;
      case 'Backend':
        return <Database className="text-amber-400" size={18} />;
      case 'Experiments':
        return <Terminal className="text-amber-400" size={18} />;
      default:
        return <Layout className="text-amber-400" size={18} />;
    }
  };

  return (
    <section id="projects" className="py-28 bg-[#07080b] relative border-t border-white/[0.08] text-left overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute top-1/2 left-0 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium mb-3">
              <Sparkles size={13} className="text-amber-400" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mt-1">
              Featured Software Projects
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-sans font-light leading-relaxed">
            Production-grade systems including enterprise C# REST APIs, localized Android applications, and full-stack solutions with verified test suites and live documentation.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/20 font-bold scale-[1.02]'
                  : 'bg-white/[0.03] hover:bg-white/[0.08] text-neutral-300 border border-white/[0.08]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid with Screenshots, Animations, and Direct Action Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj, index) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="group bg-[#0e1118] border border-white/[0.08] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-amber-500/5"
            >
              <div>
                {/* Screenshot / Preview Banner */}
                {proj.imageUrl && (
                  <div className="aspect-[16/9] w-full overflow-hidden bg-black/80 relative border-b border-white/[0.06]">
                    <img
                      src={proj.imageUrl}
                      alt={`${proj.title} preview screenshot`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e1118] via-transparent to-transparent opacity-90" />
                    <span className="absolute top-3 left-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-amber-400 border border-amber-500/20 font-bold">
                      {proj.category}
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-7">
                  {/* Title & Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                      {getCategoryIcon(proj.category)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading text-white group-hover:text-amber-300 transition-colors">
                        {proj.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-300 text-sm leading-relaxed mb-5 font-sans font-light">
                    {proj.description}
                  </p>

                  {/* Key Capabilities */}
                  <div className="space-y-2 mb-6">
                    {proj.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-400 font-sans">
                        <Check size={14} className="text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.03] text-neutral-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Clickable Project Links: [GitHub →] [Live Demo / Docs →] [Details] */}
              <div className="px-6 sm:px-7 pb-6 pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] mt-2 bg-[#0a0d14]">
                <div className="flex items-center gap-2.5">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/[0.06] hover:bg-white text-white hover:text-black text-xs font-semibold rounded-lg transition-all duration-200 border border-white/[0.08]"
                      title="View GitHub Repository"
                    >
                      <Github size={14} />
                      <span>GitHub &rarr;</span>
                    </a>
                  )}

                  {proj.liveDemoUrl && (
                    <a
                      href={proj.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold rounded-lg transition-all duration-200 shadow-md shadow-amber-500/20"
                      title="View Live Demo or Documentation"
                    >
                      <ExternalLink size={13} />
                      <span>{proj.demoLabel || 'Live Demo &rarr;'}</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveProject(proj)}
                  className="text-xs text-neutral-400 hover:text-amber-300 transition flex items-center gap-1.5 cursor-pointer py-1 px-2 rounded hover:bg-white/[0.04]"
                >
                  <Eye size={13} />
                  <span>Architecture</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0e1118] border border-white/15 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 text-left relative shadow-2xl"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
                aria-label="Close Modal"
              >
                <X size={18} />
              </button>

              <span className="text-xs font-mono font-semibold text-amber-400">
                {activeProject.category} Project
              </span>
              <h3 className="text-2xl font-bold font-heading text-white mt-1 mb-4">
                {activeProject.title}
              </h3>

              <div className="space-y-6 text-sm text-neutral-300 font-sans">
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-500 mb-2">Overview</h4>
                  <p className="leading-relaxed font-light">{activeProject.fullDescription}</p>
                </div>

                {activeProject.architecture && (
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-500 mb-2">System Architecture</h4>
                    <p className="leading-relaxed bg-black/40 p-4 rounded-xl border border-white/[0.08] font-mono text-xs text-amber-200/90">
                      {activeProject.architecture}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-500 mb-2">Key Capabilities</h4>
                  <ul className="space-y-2">
                    {activeProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                        <Check size={14} className="text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-500 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((t) => (
                      <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Links in Modal */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white text-white hover:text-black font-semibold text-xs rounded-lg transition"
                    >
                      <Github size={15} />
                      <span>GitHub Repo</span>
                    </a>
                  )}

                  {activeProject.liveDemoUrl && (
                    <a
                      href={activeProject.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 text-black font-bold text-xs rounded-lg hover:bg-amber-300 transition shadow-lg shadow-amber-500/20"
                    >
                      <ExternalLink size={15} />
                      <span>{activeProject.demoLabel || 'Live Demo'}</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 text-xs text-neutral-400 hover:text-white transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
