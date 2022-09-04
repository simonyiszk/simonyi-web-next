import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Flex } from '@chakra-ui/react'

type Props = {
  onClick: () => void
}

export const CookieConsentPopup = ({ onClick }: Props) => (
  <Box maxWidth="80rem" mx="auto" p={2}>
    <Alert display={{ base: 'block', md: 'flex' }} colorScheme="themeHelper" variant="solid" borderRadius={6} width="full">
      <Flex flex={1}>
        <AlertIcon alignSelf="flex-start" />
        <Box>
          <AlertTitle>Please accept our cookies</AlertTitle>
          <AlertDescription display="block">
            We're using cookies on this site for your comfort. By using the site, you consent to us using cookies.
          </AlertDescription>
        </Box>
      </Flex>
      <Flex justifyContent="flex-end">
        <Button colorScheme="blackAlpha" onClick={onClick} ml={2} mt={{ base: 2, md: 0 }}>
          I understand
        </Button>
      </Flex>
    </Alert>
  </Box>
)
