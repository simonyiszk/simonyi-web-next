import { useColorModeValue } from "@chakra-ui/react";
import { ReactComponent as LogoComponent } from "./svg/simonyi-mini-green.svg";

export const RLogoSimple = (props: any) => (
  <LogoComponent {...props} fill={useColorModeValue("gray.100", "#5fab49")} />
);
