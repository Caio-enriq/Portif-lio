import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SkillTagProps {
  name: string;
  level?: "expert" | "advanced" | "intermediate" | "beginner";
  className?: string;
}

const levelColors: Record<string, string> = {
  expert: "bg-primary/15 text-primary border-primary/20",
  advanced: "bg-success-muted text-success border-success/20",
  intermediate: "bg-warning/10 text-warning border-warning/20",
  beginner: "bg-muted text-muted-foreground border-border",
};

export function SkillTag({ name, level = "intermediate", className }: SkillTagProps) {
  return (
    <Badge
      variant="outline"
      className={cn("text-xs font-medium transition-colors", levelColors[level], className)}
    >
      {name}
    </Badge>
  );
}
