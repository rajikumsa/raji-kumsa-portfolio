import { motion } from 'motion/react';
import { X, Mail, Phone, MapPin, Printer, Copy, Check, Download, Github } from 'lucide-react';
import { useState } from 'react';
import { PERSONAL_INFO, PROJECTS_DATA, EXPERIENCE_DATA, SKILLS_DATA } from '../data';
interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  profilePic: string;
}

export default function CVModal({ isOpen, onClose, profilePic }: CVModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        className="bg-[#050505] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative border border-white/10"
      >
        {/* Header toolbar */}
        <div className="bg-black text-white px-6 py-4 flex items-center justify-between pointer-events-auto border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-3" />
            <span className="text-xs font-mono text-white/40">RAJI_KUMSA_CV.pdf</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-1.5 px-3 py-1 bg-white/5 hover:bg-white/10 text-xs font-medium rounded-md transition text-slate-300 hover:text-white cursor-pointer"
              title="Copy Email address"
            >
              {copied ? <Check size={14} className="text-space-gold" /> : <Copy size={14} />}
              <span>{copied ? 'Copied Email' : 'Copy Email'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1 bg-white/5 hover:bg-white/10 text-xs font-medium rounded-md transition text-slate-300 hover:text-white cursor-pointer"
              title="Print Curriculum Vitae"
            >
              <Printer size={14} />
              <span>Print CV</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-white/5 rounded-md transition text-white/40 hover:text-white cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document */}
        <div className="flex-1 overflow-y-auto p-4 md:p-12 bg-space-bg">
          <div className="bg-[#0a0a0a] shadow-2xl border border-white/10 rounded-lg p-6 sm:p-8 md:p-12 max-w-[800px] mx-auto text-white font-sans print:shadow-none print:border-none print:p-0">
            {/* CV Header */}
            <div className="border-b border-white/5 pb-8 text-center sm:text-left sm:flex sm:justify-between sm:items-start gap-5">
              <div className="flex flex-col sm:flex-row items-center gap-5">
                {/* CV Avatar Rounded */}
                <div className="relative group shrink-0">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-space-gold to-amber-500 rounded-full blur opacity-30 px-0.5" />
                  <img
                    src={profilePic}
                    alt="Raji Kumsa"
                    referrerPolicy="no-referrer"
                    className="relative w-16 h-16 rounded-full object-cover border border-white/10 shrink-0 select-none print:w-14 print:h-14"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold font-heading text-white tracking-tight">Raji Kumsa</h1>
                  <p className="text-space-gold font-medium mt-1 text-sm md:text-base">{PERSONAL_INFO.title}</p>
                  <p className="text-white/40 text-xs mt-2 font-mono flex items-center justify-center sm:justify-start gap-1">
                    <MapPin size={12} className="inline text-space-gold" /> Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 text-center sm:text-right text-xs font-mono space-y-1.5 text-white/60">
                <div className="flex items-center justify-center sm:justify-end gap-1.5">
                  <Mail size={12} className="text-space-gold" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center justify-center sm:justify-end gap-1.5">
                  <Phone size={12} className="text-space-gold" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center justify-center sm:justify-end gap-1.5">
                  <Github size={12} className="text-space-gold" />
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-space-gold transition underline-offset-2 hover:underline"
                  >
                    github.com/rajikumsa
                  </a>
                </div>
                <div className="flex items-center justify-center sm:justify-end gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span className="text-white/50 font-sans">Available immediately</span>
                </div>
              </div>
            </div>

            {/* Resume Summary */}
            <div className="mt-8">
              <h2 className="text-sm font-semibold tracking-wider text-space-gold uppercase font-heading mb-3">Professional Summary</h2>
              <p className="text-white/70 text-xs leading-relaxed font-sans">{PERSONAL_INFO.bio}</p>
            </div>

            {/* Technical & Soft Skills */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-sm font-semibold tracking-wider text-space-gold uppercase font-heading mb-3 border-b border-white/5 pb-1">Technical Competence</h2>
                <div className="grid grid-cols-2 gap-2 text-xs text-white/80">
                  {SKILLS_DATA.filter(s => s.category === 'technical').map(skill => (
                    <div key={skill.name} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-space-gold"></span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-sm font-semibold tracking-wider text-space-gold uppercase font-heading mb-3 border-b border-white/5 pb-1">Interpersonal Soft Skills</h2>
                <div className="grid grid-cols-2 gap-2 text-xs text-white/85">
                  {SKILLS_DATA.filter(s => s.category === 'soft').map(skill => (
                    <div key={skill.name} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Work History */}
            <div className="mt-8">
              <h2 className="text-sm font-semibold tracking-wider text-space-gold uppercase font-heading mb-4 border-b border-white/5 pb-1">Work & Performance History</h2>
              <div className="space-y-6">
                {EXPERIENCE_DATA.map(exp => (
                  <div key={exp.id} className="text-xs">
                    <div className="flex justify-between items-start font-medium text-white/95">
                      <div>
                        <span className="font-semibold text-white text-sm">{exp.role}</span>
                        <span className="mx-2 text-white/10">|</span>
                        <span className="text-space-gold font-medium">{exp.company}</span>
                      </div>
                      <span className="text-white/40 text-xs font-mono shrink-0">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-outside pl-4 mt-2 space-y-1 text-white/60">
                      {exp.description.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Track */}
            <div className="mt-8">
              <h2 className="text-sm font-semibold tracking-wider text-space-gold uppercase font-heading mb-4 border-b border-white/5 pb-1">Education Credentials</h2>
              <div className="text-xs flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-white text-sm">{PERSONAL_INFO.education.degree}</h3>
                  <p className="text-white/75 mt-0.5">{PERSONAL_INFO.education.institution}</p>
                </div>
                <span className="text-white/45 font-mono italic shrink-0">{PERSONAL_INFO.education.period}</span>
              </div>
            </div>

            {/* Projects list */}
            <div className="mt-8">
              <h2 className="text-sm font-semibold tracking-wider text-space-gold uppercase font-heading mb-4 border-b border-white/5 pb-1">Key Completed Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PROJECTS_DATA.slice(0, 3).map(proj => (
                  <div key={proj.id} className="bg-white/5 p-3 rounded border border-white/5 text-xs">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-white">{proj.title}</span>
                      <span className="bg-space-gold/10 text-space-gold text-[10px] px-2 py-0.5 rounded font-medium">
                        {proj.category}
                      </span>
                    </div>
                    <p className="text-white/60 text-xs line-clamp-2 leading-relaxed">{proj.description}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {proj.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="text-[10px] text-white/50 bg-white/5 border border-white/5 px-1.5 py-0.2 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {proj.githubUrl && (
                      <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center gap-3 text-[10px]">
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-space-gold hover:underline"
                        >
                          GitHub &rarr;
                        </a>
                        {proj.liveDemoUrl && (
                          <a
                            href={proj.liveDemoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-white/60 hover:text-white hover:underline"
                          >
                            {proj.demoLabel || 'Demo'} &rarr;
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Signature Footer */}
            <div className="mt-12 pt-6 border-t border-dashed border-white/10 flex justify-between items-center text-[10px] text-white/40">
              <p>Raji Kumsa — Portfolio Sync</p>
              <p>References available on request</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
