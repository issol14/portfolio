"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/content/profile";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: Github,
  Linkedin: Linkedin,
  Twitter: Twitter,
};

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
            새로운 기회나 협업에 대해 이야기하고 싶으시다면 언제든 연락주세요.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12"
        >
          <Card className="mx-auto max-w-md">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{profile.name}</CardTitle>
              <p className="text-muted-foreground">{profile.role}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Location */}
              {profile.location && (
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5" />
                  <span>{profile.location}</span>
                </div>
              )}

              {/* Email */}
              <div className="flex justify-center">
                <Button size="lg" asChild className="w-full">
                  <Link href={`mailto:${profile.email}`}>
                    <Mail className="mr-2 h-5 w-5" />
                    {profile.email}
                  </Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-4">
                {profile.socialLinks.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <Link
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      aria-label={link.name}
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                    </Link>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            이메일 확인은 평일 24시간 이내에 드리겠습니다.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
