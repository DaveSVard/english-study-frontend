import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";

type Props = {
  linkItem: {
    link: string;
    title: string;
    external?: boolean;
    scroll?: boolean;
  };
  active?: boolean;
  className?: string;
};

export function NavBarItem({ linkItem, active, className }: Props) {
  const { link, title, external, scroll } = linkItem;
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!external && scroll) {
      e.preventDefault();
      const targetElement = document.querySelector(link);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <Link
      href={link}
      className={cn(
        "flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5 dark:hover:text-white/80 dark:text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200",
        (active || pathname?.includes(link)) && "bg-transparent text-white",
        className
      )}
      target={external ? "_blank" : undefined}
      onClick={handleClick}
    >
      {title}
    </Link>
  );
}
