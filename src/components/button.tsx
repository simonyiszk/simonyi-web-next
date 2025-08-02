import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/utils/cn"

const buttonVariants = cva(
  `m-1 inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md font-body font-semibold whitespace-nowrap transition-all duration-200 ease-in-out outline-none disabled:pointer-events-none`,
  {
    variants: {
      variant: {
        default: `bg-primary ring-2 ring-primary hover:bg-primary-400 hover:ring-4 hover:ring-primary-400 active:bg-primary-600 active:ring-2 active:ring-primary-600`,
        outline: `bg-white/15 ring-2 ring-primary hover:bg-primary-400 hover:ring-4 hover:ring-primary-400 active:bg-primary-600 active:ring-2 active:ring-primary-600`,
        transparent: `bg-white/15 ring-2 ring-white/15 hover:bg-primary-400 hover:ring-4 hover:ring-primary-400 active:bg-primary-600 active:ring-2 active:ring-primary-600`,
      },
      size: {
        default: "min-h-10 min-w-32 px-4",
        icon: "size-8",
      },
      isActive: {
        true: "bg-primary",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      isActive: false,
    },
  },
)

function Button({
  className,
  variant,
  size,
  isActive,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, isActive, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
