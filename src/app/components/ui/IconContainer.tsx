import { ReactNode } from 'react'

export const IconContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-14 min-h-14 min-w-14 items-center justify-center rounded-xl bg-gradient-to-b from-neutral-200 to-white to-[50%] p-1 dark:from-neutral-800 dark:to-black">
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-gradient-to-b from-[#5D5D5D] to-black dark:to-neutral-900">
        {children}
      </div>
    </div>
  )
}
