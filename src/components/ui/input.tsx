import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-9 w-full rounded-[8px] border border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#0c0c0c] px-3 py-1 text-[13px] text-gray-900 dark:text-[#ededed] shadow-sm transition-all duration-200 file:border-0 file:bg-transparent file:text-[13px] file:font-medium file:text-gray-900 dark:file:text-[#ededed] placeholder:text-gray-400 dark:placeholder:text-gray-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-[#333333] focus-visible:border-gray-300 dark:focus-visible:border-[#333333] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
