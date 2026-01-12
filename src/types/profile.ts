export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  location?: string;
  resumeUrl?: string;
  socialLinks: SocialLink[];
  competencies: string[];
  skillCategories: SkillCategory[];
  experiences: Experience[];
}
