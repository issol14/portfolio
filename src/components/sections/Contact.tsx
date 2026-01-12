"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: Github,
  Linkedin: Linkedin,
  Twitter: Twitter,
};

export function Contact() {
  return (
    <section className="bg-muted/30 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Connect
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            새로운 기회나 협업에 대해 이야기하고 싶으시다면 언제든 연락주세요.
          </p>

          <div className="mt-8 flex flex-col items-center gap-6">
            {profile.location && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{profile.location}</span>
              </div>
            )}

            <Button size="lg" asChild>
              <Link href={`mailto:${profile.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                {profile.email}
              </Link>
            </Button>

            <div className="flex items-center gap-4">
              {profile.socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border bg-background text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label={link.name}
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
