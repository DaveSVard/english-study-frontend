import { Login } from "./Login";
import { Register } from "./Register";
import { ThemeToggle } from "../ThemeToggle";

import { IAuthForm } from "@/app/lib/types";
import { cn } from "@/app/lib/utils";

export const AuthForm = ({ type }: IAuthForm) => {
  return (
    <div className="px-4">
      <div className="flex items-center justify-center h-screen">
        <div
          className={cn(
            "bg-white dark:bg-black w-full p-6 sm:p-8 rounded-lg shadow-lg shadow-gray-500/50 dark:shadow-black/70",
            type === "register" ? "max-w-xl" : "max-w-md"
          )}
        >
          <div className="flex items-center justify-end">
            <ThemeToggle />
          </div>
          {type === "login" ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
};
