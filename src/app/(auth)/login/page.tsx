import { AuthForm } from "@/app/components/AuthForm";

const LoginPage = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-white dark:bg-dark-gray" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} />
      <div className="absolute inset-0 bg-accent" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />

      <div className="relative z-10">
        <AuthForm type="login" />
      </div>
    </div>
  )
}

export default LoginPage