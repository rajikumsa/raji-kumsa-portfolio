/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CVModal from './components/CVModal';
import NetlifyModal from './components/NetlifyModal';
import ScrollProgressBar from './components/ScrollProgressBar';
import defaultProfilePic from './assets/images/EOSR8039 copy.jpg';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  const [isNetlifyOpen, setIsNetlifyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0d8d0] antialiased selection:bg-space-gold/20 selection:text-space-gold">
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
        <About 
          onOpenCV={() => setIsCVOpen(true)} 
        />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      {/* Quiet, Clean Footer */}
      <footer className="bg-[#050505] text-neutral-400 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md bg-space-gold flex items-center justify-center text-black font-bold font-heading text-xs">
              RK
            </div>
            <span className="text-white/80 font-medium">Raji Kumsa — Portfolio</span>
          </div>

          <p className="text-white/40">
            &copy; {new Date().getFullYear()} Raji Kumsa. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs">
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
              Portfolio Repository
            </a>
            <span className="text-white/20">·</span>
            <button
              onClick={() => setIsNetlifyOpen(true)}
              className="text-white/40 hover:text-white transition cursor-pointer"
            >
              Deployment Info
            </button>
          </div>
        </div>
      </footer>

      {/* Curriculum Vitae Modal */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} profilePic={defaultProfilePic} />

      {/* Netlify Deployment Helper Modal */}
      <NetlifyModal isOpen={isNetlifyOpen} onClose={() => setIsNetlifyOpen(false)} />
    </div>
  );
}
