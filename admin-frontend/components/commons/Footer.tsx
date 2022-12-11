import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { RLogoSimple } from "../../assets/RLogoSimple";
import { RLink } from "./RLink";

export const Footer = () => (
  <Box as="footer">
    <Container
      py={8}
      as={Flex}
      justifyContent="space-between"
      direction={{ base: "column", sm: "row" }}
      maxW="6xl"
    >
      <Flex
        mb={{ base: 4, sm: 0 }}
        justifyContent={{ base: "center", sm: "flex-start" }}
      >
        <Box height="3.25rem" width="3.25rem" mr={4}>
          <RLogoSimple />
        </Box>
        <Flex direction="column">
          <Text fontWeight={700}>Simonyi Adminisztrációs Portál</Text>
          <Text>
            Blog:{" "}
            <RLink isExternal to="https://simonyi.bme.hu">
              simonyi.bme.hu
            </RLink>
          </Text>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        justifyContent={{ base: "center", sm: "flex-end" }}
      >
        <Text mt={2} textAlign={{ base: "center", sm: "right" }}>
          &copy; {new Date().getFullYear()} •{" "}
          <RLink isExternal to="https://schdesign.hu">
            schdesign
          </RLink>{" "}
          x{" "}
          <RLink isExternal to="https://kir-dev.hu">
            Kir-Dev
          </RLink>
        </Text>
      </Flex>
    </Container>
  </Box>
);
