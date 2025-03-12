'use client'

import Link from 'next/link';
import { useState } from 'react';

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { IoFemale, IoMale } from "react-icons/io5";

import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/Form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
import { registerSchema } from '@/app/lib/schemas';
import { RadioGroup, RadioGroupItem } from '../ui/RadioGroup';

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      role: 'student',
      gender: 'male',
      password: '',
      confirmPassword: ''
    }
  })

  function onSubmit(values: z.infer<typeof registerSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <>
      <h2 className="text-2xl font-bold text-center text-black dark:text-white mb-6">
        Register
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col xs:flex-row gap-y-3 gap-x-1">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="First name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input placeholder="Last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex gap-1">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className={form.formState.errors.role ? '' : 'mb-0'}>
                          <SelectValue placeholder="Select a role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="teacher">Teacher</SelectItem>
                        <SelectItem value="student">Student</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="w-full flex flex-col gap-2">
                    <div className="flex gap-2 h-9 mb-0 relative">
                      <FormControl className="w-full rounded-md bg-gray-300/50 dark:bg-gray-500/15">
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex justify-center"
                        >
                          <FormItem className="w-full">
                            <FormControl className="w-full cursor-pointer">
                              <RadioGroupItem value="male" icon={<IoMale className=" text-blue-500 text-md cursor-pointer" />} indicatorClassName="bg-blue-300" />
                            </FormControl>
                          </FormItem>
                          <FormItem className="w-full">
                            <FormControl className="w-full cursor-pointer">
                              <RadioGroupItem value="female" icon={<IoFemale className="text-pink-500 text-md cursor-pointer" />} indicatorClassName="bg-pink-300" />
                            </FormControl>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col xs:flex-row gap-y-3 gap-x-1">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="Password" type={showPassword ? "text" : "password"} {...field} />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-0 px-3 py-1.5 text-sm sm:text-base">
                          {showPassword ? <FiEye /> : <FiEyeOff />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormControl>
                      <div className="relative">
                        <Input placeholder="Confirm Password" type={showConfirmPassword ? "text" : "password"} {...field} />
                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute inset-y-0 right-0 px-3 py-1.5 text-sm sm:text-base">
                          {showConfirmPassword ? <FiEye /> : <FiEyeOff />}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <span className="text-xs text-black dark:text-white mt-4">
              By creating an account, you agree to our <Link href="/terms" className="text-accent underline">Terms of Service</Link> and <Link href="/privacy" className="text-accent underline">Privacy Policy</Link>.
            </span>

            <Button variant="accent" type="submit">Sign Up</Button>

            <div className="flex flex-col gap-2 items-center justify-center mt-4">
              <p className="flex gap-1 items-center text-xs text-black dark:text-white">
                Already have an account?
                <Link href="/login" className="text-xs text-accent underline">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </form>
      </Form>
    </>
  )
}
