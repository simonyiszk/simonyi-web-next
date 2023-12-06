import { SVGProps } from "react";

function HamburgerIcon(props?: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 6.857142857142857 4" overflow="visible" preserveAspectRatio="none" {...props}>
      <line
        x1="0"
        x2="6.857142857142857"
        y1="0"
        y2="0"
        stroke="#ffffff"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        style={{ transform: "none", transformOrigin: "3.42857px 0px" }}
      ></line>
      <line
        x1="0"
        x2="6.857142857142857"
        y1="2"
        y2="2"
        stroke="#ffffff"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        opacity="1"
        style={{ transform: "none", transformOrigin: "3.42857px 2px" }}
      ></line>
      <line
        x1="0"
        x2="6.857142857142857"
        y1="4"
        y2="4"
        stroke="#ffffff"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        style={{ transform: "none", transformOrigin: "3.42857px 4px" }}
      ></line>
    </svg>
  );
}

export { HamburgerIcon };
