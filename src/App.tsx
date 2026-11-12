/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import TechMarquee from './components/TechMarquee';
import { Download, Mail, Phone, Github, Linkedin } from 'lucide-react';
import CVModal from './components/CVModal';
import DeploymentModal from './components/DeploymentModal';
import ScrollProgressBar from './components/ScrollProgressBar';
import defaultProfilePic from './assets/images/EOSR8039 copy.jpg';
import { PERSONAL_INFO } from './data';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isDeployModalOpen, setIsDeployModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07080b] text-[#e0d8d0] antialiased selection:bg-amber-400/20 selection:text-amber-300">
      {/* Scroll Position Indicator */}
      <ScrollProgressBar />

      {/* Top clean navigation */}
      <Navbar onOpenCV={() => setIsCVOpen(true)} />

      {/* Main sections: Clean, intuitive flow */}
      <main>
        <Hero 
          onOpenCV={() => setIsCVOpen(true)} 
          profilePic={defaultProfilePic}
        />
        {/* Infinite Tech Marquee Ribbon */}
        <TechMarquee />
        <About 
          onOpenCV={() => setIsCVOpen(true)} 
        />
        <Certifications />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* Quiet, Clean Footer with Direct Contact Links */}
      <footer className="bg-[#07080b] text-neutral-400 py-12 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 space-y-6 text-xs font-sans">
          {/* Quick Contact Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-md bg-space-gold flex items-center justify-center text-black font-bold font-heading text-xs">
                RK
              </div>
              <span className="text-white/90 font-medium">Get in Touch Directly:</span>
            </div>

            <div className="flex flex-wrap items-center gap-5 text-white/70">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-flex items-center gap-1.5 hover:text-space-gold transition">
                <Mail size={13} className="text-space-gold" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="inline-flex items-center gap-1.5 hover:text-space-gold transition">
                <Phone size={13} className="text-space-gold" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-space-gold transition">
                <Linkedin size={13} className="text-space-gold" />
                <span>LinkedIn</span>
              </a>
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-space-gold transition">
                <Github size={13} className="text-space-gold" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <p className="text-white/40">
              &copy; {new Date().getFullYear()} Raji Kumsa. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button
              onClick={() => setIsCVOpen(true)}
              className="text-space-gold hover:underline cursor-pointer"
            >
              Curriculum Vitae
            </button>
            <span className="text-white/20">·</span>
            <a
              href="https://github.com/rajikumsa/raji-kumsa-portfolio"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-white transition"
            >
              GitHub Repository
            </a>
            <span className="text-white/20">·</span>
            <a
              href="/portfolio-source.zip"
              download="raji-kumsa-portfolio-updated.zip"
              className="text-teal-400 hover:text-teal-300 font-medium transition inline-flex items-center gap-1.5"
              title="Download all updated source code files in a zip"
            >
              <Download size={13} />
              <span>Download Code (ZIP)</span>
            </a>
            <span className="text-white/20">·</span>
            <button
              onClick={() => setIsDeployModalOpen(true)}
              className="text-white/40 hover:text-white transition cursor-pointer"
            >
              Free Deploy Platforms
            </button>
          </div>
        </div>
      </footer>

      {/* Curriculum Vitae Modal */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} profilePic={defaultProfilePic} />

      {/* Free Deployment Guide Modal */}
      <DeploymentModal isOpen={isDeployModalOpen} onClose={() => setIsDeployModalOpen(false)} />
    </div>
  );
}
