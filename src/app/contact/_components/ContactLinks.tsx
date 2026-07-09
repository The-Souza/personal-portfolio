import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "@/constants/social-links";
import { BlurFade } from "@/components/effects/blur-fade";

export function ContactLinks() {

  return (
    <BlurFade inView delay={0.2}>
      <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
        <Button asChild>
          <Link
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="z-1"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </Link>
        </Button>

        <Button asChild variant="secondary">
          <Link
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="z-1"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
        </Button>

        <Button asChild variant="outline">
          <Link
            href={`mailto:${socialLinks.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="z-1"
          >
            <Mail className="h-4 w-4" />
            Email
          </Link>
        </Button>
      </div>
    </BlurFade>
  );
}
