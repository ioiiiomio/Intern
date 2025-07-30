"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "../../lib/utils"

type ProgressProps = React.ComponentProps<typeof ProgressPrimitive.Root> & {
  value: number
  gradient?: string, 
  length: number, 
  // Class from Tailwnd
}

function Progress({ className, value, gradient, ...props }: ProgressProps) {
  const fallbackGradient = getDefaultGradient(value)

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-background_prime relative h-4 overflow-hidden rounded-full border border-border_color",
        className
      )}
      style={{ width: `${props.length}px` }}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "h-full w-full transition-all duration-700 ease-out bg-gradient-to-r rounded-lg",
          gradient ?? fallbackGradient
        )}
        style={{ transform: `translateX(-${100 - value}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

// Automatically choose gradient based on progress
function getDefaultGradient(value: number): string {
  if (value < 30) return "from-white via-red-50 to-red-500"
  if (value < 70) return "from-orange-200 to-orange-400"
  return "from-green-50 via-lime-200 via-lime-400 to-lime-600"
}

export { Progress, ProgressPrimitive }
