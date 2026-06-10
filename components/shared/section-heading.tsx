import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  as?: "h2" | "h1";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <div className={cn("flex items-center gap-3", align === "center" && "justify-center")}>
        {align === "left" ? <span className="h-px w-8 bg-primary/60" aria-hidden="true" /> : null}
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <Heading className="display-md mt-5">{title}</Heading>
      <p className="lead mt-5 max-w-2xl">{description}</p>
    </div>
  );
}
