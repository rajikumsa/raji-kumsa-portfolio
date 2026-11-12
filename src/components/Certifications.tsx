import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, ExternalLink, CheckCircle2, Eye, X, Sparkles, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data';
import { Certification } from '../types';

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 bg-[#07080b] relative border-t border-white/[0.08] text-left overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute top-1/2 right-10 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-10"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium mb-3">
              <Sparkles size={13} className="text-amber-400" />
              <span>VERIFIED CREDENTIALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
              Udacity Nanodegrees
            </h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-sans font-light leading-relaxed">
            Officially verified Nanodegree programs completed through Udacity (Part of Accenture).
          </p>
        </motion.div>

        {/* 3 Short Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group bg-[#0e1118] border border-white/[0.08] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 shadow-xl shadow-black/40 hover:shadow-amber-500/5"
            >
              <div>
                {/* Visual Certificate Card Header / Thumbnail */}
                <div 
                  onClick={() => setActiveCert(cert)}
                  className="aspect-[16/10] w-full overflow-hidden bg-black/60 relative cursor-pointer group/img border-b border-white/[0.06]"
                  title="Click to view full certificate"
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1118] via-transparent to-transparent opacity-80" />

                  {/* Top Badge: Verified */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-amber-500/20 text-amber-400 text-[10px] font-mono font-bold">
                    <ShieldCheck size={12} className="text-amber-400" />
                    <span>VERIFIED</span>
                  </div>

                  {/* Hover Overlay Hint */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-semibold backdrop-blur-[2px]">
                    <Eye size={16} className="text-amber-400" />
                    <span>View Certificate</span>
                  </div>
                </div>

                {/* Box Content */}
                <div className="p-6">
                  {/* Issuer and Date */}
                  <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                    <span className="text-amber-400 font-mono font-medium text-[11px]">
                      {cert.issuer}
                    </span>
                    <span className="text-neutral-500 font-mono text-[11px]">
                      {cert.issueDate}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-amber-300 transition-colors mb-3 leading-snug">
                    {cert.title}
                  </h3>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1 mb-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300 border border-white/[0.06]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar (Short Box Bottom) */}
              <div className="px-6 pb-5 pt-3 border-t border-white/[0.06] flex items-center justify-between gap-2 bg-[#0a0d14]">
                <button
                  onClick={() => setActiveCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-white transition py-1.5 px-2.5 rounded-lg hover:bg-white/[0.05] cursor-pointer"
                >
                  <Eye size={13} className="text-amber-400" />
                  <span>Preview</span>
                </button>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold rounded-lg transition duration-200 shadow-md shadow-amber-500/20"
                  title="Verify certificate on Udacity official portal"
                >
                  <span>Verify</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-[#0e1118] border border-white/15 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-left relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                className="absolute top-6 right-6 p-2 rounded-lg bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-mono font-semibold text-amber-400">
                  Verified Udacity Nanodegree
                </span>
                <span className="text-neutral-600">·</span>
                <span className="text-xs font-mono text-neutral-400">{activeCert.issueDate}</span>
              </div>
              <h3 className="text-2xl font-bold font-heading text-white mb-4">
                {activeCert.title}
              </h3>

              {/* Full Image Preview */}
              <div className="rounded-xl overflow-hidden border border-white/10 bg-black/60 shadow-2xl mb-6">
                <img
                  src={activeCert.image}
                  alt={`${activeCert.title} Certificate Full Preview`}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Verification & Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="text-xs text-neutral-400 font-sans">
                  <span className="text-white font-medium block">{activeCert.issuer}</span>
                  <span>Issued to Raji Kumsa</span>
                  {activeCert.credentialId && (
                    <span className="block font-mono text-[11px] text-neutral-500 mt-0.5">
                      ID: {activeCert.credentialId}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={activeCert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold rounded-xl transition shadow-lg shadow-amber-500/20"
                  >
                    <span>Verify on Udacity Portal</span>
                    <ExternalLink size={14} />
                  </a>
                  <button
                    onClick={() => setActiveCert(null)}
                    className="px-4 py-2 text-xs text-neutral-400 hover:text-white transition cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
