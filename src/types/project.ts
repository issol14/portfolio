export interface ProjectLink {
  github?: string;
  demo?: string;
  doc?: string;
}

export interface CoverImage {
  src: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  period: string;
  tags: string[];
  stack: string[];
  highlights: string[];
  links: ProjectLink;
  coverImage?: CoverImage;
  ogImage?: string;
}
