import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { profile } from "@/content/profile";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github: Github,
  Linkedin: Linkedin,
  Twitter: Twitter,
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-2 sm:items-start">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} {profile.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {profile.socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={link.name}
                >
                  {Icon && <Icon className="h-5 w-5" />}
                </Link>
              );
            })}
            <Link
              href={`mailto:${profile.email}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
