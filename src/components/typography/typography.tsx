import { ReactNode, createElement } from "react";

type DivTypographyProps = {
  as?: "div";
  props?: JSX.IntrinsicElements["div"];
};

type PTypographyProps = {
  as?: "p";
  props?: JSX.IntrinsicElements["p"];
};

type SpanTypographyProps = {
  as: "span";
  props?: JSX.IntrinsicElements["span"];
};

type H1TypographyProps = {
  as: "h1";
  props?: JSX.IntrinsicElements["h1"];
};

type H2TypographyProps = {
  as: "h2";
  props?: JSX.IntrinsicElements["h2"];
};

type H3TypographyProps = {
  as: "h3";
  props?: JSX.IntrinsicElements["h3"];
};

type H4TypographyProps = {
  as: "h4";
  props?: JSX.IntrinsicElements["h4"];
};

type H5TypographyProps = {
  as: "h5";
  props?: JSX.IntrinsicElements["h5"];
};

type H6TypographyProps = {
  as: "h6";
  props?: JSX.IntrinsicElements["h6"];
};

type ATypographyProps = {
  as: "a";
  props?: JSX.IntrinsicElements["a"];
};

export function Typography({
  as: Element = "span",
  variant = "body",
  className,
  children,
  props,
}: {
  variant?: "body" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "link";
  className?: string;
  children?: ReactNode;
} & (DivTypographyProps | PTypographyProps | SpanTypographyProps | H1TypographyProps | H2TypographyProps | H3TypographyProps | H4TypographyProps | H5TypographyProps | H6TypographyProps | ATypographyProps)) {

  const variantToClassName = () => {
    switch (variant) {
    case "body":
      return "font-body text-body";
    case "label":
      return "font-body text-label";
    case "h1":
      return "font-heading text-h1";
    case "h2":
      return "font-heading text-h2";
    case "h3":
      return "font-heading text-h3";
    case "h4":
      return "font-heading text-h4";
    case "h5":
      return "font-heading text-h4";
    case "h6":
      return "font-heading text-h4";
    case "link":
      return "font-body text-body hover:underline cursor-pointer text-simonyi_zold";
    default:
      return "font-body text-body";
    }
  };

  return createElement(
    Element,
    {
      className: `${variantToClassName()} ${className ?? ""}`.trim(),
      ...props,
    },
    children,
  );
}
