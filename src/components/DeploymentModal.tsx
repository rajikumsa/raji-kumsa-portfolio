import { X, ExternalLink, Check, Copy, Globe, Github, Sparkles, Layers, ShieldCheck, Download } from 'lucide-react';
import { useState } from 'react';

interface DeploymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEPLOY_OPTIONS = [
  {
    name: 'Vercel',
    badge: 'Recommended · 1-Click',
    tagline: 'Fastest & most popular for React & Vite',
    link: 'https://vercel.com/new',
    buttonText: 'Deploy on Vercel',
    accentColor: 'border-white/20 hover:border-white',
    steps: [
      'Log into vercel.com/new with GitHub',
      'Click "Import" next to raji-kumsa-portfolio',
      'Click "Deploy" (all Vite build settings auto-detected)',
    ],
  },
  {
    name: 'GitHub Pages',
    badge: '100% Free · No Extra Account',
    tagline: 'Hosted directly from your existing GitHub repository',
    link: 'https://github.com/rajikumsa/raji-kumsa-portfolio/settings/pages',
    buttonText: 'Open GitHub Pages Settings',
    accentColor: 'border-space-gold/30 hover:border-space-gold',
    steps: [
      'Go to repo Settings → Pages',
      'Under Source, select "GitHub Actions"',
      'Automated workflow (.github/workflows/deploy.yml) publishes live',
    ],
  },
  {
    name: 'Cloudflare Pages',
    badge: 'Unlimited Bandwidth',
    tagline: 'Lightning fast global edge network',
    link: 'https://pages.cloudflare.com',
    buttonText: 'Open Cloudflare Pages',
    accentColor: 'border-amber-500/30 hover:border-amber-500',
    steps: [
      'Connect GitHub account at pages.cloudflare.com',
      'Select raji-kumsa-portfolio and choose Vite framework preset',
      'Click Save & Deploy to publish to .pages.dev',
    ],
  },
  {
    name: 'Render',
    badge: 'Static Site',
    tagline: 'Free cloud hosting with automatic SSL',
    link: 'https://dashboard.render.com',
    buttonText: 'Open Render Dashboard',
    accentColor: 'border-emerald-500/30 hover:border-emerald-500',
    steps: [
      'Click "New +" → "Static Site" on Render',
      'Connect raji-kumsa-portfolio repo',
      'Set Build Command: npm run build, Publish Directory: dist',
    ],
  },
];

export default function DeploymentModal({ isOpen, onClose }: DeploymentModalProps) {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#050505]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-space-gold/10 border border-space-gold/30 flex items-center justify-center text-space-gold">
              <Globe size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-heading flex items-center gap-2">
                <span>Free Deployment Platforms</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-space-gold/10 text-space-gold border border-space-gold/30">
                  Ready
                </span>
              </h3>
              <p className="text-xs text-white/50 font-sans">
                Deploy your portfolio for free directly from <code className="text-white/80">rajikumsa/raji-kumsa-portfolio</code>
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition cursor-pointer"
            aria-label="Close dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-left">
          {/* Quick Platform Cards Grid */}
          <div className="space-y-3">
            {DEPLOY_OPTIONS.map((opt) => (
              <div
                key={opt.name}
                className={`p-4 rounded-xl bg-white/[0.02] border transition-all ${opt.accentColor}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <h4 className="text-sm font-bold text-white font-heading">
                      {opt.name}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-space-gold border border-white/5">
                      {opt.badge}
                    </span>
                  </div>

                  <a
                    href={opt.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white text-white hover:text-black text-xs font-semibold rounded-lg transition self-start sm:self-auto"
                  >
                    <span>{opt.buttonText}</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                <p className="text-xs text-white/60 mb-3 font-sans">
                  {opt.tagline}
                </p>

                {/* Steps */}
                <div className="space-y-1 bg-black/40 p-3 rounded-lg border border-white/5 text-[11px] text-white/70">
                  {opt.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-space-gold font-mono font-bold">{idx + 1}.</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Download Bundle Helper */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-white font-heading">
                Manual Archive (Offline Backup)
              </p>
              <p className="text-[11px] text-white/50 font-sans">
                Download the complete source files in a single zip package.
              </p>
            </div>
            <a
              href="/portfolio-source.zip"
              download="raji-kumsa-portfolio-updated.zip"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-space-gold text-black text-xs font-bold rounded-lg hover:bg-space-gold/90 transition shrink-0"
            >
              <Download size={13} />
              <span>Download ZIP</span>
            </a>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#050505] border-t border-white/10 flex items-center justify-between">
          <div className="text-[11px] text-white/40 font-mono">
            Repository: github.com/rajikumsa/raji-kumsa-portfolio
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
