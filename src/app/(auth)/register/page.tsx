import { AuthForm } from '@/app/components/AuthForm'

const RegisterPage = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-white dark:bg-dark-gray" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} />
      <div className="absolute inset-0 bg-accent" style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }} />

      <div className="relative z-10">
        <AuthForm type="register" />
      </div>
    </div>
  )
}

export default RegisterPage