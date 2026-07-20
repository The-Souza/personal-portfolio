"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TextAnimate } from "@/components/effects/text-animate";
import { Github, Linkedin, Briefcase, Mail } from "lucide-react";
import { BlurFade } from "@/components/effects/blur-fade";
import { GlassCard } from "@/components/ui/glass-card";
import { Trans, useTranslation } from "react-i18next";
import { socialLinks } from "@/constants/social-links";
import { STACKS } from "@/constants/stacks";

export function HeroSection() {
  const { t, i18n } = useTranslation();
  const Highlight = <span className="text-primary font-semibold" />;

  return (
    <section className="min-h-[60vh] sm:min-h-[65vh] xl:min-h-[80vh] w-full flex flex-col-reverse xl:flex-row items-center justify-between py-14 md:py-20 gap-6 sm:gap-12">
      {/* LEFT — CONTENT */}
      <div className="w-auto flex flex-col gap-6 text-center xl:text-left">
        <TextAnimate
          key={i18n.language}
          as="h1"
          animation="blurInUp"
          by="word"
          once
          className="text-[clamp(2rem,3.5vw+1rem,3.25rem)] font-bold font-heading"
        >
          {t("home.head")}
        </TextAnimate>

        {/* STACKS */}
        <BlurFade inView delay={0.05} duration={0.25} blur="3px" offset={4}>
          <div className="flex flex-wrap justify-center xl:justify-start gap-2">
            {[
              STACKS.frontend.nextjs.name,
              STACKS.frontend.react.name,
              STACKS.frontend.typescript.name,
              STACKS.frontend.tailwind.name,
              STACKS.backend.prisma.name,
              STACKS.database.supabase.name,
            ].map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="z-1 transition-colors border-border hover:border-primary hover:text-primary py-1 px-3 bg-sidebar"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </BlurFade>

        {/* DESCRIPTION */}
        <GlassCard>
          <BlurFade inView delay={0.15}>
            <div className="flex flex-col gap-2 max-w-xl mx-auto xl:mx-0 leading-relaxed text-lg">
              <p>{t("home.description.part1")}</p>

              <p>
                <Trans
                  key={i18n.language}
                  i18nKey="home.description.part2"
                  components={{ strong: Highlight }}
                />
              </p>
            </div>
          </BlurFade>
        </GlassCard>

        {/* CTA BUTTONS */}
        <BlurFade inView delay={0.2}>
          <div className="flex flex-wrap justify-center xl:justify-start gap-4 pt-4">
            <Button asChild>
              <Link
                href="/contact"
                className="z-1"
              >
                <Mail className="h-4 w-4" />
                {t("navigation.contact")}
              </Link>
            </Button>

            <Button asChild>
              <Link
                href="/projects"
                className="z-1"
              >
                <Briefcase className="h-4 w-4" />
                {t("viewProjects")}
              </Link>
            </Button>

            <Button asChild variant="outline">
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

            <Button asChild variant="outline">
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
          </div>
        </BlurFade>
      </div>

      {/* RIGHT — AVATAR */}
      <div className="z-1 w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden bg-background shadow-md hover:shadow-primary transition-transform duration-300 hover:scale-[1.03] border-2 border-primary">
        <BlurFade delay={0.25} inView className="w-full h-full relative">
          <Image
            src="/images/profile.jpeg"
            alt="Foto de Guilherme Campos, Desenvolvedor Frontend"
            fill
            priority
            fetchPriority="high"
            loading="eager"
            sizes="(max-width: 768px) 256px, 384px"
            className="object-cover object-top"
          />
        </BlurFade>
      </div>
    </section>
  );
}
