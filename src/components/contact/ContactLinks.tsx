import Link from "next/link";
import { Button } from "../ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function ContactLinks() {

  return (
    <div className="z-1 flex flex-wrap gap-4">
      <Button asChild>
        <Link
          href="https://linkedin.com/in/guilherme-campos-frontend"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform active:scale-[0.97]"
        >
          <Linkedin className="mr-2 h-4 w-4" />
          LinkedIn
        </Link>
      </Button>

      <Button asChild variant="secondary">
        <Link
          href="https://github.com/The-Souza"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform active:scale-[0.97]"
        >
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Link>
      </Button>

      <Button asChild variant="outline">
        <Link
          href="mailto:guilhermev272@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-105 transition-transform active:scale-[0.97]"
        >
          <Mail className="mr-2 h-4 w-4" />
          Email
        </Link>
      </Button>
    </div>
  );
}
