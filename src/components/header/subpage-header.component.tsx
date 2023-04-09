import { Box, HStack, Link } from '@chakra-ui/react';
import { SimonyiFullLightIcon } from '../icons';

function SubpageHeader() {
  return (
    <Box
      display="flex"
      columnGap={16}
      rowGap={8}
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      bgColor="darkmode_regular"
      p={8}
    >
      <SimonyiFullLightIcon width="10em" height="100%" />
      <HStack>
        <Link href="/">Kezdőlap</Link>
      </HStack>
    </Box>
  );
}

export { SubpageHeader };
