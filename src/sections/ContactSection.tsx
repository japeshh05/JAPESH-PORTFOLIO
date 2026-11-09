import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { profileData } from '../data/profile';
import { Mail, ExternalLink, MessageSquare, Linkedin, Github, Instagram, Send } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const email = profileData?.email || "japesh.engg@example.com";
  const socials = Array.isArray(profileData?.socials) ? profileData.socials : [];

  const getSocialIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes('linkedin')) return <Linkedin className="w-4 h-4" />;
    if (l.includes('github')) return <Github className="w-4 h-4" />;
    if (l.includes('instagram')) return <Instagram className="w-4 h-4" />;
    return <ExternalLink className="w-4 h-4" />;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Heading */}
        <div className="max-w-2xl mx-auto mb-12">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-primary px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            [ 07 • Communications ]
          </span>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mt-4 mb-4 text-text-primary"
          >
            Let's Build Something Together
          </h2>
          <p className="text-text-secondary text-base leading-relaxed">
            Interested in engineering projects, workshop discussions, or student club collaborations? My inbox is always open.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Contact Action Card */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-8 sm:p-12 rounded-3xl border border-primary/30 shadow-cyan-glow relative overflow-hidden"
        >
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
            <Mail className="w-8 h-8 text-primary" />
          </div>

          <h3 className="font-heading font-bold text-2xl text-text-primary mb-2">
            Direct Email Transmission
          </h3>
          <p className="text-text-secondary text-sm max-w-md mx-auto mb-8 font-mono">
            Click below to initiate communication directly via your preferred email client.
          </p>

          {/* Mailto Primary CTA */}
          <div className="mb-10">
            <a
              href={`mailto:${email}?subject=Hello%20Japesh%20-%20Engineering%20Inquiry`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-accent to-accent-orange text-slate-950 font-bold text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-amber-glow group"
            >
              <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              <span>{email}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-8 border-t border-surface-border">
            <div className="text-xs font-mono uppercase tracking-wider text-text-secondary mb-4 flex items-center justify-center gap-2">
              <MessageSquare className="w-3.5 h-3.5 text-accent" />
              <span>Verified External Profiles</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-surface-border text-xs font-mono text-text-secondary hover:text-primary hover:border-primary/40 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {getSocialIcon(social.label)}
                  <span>{social.label}</span>
                  <ExternalLink className="w-3 h-3 text-text-secondary opacity-60" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

