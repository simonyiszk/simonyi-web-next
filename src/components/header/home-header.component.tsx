import React from 'react';
import Image from 'next/image';
import { Box, Link } from '@chakra-ui/react';

function HomeHeader() {
  return (
    <Box display="flex" columnGap={16} rowGap={8} justifyContent="center" alignItems="center" flexWrap="wrap" p={8}>
      <Link href="http://www.bme.hu/" target="_blank">
        <Image src="/images/bme/bme.png" alt="Logo of BME" height={50} width={188} />
      </Link>
      <Link href="http://www.vik.bme.hu/" target="_blank">
        <Image src="/images/bme/vik.png" alt="Logo of BME VIK" height={50} width={50} />
      </Link>
      <Link href="https://svie.hu/" target="_blank" width={{ base: 'auto', md: '188px' }}>
        <Image src="/images/bme/schonherz.png" alt="Logo of Schonherz" height={50} width={160} />
      </Link>
    </Box>
  );
}

export { HomeHeader };
