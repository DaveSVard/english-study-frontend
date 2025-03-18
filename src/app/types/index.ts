export interface IAuthForm {
  type: "login" | "register";
}

export interface INavItem {
  id: number;
  link: string;
  title: string;
  external?: boolean;
};