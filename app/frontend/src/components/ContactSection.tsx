import { useState } from "react";
import { Send, Github, Linkedin, Mail, MapPin, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    );
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <>
      <section id="contact" className="relative py-24 px-6 overflow-hidden bg-parchment dark:bg-sepia-bg paper-texture">
        <div className="max-w-6xl mx-auto relative">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-medium text-brown-500 dark:text-brown-400 tracking-[0.18em] uppercase">
                Contact
              </span>
              <motion.div
                className="h-[2px] bg-gold dark:bg-gold-dark mx-auto my-3"
                initial={{ width: 0 }}
                whileInView={{ width: 56 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <h2 className="text-4xl sm:text-5xl font-display font-normal text-brown-900 dark:text-cream mt-1">
                Let's Work Together
              </h2>
              <p className="text-brown-500 dark:text-brown-400 mt-4 max-w-lg mx-auto text-sm leading-relaxed">
                I'm actively looking for new opportunities. Whether you have a question
                or just want to say hi, I'll get back to you.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <ScrollReveal direction="left" delay={0.1}>
                <div className="p-8 border border-brown-200/60 dark:border-brown-700 hover:border-gold/40 dark:hover:border-brown-600 transition-all duration-500 bg-white/30 dark:bg-white/[0.02] rounded-[2px]">
                  <h3 className="text-lg font-display font-normal text-brown-900 dark:text-cream mb-6">
                    Get In Touch
                  </h3>
                  <div className="space-y-5">
                    {[
                      { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email", value: personalInfo.email, cta: "Discuss opportunities" },
                      { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/bhanuteja1299", cta: "Connect with me", external: true },
                      { href: personalInfo.github, icon: Github, label: "GitHub", value: "github.com/Bhanu1299", cta: "See my work", external: true },
                    ].map(({ href, icon: Icon, label, value, cta, external }) => (
                      <motion.a
                        key={label}
                        href={href}
                        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="flex items-center gap-4 text-brown-500 dark:text-brown-400 hover:text-brown-900 dark:hover:text-cream transition-colors group/item"
                        whileHover={{ x: 4 }}
                      >
                        <div className="p-3 border border-brown-200 dark:border-brown-700 group-hover/item:border-gold/40 dark:group-hover/item:border-brown-600 transition-colors rounded-[2px]">
                          <Icon className="w-5 h-5 text-gold dark:text-gold-dark" />
                        </div>
                        <div>
                          <div className="text-xs text-brown-500 dark:text-brown-400 mb-0.5 tracking-[0.08em] uppercase">{label}</div>
                          <div className="text-sm">{value}</div>
                          {cta && <div className="text-xs italic text-brown-300 dark:text-brown-400 mt-0.5">{cta}</div>}
                        </div>
                      </motion.a>
                    ))}

                    <motion.div
                      className="flex items-center gap-4 text-brown-500 dark:text-brown-400"
                      whileHover={{ x: 4 }}
                    >
                      <div className="p-3 border border-brown-200 dark:border-brown-700 rounded-[2px]">
                        <MapPin className="w-5 h-5 text-gold dark:text-gold-dark" />
                      </div>
                      <div>
                        <div className="text-xs text-brown-500 dark:text-brown-400 mb-0.5 tracking-[0.08em] uppercase">Location</div>
                        <div className="text-sm">{personalInfo.location}</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Resume CTA */}
              <ScrollReveal direction="left" delay={0.2}>
                <div className="p-6 border border-brown-200/60 dark:border-brown-700 bg-white/30 dark:bg-white/[0.02] rounded-[2px]">
                  <h4 className="font-display font-normal text-brown-900 dark:text-cream mb-2">
                    Looking for my resume?
                  </h4>
                  <p className="text-brown-500 dark:text-brown-400 text-sm mb-4 leading-relaxed">
                    Download my latest resume to learn more about my experience.
                  </p>
                  <motion.a
                    href={personalInfo.resumePath}
                    download
                    className="inline-flex items-center px-6 py-2.5 bg-brown-800 dark:bg-brown-300 text-parchment dark:text-sepia-bg text-xs font-medium tracking-[0.1em] uppercase rounded-[2px] hover:bg-brown-900 dark:hover:bg-cream transition-colors duration-300"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Download Resume
                  </motion.a>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="p-8 border border-brown-200/60 dark:border-brown-700 hover:border-gold/40 dark:hover:border-brown-600 transition-all duration-500 bg-white/30 dark:bg-white/[0.02] rounded-[2px]">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                    { id: "email", label: "Email", type: "email", placeholder: "your.email@example.com" },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id}>
                      <label className="block text-xs font-medium text-brown-500 dark:text-brown-400 mb-2 tracking-[0.08em] uppercase">
                        {label}
                      </label>
                      <input
                        type={type}
                        required
                        value={formData[id as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [id]: e.target.value })}
                        className="w-full px-4 py-3 bg-transparent border border-brown-200 dark:border-brown-700 text-brown-900 dark:text-cream placeholder-brown-300 dark:placeholder-brown-700 focus:outline-none focus:border-gold dark:focus:border-gold-dark transition-all text-sm rounded-[2px]"
                        placeholder={placeholder}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-xs font-medium text-brown-500 dark:text-brown-400 mb-2 tracking-[0.08em] uppercase">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-transparent border border-brown-200 dark:border-brown-700 text-brown-900 dark:text-cream placeholder-brown-300 dark:placeholder-brown-700 focus:outline-none focus:border-gold dark:focus:border-gold-dark transition-all resize-none text-sm rounded-[2px]"
                      placeholder="Tell me about the opportunity or just say hello..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-brown-800 dark:bg-brown-300 text-parchment dark:text-sepia-bg text-xs font-medium tracking-[0.1em] uppercase rounded-[2px] hover:bg-brown-900 dark:hover:bg-cream transition-colors duration-300"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {submitted ? (
                      <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring" }}>
                        Opening email client...
                      </motion.span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="border-t border-brown-200/60 dark:border-brown-700 py-8 px-6 bg-parchment dark:bg-sepia-bg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-brown-400 dark:text-brown-400">
            {personalInfo.footerCopyright}{" "}
            <Heart className="w-3 h-3 inline text-gold dark:text-gold-dark" />
          </p>
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: personalInfo.github, label: "GitHub" },
              { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="text-brown-400 dark:text-brown-400 hover:text-brown-800 dark:hover:text-cream transition-colors"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -2 }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.footer>
    </>
  );
}
