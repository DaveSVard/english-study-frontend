import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export const registerSchema = z.object({
  firstname: z.string({ required_error: "First name is required" }).min(2, { message: "First name must be at least 2 characters" }).max(50, { message: "First name must be less than 50 characters" }),
  lastname: z.string({ required_error: "Last name is required" }).min(2, { message: "Last name must be at least 2 characters" }).max(50, { message: "Last name must be less than 50 characters" }),
  gender: z.enum(["male", "female"], { required_error: "Gender is required" }),
  role: z.enum(["teacher", "student"], { required_error: "Role is required" }),
  email: z.string({ required_error: "Email is required" }).email({ message: "Invalid email address" }),
  password: z.string({ required_error: "Password is required" }).min(8, { message: "Password must be at least 8 characters" }),
  confirmPassword: z.string({ required_error: "Confirm password is required" }).min(8, { message: "Confirm password must be at least 8 characters" }),
})