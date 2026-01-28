import { cn } from "@/lib/utils";

type GlassCardProps = React.HTMLAttributes<HTMLDivElement>;

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl backdrop-blur-sm md:backdrop-blur-md bg-background/60 p-2 z-1",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
