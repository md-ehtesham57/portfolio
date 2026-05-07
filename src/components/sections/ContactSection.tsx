"use client"
import { useState } from "react";
import Container from "@/components/ui/Container";

export default function ContactPage() {
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
        headers: {
          "Content-Type": "application/json",
        },
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
    } catch (err) {
      console.error("Connection Error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="pt-6 pb-6 overflow-hidden">
      <Container>
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">

          <div className="flex flex-col justify-center space-y-10">

            <div className="font-mono">
              <span className="text-emerald-500 text-lg">{">"} touch contact.json</span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mt-2 tracking-tighter">
                ./get_in_touch<span className="animate-pulse text-emerald-500">_</span>
              </h1>
            </div>

            <div className="font-mono text-base text-zinc-400 leading-relaxed space-y-8">
              <p>
                Have a project in mind or want to discuss <span className="text-emerald-400">Backend Architectures</span>?
                I&apos;m always open to collaborating on innovative web platforms or systems-level tools.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-zinc-300">
                  <span className="text-emerald-500 text-xs uppercase tracking-widest min-w-[100px]">[ email ]</span>
                  <a href="mailto:mdehtesham313@gmail.com" className="hover:text-emerald-400 transition-colors">
                    mdehtesham313@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 text-zinc-300">
                  <span className="text-emerald-500 text-xs uppercase tracking-widest min-w-[100px]">[ phone ]</span>
                  <a href="tel:+918340711589" className="hover:text-emerald-400 transition-colors">
                    +91-8340711589
                  </a>
                </div>
                <div className="flex items-center gap-4 text-zinc-300">
                  <span className="text-emerald-500 text-xs uppercase tracking-widest min-w-[100px]">[ location ]</span>
                  <span>Bhopal, Madhya Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="https://github.com/md-ehtesham57" className="p-6 rounded-2xl border border-emerald-500/10 bg-zinc-900/40 backdrop-blur-sm hover:border-emerald-500/30 transition-all group">
                <span className="block text-emerald-500 font-mono text-[10px] mb-2 uppercase tracking-widest group-hover:text-emerald-400">
                  # source_control
                </span>
                <span className="text-white font-bold text-lg font-mono">GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/md-ehtesham-153344259/" className="p-6 rounded-2xl border border-emerald-500/10 bg-zinc-900/40 backdrop-blur-sm hover:border-emerald-500/30 transition-all group">
                <span className="block text-emerald-500 font-mono text-[10px] mb-2 uppercase tracking-widest group-hover:text-emerald-400">
                  # professional_net
                </span>
                <span className="text-white font-bold text-lg font-mono">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Side Form Box */}
          <div className="relative group">
            <div className="absolute inset-0 bg-emerald-500/5 blur-3xl opacity-50" />

            <div className="relative border border-emerald-500/20 rounded-3xl p-8 bg-zinc-900/60 backdrop-blur-xl">
              <h3 className="text-emerald-400 font-mono text-sm mb-8 uppercase tracking-[0.2em] text-center">
                [ {status === "success" ? "payload_delivered" : "send_message"} ]
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs text-zinc-300">
                <div className="space-y-2">
                  <label className="text-zinc-500 text-[10px] uppercase">name.str</label>
                  <input
                    name="name"
                    required
                    type="text"
                    onChange={() => status !== "idle" && setStatus("idle")}
                    className="w-full bg-zinc-950/50 border border-emerald-500/10 rounded-xl px-4 py-3 focus:border-emerald-500/50 text-white outline-none transition-all"
                    placeholder="Enter name..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-zinc-500 text-[10px] uppercase">email.str</label>
                  <input
                    name="email"
                    required
                    type="email"
                    onChange={() => status !== "idle" && setStatus("idle")}
                    className="w-full bg-zinc-950/50 border border-emerald-500/10 rounded-xl px-4 py-3 focus:border-emerald-500/50 text-white outline-none transition-all"
                    placeholder="Enter email..."
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-zinc-500 text-[10px] uppercase">payload.msg</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    onChange={() => status !== "idle" && setStatus("idle")}
                    className="w-full bg-zinc-950/50 border border-emerald-500/10 rounded-xl px-4 py-3 focus:border-emerald-500/50 text-white outline-none transition-all resize-none"
                    placeholder="Enter message..."
                  />
                </div>

                {/* Honeypot - invisible to real users, catches bots */}
                <input
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  className="absolute -left-[9999px] opacity-0 pointer-events-none"
                />

                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-4 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-all font-mono text-[10px] uppercase tracking-[0.3em] rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "EXECUTING_PAYLOAD..." : "SUBMIT_PAYLOAD.sh"}
                  </button>
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-[10px] text-center mt-2 uppercase tracking-widest animate-pulse">
                    ! Error: delivery_failed
                  </p>
                )}
                {status === "ratelimit" && (
                  <p className="text-yellow-500 text-[10px] text-center mt-2 uppercase tracking-widest animate-pulse">
                    ! too_many_requests: try again later
                  </p>
                )}
                {status === "success" && (
                  <p className="text-emerald-500 text-[10px] text-center mt-2 uppercase tracking-widest">
                    ✓ Success: message_sent
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}