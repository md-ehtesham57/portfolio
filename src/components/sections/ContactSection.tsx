"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassButton from "@/components/ui/glass/GlassButton";
import { blurUp, staggerContainer } from "@/lib/motion";

type Status = "idle" | "sending" | "success" | "error" | "ratelimit";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "", // honeypot
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/contact/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.status === 429) {
        setStatus("ratelimit");
        return;
      }

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "", company: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputClasses =
    "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-foreground placeholder:text-faint outline-none transition-colors duration-300 focus:border-accent/60 focus:bg-white/[0.06]";

  return (
    <section className="relative pb-24 md:pb-32">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-14"
        >
          <motion.div variants={blurUp}>
            <SectionHeader
              eyebrow="Contact"
              title={
                <>
                  Let&apos;s build something{" "}
                  <span className="text-accent-gradient">worth shipping.</span>
                </>
              }
              description="Have a project in mind, or just want to talk shop? My inbox is open."
            />
          </motion.div>

          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <motion.div variants={blurUp}>
              <div className="glass flex h-full flex-col justify-center gap-8 rounded-3xl p-8 lg:p-10">
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.2em] text-faint uppercase">
                    Email
                  </h3>
                  <a
                    href="mailto:mdehtesham313@gmail.com"
                    className="mt-2 block text-lg font-semibold tracking-tight break-all text-foreground transition-colors hover:text-teal"
                  >
                    mdehtesham313@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.2em] text-faint uppercase">
                    Location
                  </h3>
                  <p className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                    Bhopal, India
                  </p>
                </div>
                <div>
                  <h3 className="font-mono text-[11px] tracking-[0.2em] text-faint uppercase">
                    Social
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {[
                      { name: "GitHub", url: "https://github.com/md-ehtesham57" },
                      { name: "LinkedIn", url: "https://www.linkedin.com/in/md-ehtesham-153344259/" },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-subtle rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
                <p className="flex items-center gap-2.5 font-mono text-xs text-faint">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                  Usually replies within 24 hours
                </p>
              </div>
            </motion.div>

            <motion.div variants={blurUp}>
              <form
                onSubmit={handleSubmit}
                className="glass h-full space-y-6 rounded-3xl p-8 lg:p-10"
              >
                {/* Honeypot */}
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="hidden"
                  aria-hidden="true"
                  tabIndex={-1}
                />

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block font-mono text-[11px] tracking-[0.2em] text-faint uppercase"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      minLength={2}
                      maxLength={50}
                      className={inputClasses}
                      placeholder="Your name..."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block font-mono text-[11px] tracking-[0.2em] text-faint uppercase"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block font-mono text-[11px] tracking-[0.2em] text-faint uppercase"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    maxLength={1000}
                    rows={5}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <GlassButton
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </GlassButton>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-teal/25 bg-teal/10 px-4 py-3.5 text-center text-sm font-medium text-teal"
                  >
                    Message sent successfully! I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {status === "ratelimit" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-amber-400/25 bg-amber-400/10 px-4 py-3.5 text-center text-sm font-medium text-amber-300"
                  >
                    Too many messages. Please wait a few minutes.
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-rose/25 bg-rose/10 px-4 py-3.5 text-center text-sm font-medium text-rose"
                  >
                    Something went wrong. Please try again or email me directly.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
