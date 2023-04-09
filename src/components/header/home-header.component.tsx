import React from 'react';
import Image from 'next/image';
import { Box, Link } from '@chakra-ui/react';

function HomeHeader() {
  return (
    <Box display="flex" columnGap={16} rowGap={8} justifyContent="center" alignItems="center" flexWrap="wrap" p={8}>
      <Link href="http://www.bme.hu/" target="_blank" height="50px" width="188px" position="relative">
        <Image src="/images/bme/bme.png" alt="Logo of BME" fill />
      </Link>
      <Link href="http://www.vik.bme.hu/" target="_blank" height="50px" width="50px" position="relative">
        <Image src="/images/bme/vik.png" alt="Logo of BME VIK" fill style={{ width: '100%' }} />
      </Link>
      <Link href="https://svie.hu/" target="_blank" width={{ base: 'auto', md: '188px' }} position="relative">
        <Box height="50px" width="160px">
          <Image src="/images/bme/schonherz.png" alt="Logo of Schonherz" fill />
        </Box>
      </Link>
    </Box>
  );
}

export { HomeHeader };
