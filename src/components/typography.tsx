import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  LabelHTMLAttributes,
} from "react"
import { cn } from "~/utils/cn"

export function TypographyH1({
  className,
  children,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h1 className={cn("font-heading text-h1", className)} {...rest}>
      {children}
    </h1>
  )
}

export function TypographyH2({
  className,
  children,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h2 className={cn("font-heading text-h2", className)} {...rest}>
      {children}
    </h2>
  )
}

export function TypographyH3({
  className,
  children,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h3 className={cn("font-heading text-h3", className)} {...rest}>
      {children}
    </h3>
  )
}

export function TypographyH4({
  className,
  children,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h4 className={cn("font-heading text-h4", className)} {...rest}>
      {children}
    </h4>
  )
}

export function TypographyH5({
  className,
  children,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h5 className={cn("font-heading text-h4", className)} {...rest}>
      {children}
    </h5>
  )
}

export function TypographyH6({
  className,
  children,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h6 className={cn("font-heading text-h4", className)} {...rest}>
      {children}
    </h6>
  )
}

export function TypographyBody({
  className,
  children,
  ...rest
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return (
    <div className={cn("font-body text-body", className)} {...rest}>
      {children}
    </div>
  )
}

export function TypographyLabel({
  className,
  children,
  ...rest
}: DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>) {
  return (
    <label className={cn("font-body text-label", className)} {...rest}>
      {children}
    </label>
  )
}

export function TypographyLink({
  className,
  children,
  ...rest
}: DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) {
  return (
    <a
      className={cn(
        "font-body text-body hover:underline cursor-pointer text-primary",
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  )
}

export function Link({
  children,
  className,
  ...props
}: DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) {
  return (
    <a
      className={cn("hover:cursor-pointer hover:underline", className)}
      {...props}
    >
      {children}
    </a>
  )
}
