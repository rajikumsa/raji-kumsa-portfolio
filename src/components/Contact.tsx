import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, ArrowUpRight, Copy, Check, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus('error');
      return;
    }

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 bg-[#07080b] relative border-t border-white/[0.08] text-left overflow-hidden">
      {/* Background ambient lighting */}
      <div 
        className="pointer-events-none absolute -bottom-20 left-1/3 w-96 h-96 rounded-full bg-amber-500/5 blur-[120px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-medium mb-3">
            <Sparkles size={13} className="text-amber-400" />
            <span>LET&apos;S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight mt-1">
            Get in Touch
          </h2>
          <p className="text-neutral-400 text-base leading-relaxed mt-4 font-sans font-light">
            Interested in discussing full-time software engineering roles, technical opportunities, or collaborative projects? Reach out directly via email, phone, or the message form.
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Direct Details (5 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-lg font-bold font-heading text-white mb-4">
              Direct Contact
            </h3>

            {/* Email Card */}
            <div className="group bg-[#0e1118] border border-white/[0.08] hover:border-amber-500/40 p-5 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 shadow-xl shadow-black/40">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block">Email Address</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-white font-medium text-xs sm:text-sm hover:text-amber-300 transition truncate block"
                    title="Click to open default email client"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={copyEmail}
                  className="p-2 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition text-xs flex items-center gap-1 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span className="text-[10px] hidden sm:inline">{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-amber-400 hover:text-white transition p-2 hover:bg-white/5 rounded-lg"
                  title="Open mail application"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="group bg-[#0e1118] border border-white/[0.08] hover:border-amber-500/40 p-5 rounded-2xl flex items-center justify-between gap-4 transition-all duration-300 shadow-xl shadow-black/40">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
                  <Phone size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block">Phone / Mobile</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-white font-medium text-xs sm:text-sm hover:text-amber-300 transition block"
                    title="Click to call phone"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button
                  onClick={copyPhone}
                  className="p-2 text-neutral-400 hover:text-white hover:bg-white/5 rounded-lg transition text-xs flex items-center gap-1 cursor-pointer"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span className="text-[10px] hidden sm:inline">{copiedPhone ? 'Copied' : 'Copy'}</span>
                </button>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-amber-400 hover:text-white transition p-2 hover:bg-white/5 rounded-lg"
                  title="Call number"
                >
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-[#0e1118] border border-white/[0.08] p-5 rounded-2xl flex items-center gap-3.5 shadow-xl shadow-black/40">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-neutral-500 block">Location</span>
                <span className="text-white font-medium text-xs sm:text-sm">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Socials Card */}
            <div className="bg-[#0e1118] border border-white/[0.08] p-5 rounded-2xl flex items-center justify-between shadow-xl shadow-black/40">
              <div>
                <span className="text-[10px] font-mono uppercase text-neutral-500 block">Public Profiles</span>
                <span className="text-white text-xs sm:text-sm font-medium">GitHub & LinkedIn</span>
              </div>
              <div className="flex gap-2">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] text-neutral-300 hover:text-white hover:bg-white/10 transition border border-white/[0.06]"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/[0.04] text-neutral-300 hover:text-white hover:bg-white/10 transition border border-white/[0.06]"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form (7 columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#0e1118] border border-white/[0.08] p-6 sm:p-8 rounded-2xl shadow-xl shadow-black/40"
          >
            <h3 className="text-lg font-bold font-heading text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-neutral-400 text-xs sm:text-sm mb-6 font-light">
              Fill in your details below and I will respond to your inquiry within 24 hours.
            </p>

            {status === 'success' ? (
              <div className="p-8 text-center bg-white/[0.02] rounded-xl border border-white/[0.08] space-y-3">
                <CheckCircle2 size={40} className="text-amber-400 mx-auto" />
                <h4 className="text-lg font-bold text-white font-heading">
                  Message Sent Successfully
                </h4>
                <p className="text-neutral-400 text-xs sm:text-sm max-w-sm mx-auto font-sans font-light">
                  Thank you for reaching out, {formState.name || 'there'}! I have received your message and look forward to connecting with you.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-3 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl transition cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                {status === 'error' && (
                  <p className="text-amber-300 text-xs p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 font-medium">
                    Please provide your name, email, and message before sending.
                  </p>
                )}

                <div>
                  <label htmlFor="name" className="text-xs font-medium text-neutral-300 block mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Samuel Bekele"
                    className="w-full px-4 py-3 bg-[#07080b] border border-white/[0.08] rounded-xl text-sm text-white placeholder-neutral-600 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/20 transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-xs font-medium text-neutral-300 block mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. samuel@example.com"
                    className="w-full px-4 py-3 bg-[#07080b] border border-white/[0.08] rounded-xl text-sm text-white placeholder-neutral-600 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/20 transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-medium text-neutral-300 block mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Briefly describe your inquiry, engineering opportunity, or project..."
                    className="w-full px-4 py-3 bg-[#07080b] border border-white/[0.08] rounded-xl text-sm text-white placeholder-neutral-600 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400/20 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="relative group w-full py-3.5 bg-amber-400 hover:bg-amber-300 text-black font-bold text-xs rounded-xl transition duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 disabled:opacity-50 overflow-hidden"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  <Send size={15} />
                  <span>{status === 'sending' ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
