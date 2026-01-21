"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TextAnimate } from "@/components/effects/text-animate";
import { Github, Linkedin, FileText, Briefcase } from "lucide-react";
import { BlurFade } from "@/components/effects/blur-fade";
import { useTranslation } from "react-i18next";

export function HeroSection() {
  const { t, i18n } = useTranslation();

  return (
    <section className="min-h-[60vh] sm:min-h-[65vh] xl:min-h-[80vh] w-full max-w-6xl flex flex-col-reverse xl:flex-row items-center justify-between py-14 md:py-20 gap-6 sm:gap-12">
      {/* LEFT — CONTENT */}
      <div className="w-auto flex flex-col gap-6 text-center xl:text-left">
        <TextAnimate
          key={i18n.language}
          as="h1"
          animation="blurInUp"
          by="word"
          once
          className="text-4xl md:text-5xl font-bold font-heading"
        >
          {t("home.head")}
        </TextAnimate>

        {/* STACKS */}
        <div className="z-1 flex flex-wrap justify-center xl:justify-start gap-2">
          {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="transition-colors border-border hover:border-primary hover:text-primary py-1 px-3 bg-sidebar"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* DESCRIPTION */}
        <div className="z-1 flex flex-col gap-2 max-w-xl mx-auto xl:mx-0 leading-relaxed text-lg">
          <p>{t("home.description.part1")}</p>

          <p>{t("home.description.part2")}</p>
        </div>

        {/* CTA BUTTONS */}
        <div className="z-1 flex flex-wrap justify-center xl:justify-start gap-4 pt-4">
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

          <Button asChild>
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

          <Button asChild variant="secondary">
            <Link
              href="/projects"
              target="_blank"
              className="hover:scale-105 transition-transform active:scale-[0.97]"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              {t("viewProjects")}
            </Link>
          </Button>

          <Button asChild variant="secondary">
            <Link
              href="/doc/Guilherme_Campos_Frontend_Jr.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-105 transition-transform active:scale-[0.97]"
            >
              <FileText className="mr-2 h-4 w-4" />
              {t("viewCv")}
            </Link>
          </Button>
        </div>
      </div>

      {/* RIGHT — AVATAR */}
      <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden bg-background shadow-md hover:shadow-primary transition-transform duration-300 hover:scale-[1.03] border-2 border-primary animate-[float_6s_ease-in-out_infinite]">
        <BlurFade delay={0.25} inView className="w-full h-full relative">
          <Image
            src="/images/profile.jpeg"
            alt="Foto de Guilherme Campos"
            fill
            priority
            sizes="(max-width: 768px) 256px, 384px"
            className="object-cover object-top transition-transform duration-500 hover:scale-110"
          />
        </BlurFade>
      </div>
    </section>
  );
}
