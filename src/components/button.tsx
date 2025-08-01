import { cn } from "~/utils/cn"

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export function Button({ className, children, ...rest }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-10 w-32 items-center justify-center rounded-md border-2 border-primary bg-white/15 px-4 font-body font-semibold transition duration-200 ease-in-out hover:bg-primary",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
