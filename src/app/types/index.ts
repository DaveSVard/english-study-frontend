export interface IAuthForm {
  type: "login" | "register";
}

export interface INavItem {
  id: number;
  link: string;
  title: string;
  external?: boolean;
}

export interface IButton {
  id: number;
  link: string;
  title: string;
  variant: "accent" | "outline" | "default" | "secondary" | "ghost" | "link";
}

export interface IHero {
  heading: string;
  subHeading: string;
  CTAs: IButton[];
  image: {
    src: string;
    alt: string;
  };
}

export interface IFadeIn {
  direction: "left" | "right" | "up" | "down";
  type?: "spring" | "tween" | "inertia";
  delay?: number;
  duration: number;
  ease?: "easeInOut" | "easeIn" | "easeOut" | "linear";
  value: number;
}