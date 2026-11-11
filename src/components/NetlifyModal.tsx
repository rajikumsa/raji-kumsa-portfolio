import { X, ExternalLink, Check, Copy, Server, Shield, Send, Terminal } from 'lucide-react';
import { useState } from 'react';

interface NetlifyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NetlifyModal({ isOpen, onClose }: NetlifyModalProps) {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0d1117] border border-teal-500/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0a0d12]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-[#00c7b7]">
              <Server size={18} />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-heading flex items-center gap-2">
                <span>Netlify Deployment Configuration</span>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-teal-950 text-teal-400 border border-teal-500/30">
                  Ready
                </span>
              </h3>
              <p className="text-xs text-white/50 font-sans">
                Full configuration files and serverless hooks generated
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/40 hover:text-white hover:bg-white/5 rounded-xl transition"
            aria-label="Close Netlify configuration dialog"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          {/* Status grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-1.5 text-teal-400 text-xs font-bold mb-1">
                <Check size={14} />
                <span>netlify.toml</span>
              </div>
              <p className="text-[11px] text-white/60">
                Build: <code className="text-teal-300">npm run build</code>, Publish: <code className="text-teal-300">dist</code>
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-1.5 text-teal-400 text-xs font-bold mb-1">
                <Shield size={14} />
                <span>SPA Redirects</span>
              </div>
              <p className="text-[11px] text-white/60">
                <code className="text-teal-300">/* -&gt; /index.html 200</code> in <code className="text-white/80">_redirects</code>
              </p>
            </div>

            <div className="p-3 rounded-xl bg-white/5 border border-white/5">
              <div className="flex items-center gap-1.5 text-teal-400 text-xs font-bold mb-1">
                <Send size={14} />
                <span>Netlify Forms</span>
              </div>
              <p className="text-[11px] text-white/60">
                Auto inbox in Netlify dashboard with bot-field honeypot
              </p>
            </div>
          </div>

          {/* Quick Steps */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold font-heading text-white uppercase tracking-wider">
              3-Step Quick Deployment
            </h4>

            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-white">Step 1: Build the optimized production bundle</span>
                <button
                  onClick={() => copyToClipboard('npm run build', 'step1')}
                  className="flex items-center gap-1 text-[11px] text-teal-400 hover:text-teal-300 font-mono transition"
                >
                  {copiedCmd === 'step1' ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copiedCmd === 'step1' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-2.5 rounded-lg bg-[#050709] border border-white/5 font-mono text-xs text-teal-300 overflow-x-auto">
                npm run build
              </pre>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-white">Step 2: Deploy to Netlify (CLI or Git)</span>
                <button
                  onClick={() => copyToClipboard('npx netlify deploy --prod --dir=dist', 'step2')}
                  className="flex items-center gap-1 text-[11px] text-teal-400 hover:text-teal-300 font-mono transition"
                >
                  {copiedCmd === 'step2' ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copiedCmd === 'step2' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="p-2.5 rounded-lg bg-[#050709] border border-white/5 font-mono text-xs text-teal-300 overflow-x-auto">
                npx netlify deploy --prod --dir=dist
              </pre>
              <p className="text-[11px] text-white/50">
                Or drag and drop the created <code className="text-white/80">dist</code> folder to{' '}
                <a
                  href="https://app.netlify.com/drop"
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-400 underline hover:text-teal-300 inline-flex items-center gap-0.5"
                >
                  app.netlify.com/drop
                  <ExternalLink size={10} />
                </a>
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-1">
              <span className="text-xs font-semibold text-white">Step 3: Connect Custom Domain & SSL</span>
              <p className="text-xs text-white/60 leading-relaxed font-sans">
                In your Netlify Dashboard under <strong>Domain management</strong>, add your custom domain. Netlify will automatically generate and renew free Let&apos;s Encrypt SSL certificates.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0a0d12] border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-white/40 font-mono">
            <Terminal size={14} className="text-teal-400" />
            <span>NETLIFY_DEPLOY.md file included in root</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-teal-500 hover:bg-teal-400 text-black text-xs font-bold rounded-lg transition"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
