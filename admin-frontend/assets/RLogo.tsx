import { useColorModeValue } from "@chakra-ui/react";
import { ReactComponent as LogoComponent } from "./svg/simonyi-full-light.svg";

export const RLogo = (props: any) => (
  <LogoComponent {...props} fill={useColorModeValue("gray.900", "gray.100")} />
);
