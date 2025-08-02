import { Slot } from "@radix-ui/react-slot"
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  LabelHTMLAttributes,
} from "react"
import { cn } from "~/utils/cn"

type AsChildType = {
  asChild?: boolean
}

type HeadingType = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
> &
  AsChildType

type TypographyH1Type = HeadingType

export function TypographyH1({
  className,
  asChild = false,
  ...rest
}: TypographyH1Type) {
  const Comp = asChild ? Slot : "h1"

  return (
    <Comp
      data-slot="h1"
      className={cn("font-heading text-h1", className)}
      {...rest}
    />
  )
}

type TypographyH2Type = HeadingType

export function TypographyH2({
  className,
  asChild = false,
  ...rest
}: TypographyH2Type) {
  const Comp = asChild ? Slot : "h2"

  return (
    <Comp
      data-slot="h2"
      className={cn("font-heading text-h2", className)}
      {...rest}
    />
  )
}

type TypographyH3Type = HeadingType

export function TypographyH3({
  className,
  asChild = false,
  ...rest
}: TypographyH3Type) {
  const Comp = asChild ? Slot : "h3"

  return (
    <Comp
      data-slot="h3"
      className={cn("font-heading text-h3", className)}
      {...rest}
    />
  )
}

type TypographyH4Type = HeadingType

export function TypographyH4({
  className,
  asChild = false,
  ...rest
}: TypographyH4Type) {
  const Comp = asChild ? Slot : "h4"

  return (
    <Comp
      data-slot="h4"
      className={cn("font-heading text-h4", className)}
      {...rest}
    />
  )
}

type TypographyH5Type = HeadingType

export function TypographyH5({
  className,
  asChild = false,
  ...rest
}: TypographyH5Type) {
  const Comp = asChild ? Slot : "h5"

  return (
    <Comp
      data-slot="h5"
      className={cn("font-heading text-h4", className)}
      {...rest}
    />
  )
}

type TypographyH6Type = HeadingType

export function TypographyH6({
  className,
  asChild = false,
  ...rest
}: TypographyH6Type) {
  const Comp = asChild ? Slot : "h6"

  return (
    <Comp
      data-slot="h6"
      className={cn("font-heading text-h4", className)}
      {...rest}
    />
  )
}

type TypographyBodyType = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  AsChildType

export function TypographyBody({
  className,
  asChild = false,
  ...rest
}: TypographyBodyType) {
  const Comp = asChild ? Slot : "div"

  return (
    <Comp
      data-slot="div"
      className={cn("font-body text-body", className)}
      {...rest}
    />
  )
}

type TypographyLabelType = DetailedHTMLProps<
  LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
> &
  AsChildType

export function TypographyLabel({
  className,
  asChild = false,
  ...rest
}: TypographyLabelType) {
  const Comp = asChild ? Slot : "label"

  return (
    <Comp
      data-slot="label"
      className={cn("font-body text-label", className)}
      {...rest}
    />
  )
}

type TypographyLinkType = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  AsChildType

export function TypographyLink({
  className,
  asChild = false,
  ...rest
}: TypographyLinkType) {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      data-slot="a"
      className={cn(
        `
          cursor-pointer font-body text-body text-primary transition-all
          duration-200 ease-in-out
          hover:text-primary-400 hover:underline
          active:text-primary-600
        `,
        className,
      )}
      {...rest}
    />
  )
}
