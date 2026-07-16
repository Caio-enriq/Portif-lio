import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TimelineEvent {
  year: string;
  title: string;
  desc: string;
  tags: string[];
}

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
  className?: string;
}

export function TimelineItem({ event, index, className }: TimelineItemProps) {
  const isEven = index % 2 === 0;

  return (
    <div className={cn("relative flex gap-8", className)}>
      {/* Timeline line */}
      <div className="bg-border absolute top-0 left-[calc(50%-1px)] h-full w-px" />

      {/* Left side */}
      <div
        className={cn("flex w-1/2 items-start justify-end", isEven ? "opacity-100" : "opacity-0")}
      >
        {isEven && (
          <div className="text-right">
            <span className="bg-primary/10 text-primary mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold">
              {event.year}
            </span>
            <h3 className="mb-2 text-lg font-semibold">{event.title}</h3>
            <p className="text-muted-foreground mb-3 text-sm leading-relaxed">{event.desc}</p>
            <div className="flex flex-wrap justify-end gap-1.5">
              {event.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Center dot */}
      <div className="absolute top-1 left-1/2 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center">
        <div className="border-primary bg-background h-3 w-3 rounded-full border-2" />
      </div>

      {/* Right side */}
      <div className={cn("flex w-1/2 items-start", !isEven ? "opacity-100" : "opacity-0")}>
        {!isEven && (
          <div>
            <span className="bg-primary/10 text-primary mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold">
              {event.year}
            </span>
            <h3 className="mb-2 text-lg font-semibold">{event.title}</h3>
            <p className="text-muted-foreground mb-3 text-sm leading-relaxed">{event.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {event.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
