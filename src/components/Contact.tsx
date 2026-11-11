import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

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
    <section id="contact" className="py-24 bg-[#0a0a0a] relative border-t border-white/10 text-left">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-space-gold font-semibold">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight mt-2">
            Contact
          </h2>
          <p className="text-white/60 text-sm leading-relaxed mt-4 font-sans">
            Interested in discussing full-time opportunities, technical projects, or collaborations? Feel free to reach out directly via email, phone, or the contact form below.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Details (5 columns) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-bold font-heading text-white mb-4">
              Direct Contact
            </h3>

            {/* Email Card */}
            <div className="bg-[#050505] border border-white/10 p-5 rounded-xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-space-gold shrink-0">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase text-white/40 block">Email Address</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-white font-medium text-xs sm:text-sm hover:text-space-gold transition truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-space-gold hover:text-white transition p-2"
                title="Send Email"
              >
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-[#050505] border border-white/10 p-5 rounded-xl flex items-center justify-between gap-4">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-space-gold shrink-0">
                  <Phone size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase text-white/40 block">Phone / Mobile</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-white font-medium text-xs sm:text-sm hover:text-space-gold transition block"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-space-gold hover:text-white transition p-2"
                title="Call Phone"
              >
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-[#050505] border border-white/10 p-5 rounded-xl flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-space-gold shrink-0">
                <MapPin size={18} />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-white/40 block">Location</span>
                <span className="text-white font-medium text-xs sm:text-sm">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Socials Card */}
            <div className="bg-[#050505] border border-white/10 p-5 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-white/40 block">Profiles</span>
                <span className="text-white text-xs sm:text-sm font-medium">GitHub & LinkedIn</span>
              </div>
              <div className="flex gap-2">
                <a
                  href={PERSONAL_INFO.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
                <a
                  href={PERSONAL_INFO.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Form (7 columns) */}
          <div className="lg:col-span-7 bg-[#050505] border border-white/10 p-6 sm:p-8 rounded-2xl">
            <h3 className="text-base font-bold font-heading text-white mb-4">
              Send a Message
            </h3>

            {status === 'success' ? (
              <div className="p-8 text-center bg-white/5 rounded-xl border border-white/10 space-y-3">
                <CheckCircle2 size={36} className="text-space-gold mx-auto" />
                <h4 className="text-base font-bold text-white font-heading">
                  Message Sent Successfully
                </h4>
                <p className="text-white/60 text-xs sm:text-sm max-w-sm mx-auto font-sans">
                  Thank you for reaching out, {formState.name || 'there'}! I have received your note and will get back to you promptly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-3 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg transition cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                {status === 'error' && (
                  <p className="text-amber-400 text-xs p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    Please fill out your name, email, and message before sending.
                  </p>
                )}

                <div>
                  <label htmlFor="name" className="text-xs font-medium text-white/70 block mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Samuel Bekele"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-white/25 focus:border-space-gold focus:outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-xs font-medium text-white/70 block mb-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="e.g. samuel@example.com"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-white/25 focus:border-space-gold focus:outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-medium text-white/70 block mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Briefly describe your inquiry, project scope, or opportunity..."
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-white/25 focus:border-space-gold focus:outline-none transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 bg-space-gold hover:bg-space-gold/90 text-black font-semibold text-xs rounded-lg transition cursor-pointer flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                >
                  <Send size={14} />
                  <span>{status === 'sending' ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
