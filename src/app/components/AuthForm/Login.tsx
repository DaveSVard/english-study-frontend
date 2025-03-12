"use client"

import Link from 'next/link';
import { useState } from 'react';

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { loginSchema } from "@/app/lib/schemas"
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/Form'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-center text-black dark:text-white mb-6">
        Login
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <FormField
              control={form.control}
              name="email"
              render={() => (
                <FormItem>
                  <FormControl>
                    <Controller
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <Input
                          placeholder="Email"
                          className="flex h-9 w-full rounded-md border border-muted-foreground bg-transparent px-3 py-1 text-base shadow-sm transition-colors"
                          {...field}
                        />
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={() => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Controller
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <Input
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            className="flex h-9 w-full rounded-md border border-muted-foreground bg-transparent px-3 py-1 text-base shadow-sm transition-colors"
                            {...field}
                          />
                        )}
                      />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 px-3 py-1.5 text-sm sm:text-base">
                        {showPassword ? <FiEye /> : <FiEyeOff />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <span className="mt-4 text-xs text-black dark:text-white">
              By continuing, you agree to our <Link href="/terms" className="text-accent underline">Terms of Service</Link> and <Link href="/privacy" className="text-accent underline">Privacy Policy</Link>.
            </span>

            <Button variant="accent" type="submit">Sign In</Button>

            <div className="flex flex-col gap-2 items-center justify-center mt-4">
              <Link href="/forgot-password" className="text-xs text-accent underline">
                Forgot Password?
              </Link>
              <p className="flex gap-1 items-center text-xs text-black dark:text-white">
                Don't have an account?
                <Link href="/register" className="text-xs text-accent underline">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </form>
      </Form>
    </>
  )
}
