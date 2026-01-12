import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { getProjectBySlug, getAllProjectSlugs } from "@/content/projects";
import { siteConfig } from "@/content/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: project.ogImage
        ? [{ url: project.ogImage }]
        : project.coverImage
        ? [{ url: project.coverImage.src }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: project.ogImage || project.coverImage?.src,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>

        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            {project.role} | {project.period}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-8 flex flex-wrap gap-4">
          {project.links.github && (
            <Button asChild>
              <Link href={project.links.github} target="_blank">
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Link>
            </Button>
          )}
          {project.links.demo && (
            <Button variant="outline" asChild>
              <Link href={project.links.demo} target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Link>
            </Button>
          )}
          {project.links.doc && (
            <Button variant="outline" asChild>
              <Link href={project.links.doc} target="_blank">
                <FileText className="mr-2 h-4 w-4" />
                Documentation
              </Link>
            </Button>
          )}
        </div>

        <Separator className="my-12" />

        {/* Description */}
        <section>
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Key Achievements</h2>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span className="text-muted-foreground">{highlight}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
