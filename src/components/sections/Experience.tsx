"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { profile } from "@/content/profile";

export function Experience() {
  const recentExperiences = profile.experiences.slice(0, 3);

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Experience
          </h2>
          <p className="mt-2 text-muted-foreground">경력 하이라이트입니다.</p>
        </motion.div>

        <div className="mt-12 space-y-8">
          {recentExperiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-border"
            >
              <div className="absolute left-0 top-0 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border bg-background">
                <Briefcase className="h-3 w-3" />
              </div>
              <div className="rounded-lg border bg-card p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>
                <p className="mt-4 text-muted-foreground">{exp.description}</p>
                {exp.highlights && (
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
