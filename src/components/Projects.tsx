import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Code2, Database, Layout, Terminal, X, Check, Eye } from 'lucide-react';
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
        return <Code2 className="text-space-gold" size={18} />;
      case 'Backend':
        return <Database className="text-space-gold" size={18} />;
      case 'Experiments':
        return <Terminal className="text-space-gold" size={18} />;
      default:
        return <Layout className="text-space-gold" size={18} />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#050505] relative border-t border-white/10 text-left">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-space-gold font-semibold">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight mt-2">
              Featured Software Projects
            </h2>
          </div>
          <p className="text-white/60 text-sm max-w-md font-sans">
            Production-grade systems including enterprise C# REST APIs, localized Android applications, and full-stack web solutions with live source code and documentation.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-space-gold text-black shadow-sm'
                  : 'bg-white/5 hover:bg-white/10 text-white/70 border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with Screenshots and Direct Action Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all group shadow-xl"
            >
              <div>
                {/* Screenshot / Preview Banner */}
                {proj.imageUrl && (
                  <div className="aspect-[16/9] w-full overflow-hidden bg-black/60 relative border-b border-white/5">
                    <img
                      src={proj.imageUrl}
                      alt={`${proj.title} preview screenshot`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 left-3 text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-space-gold border border-white/10 font-bold">
                      {proj.category}
                    </span>
                  </div>
                )}

                <div className="p-6 sm:p-7">
                  {/* Title & Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      {getCategoryIcon(proj.category)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-heading text-white group-hover:text-space-gold transition-colors">
                        {proj.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed mb-5 font-sans">
                    {proj.description}
                  </p>

                  {/* Key Capabilities */}
                  <div className="space-y-2 mb-6">
                    {proj.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/60 font-sans">
                        <Check size={14} className="text-space-gold shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-white/70 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Direct Clickable Project Links: [GitHub →] [Live Demo / Docs →] [Details] */}
              <div className="px-6 sm:px-7 pb-6 pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 mt-2 bg-[#080808]">
                <div className="flex items-center gap-2.5">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/10 hover:bg-white text-white hover:text-black text-xs font-semibold rounded-lg transition"
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
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-space-gold hover:bg-space-gold/90 text-black text-xs font-semibold rounded-lg transition shadow-sm"
                      title="View Live Demo or Documentation"
                    >
                      <ExternalLink size={13} />
                      <span>{proj.demoLabel || 'Live Demo &rarr;'}</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveProject(proj)}
                  className="text-xs text-white/50 hover:text-white transition flex items-center gap-1 cursor-pointer"
                >
                  <Eye size={12} />
                  <span>Architecture</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0e0e11] border border-white/15 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 text-left relative shadow-2xl"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition cursor-pointer"
                aria-label="Close Modal"
              >
                <X size={18} />
              </button>

              <span className="text-xs font-mono font-semibold text-space-gold">
                {activeProject.category} Project
              </span>
              <h3 className="text-2xl font-bold font-heading text-white mt-1 mb-4">
                {activeProject.title}
              </h3>

              <div className="space-y-6 text-sm text-white/70 font-sans">
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-white/40 mb-2">Overview</h4>
                  <p className="leading-relaxed">{activeProject.fullDescription}</p>
                </div>

                {activeProject.architecture && (
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider text-white/40 mb-2">System Architecture</h4>
                    <p className="leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5 font-mono text-xs text-white/80">
                      {activeProject.architecture}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-white/40 mb-2">Key Capabilities</h4>
                  <ul className="space-y-2">
                    {activeProject.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-white/80">
                        <Check size={14} className="text-space-gold shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider text-white/40 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.technologies.map((t) => (
                      <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-white/5 text-space-gold border border-white/10">
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
                      className="inline-flex items-center gap-2 px-4 py-2 bg-space-gold text-black font-semibold text-xs rounded-lg hover:bg-space-gold/90 transition"
                    >
                      <ExternalLink size={15} />
                      <span>{activeProject.demoLabel || 'Live Demo'}</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 text-xs text-white/50 hover:text-white transition cursor-pointer"
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
