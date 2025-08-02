import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "~/utils/cn"

const buttonVariants = cva(
  "inline-flex h-10 w-32 items-center justify-center rounded-md border-2 border-primary bg-white/15 px-4 font-body font-semibold transition duration-200 ease-in-out hover:bg-primary",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
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
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
