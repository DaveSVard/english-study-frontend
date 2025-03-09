"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { FaCircle } from "react-icons/fa"

import { cn } from "@/app/lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    icon: React.ReactNode
    indicatorClassName?: string
  }
>(({ className, icon, indicatorClassName, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "relative h-full w-full text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {icon ? (
        <>
          <div className="w-full flex items-center justify-center relative z-50">
            {icon}
          </div>
          <RadioGroupPrimitive.Indicator
            className={cn(
              "flex items-center justify-center border rounded-md size-full absolute top-0",
              indicatorClassName
            )}
          />
        </>
      ) : (
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <FaCircle className="h-3.5 w-3.5 fill-primary" />
        </RadioGroupPrimitive.Indicator>
      )}
    </RadioGroupPrimitive.Item >
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
