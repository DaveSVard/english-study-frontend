import { CSSProperties, FC, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/app/lib/utils";

interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  itemClassName?: string;
  maskImage?: boolean;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: ReactNode;
  vertical?: boolean;
  repeat?: number;
  style?: CSSProperties & { "--duration"?: string };
}

export const Marquee: FC<MarqueeProps> = ({
  className,
  itemClassName,
  reverse,
  maskImage,
  pauseOnHover = false,
  children,
  vertical = true,
  repeat = 4,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]":
            maskImage,
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              {
                "animate-marquee flex-row [animation-duration:var(--duration)]":
                  !vertical,
                "animate-marquee-vertical flex-col [animation-duration:var(--duration)]":
                  vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
              },
              itemClassName
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
};
