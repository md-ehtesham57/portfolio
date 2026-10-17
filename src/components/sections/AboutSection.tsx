"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import GlassButton from "@/components/ui/glass/GlassButton";
import { blurUp, staggerContainer } from "@/lib/motion";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
  { category: "DevOps", items: ["Docker", "AWS", "Vercel", "Git"] },
  { category: "Languages", items: ["JavaScript", "TypeScript", "C/C++", "Python"] },
];

export default function AboutSection() {
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
              eyebrow="About me"
              title="Engineer by craft, designer by instinct."
            />
          </motion.div>

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div variants={blurUp} className="space-y-6">
              <p className="leading-relaxed text-muted-foreground">
                I&apos;m Md Ehtesham, a full-stack developer based in Bhopal,
                India. I specialize in building scalable web applications with
                the MERN stack, focusing on backend architecture and creative
                frontend experiences.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                With a strong foundation in C/C++ and a passion for low-level
                programming, I bring a unique perspective to full-stack
                development. I&apos;m currently exploring SaaS platforms and
                cloud-native architectures.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <GlassButton
                  href="https://github.com/md-ehtesham57"
                  external
                  variant="ghost"
                >
                  GitHub
                </GlassButton>
                <GlassButton
                  href="https://www.linkedin.com/in/md-ehtesham-153344259/"
                  external
                  variant="ghost"
                >
                  LinkedIn
                </GlassButton>
              </div>
            </motion.div>

            <motion.div variants={blurUp}>
              <div className="glass rounded-3xl p-8 lg:p-10">
                <h3 className="font-mono text-[11px] tracking-[0.2em] text-faint uppercase">
                  Toolkit
                </h3>
                <div className="mt-7 grid gap-7 sm:grid-cols-2">
                  {skills.map((group) => (
                    <div key={group.category}>
                      <p className="text-sm font-medium text-foreground">
                        {group.category}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.items.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] text-muted-foreground"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
