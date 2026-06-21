"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "ratelimit">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "") || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/contact/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else if (response.status === 429) {
        setStatus("ratelimit");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div className="space-y-8">
            <div>
              <p className="text-xs text-violet-400 font-mono uppercase tracking-widest mb-3">Contact</p>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Let's build<br />
                <span className="gradient-text">something together.</span>
              </h2>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Have a project in mind or want to discuss backend architectures? I'm open to
              collaborating on innovative platforms and systems-level tools.
            </p>

            <div className="space-y-4">
              {[
                { label: "Email", value: "mdehtesham313@gmail.com", href: "mailto:mdehtesham313@gmail.com" },
                { label: "Phone", value: "+91-8340711589", href: "tel:+918340711589" },
                { label: "Location", value: "Bhopal, Madhya Pradesh, India", href: null },
              ].map((c) => (
                <div key={c.label} className="flex gap-4 items-center">
                  <span className="text-xs text-violet-400 font-mono w-16">{c.label}</span>
                  {c.href ? (
                    <a href={c.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                      {c.value}
                    </a>
                  ) : (
                    <span className="text-sm text-slate-400">{c.value}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/md-ehtesham57"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-400 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/md-ehtesham-153344259/"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-400 hover:text-white border border-white/10 hover:border-white/20 rounded-xl transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="relative">
            <div className="absolute -inset-4 bg-violet-600/5 blur-3xl rounded-full pointer-events-none" />
            <div className="relative rounded-2xl border border-white/8 bg-[#111627]/80 backdrop-blur-xl p-8">
              <h3 className="text-sm font-semibold text-white mb-6">
                {status === "success" ? "Message sent ✓" : "Send a message"}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5">Name</label>
                  <input
                    name="name" required type="text"
                    onChange={() => status !== "idle" && setStatus("idle")}
                    placeholder="Your name"
                    className="w-full bg-white/[0.04] border border-white/8 focus:border-violet-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5">Email</label>
                  <input
                    name="email" required type="email"
                    onChange={() => status !== "idle" && setStatus("idle")}
                    placeholder="your@email.com"
                    className="w-full bg-white/[0.04] border border-white/8 focus:border-violet-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5">Message</label>
                  <textarea
                    name="message" required rows={4}
                    onChange={() => status !== "idle" && setStatus("idle")}
                    placeholder="Tell me about your project…"
                    className="w-full bg-white/[0.04] border border-white/8 focus:border-violet-500/50 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 outline-none transition-all resize-none"
                  />
                </div>

                {/* Honeypot */}
                <input type="text" name="company" tabIndex={-1} autoComplete="off"
                  className="absolute -left-[9999px] opacity-0 pointer-events-none" />

                <button
                  type="submit"
                  disabled={status === "sending" || status === "success"}
                  className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium transition-all duration-200 shadow-[0_0_20px_rgba(124,58,237,0.25)] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending…" : status === "success" ? "Sent!" : "Send Message"}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-xs text-center">Something went wrong. Please try again.</p>
                )}
                {status === "ratelimit" && (
                  <p className="text-yellow-400 text-xs text-center">Too many requests. Please try again later.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}