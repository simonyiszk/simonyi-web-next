import React from 'react';
import Image from 'next/image';
import { Box, Link, Text } from '@chakra-ui/react';

function HomeFooter() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" bgColor="darkmode_regular" p={8} gap={8}>
      <Box
        width={{ base: 'auto', md: '100%' }}
        maxWidth="1496px"
        display="flex"
        flexWrap="wrap"
        flexDirection={{ base: 'column', msm: 'row' }}
        alignItems={{ base: 'flex-start', md: 'flex-start' }}
        pb={8}
        gap={16}
        justifyContent="space-evenly"
      >
        <Box display="flex" flexDirection="column" gap={1}>
          <Text as="h2" pb={4}>
            Elérhetőség
          </Text>
          <Link color="simonyi_zold" href="mailto:info@simonyi.bme.hu" title="info@simonyi.bme.hu" target="_blank">
            info@simonyi.bme.hu
          </Link>
          <Text mt={4}>
            1117 Budapest,
            <br />
            Irinyi József utca 42, 1320
          </Text>
        </Box>
        <Box display="flex" flexDirection="column" gap={1}>
          <Text as="h2" pb={4}>
            Weboldalaink
          </Text>
          <Link color="simonyi_zold" href="https://konferencia.simonyi.bme.hu/" title="konferencia.simonyi.bme.hu" target="_blank">
            Simonyi Konferencia
          </Link>
          <Link color="simonyi_zold" href="https://tanfolyam.simonyi.bme.hu/" title="tanfolyam.simonyi.bme.hu" target="_blank">
            Simonyi tanfolyamok
          </Link>
          <Link color="simonyi_zold" href="https://termek.sch.bme.hu/" title="termek.sch.bme.hu" target="_blank">
            Terem- és eszközbérlés
          </Link>
          <Link
            color="simonyi_zold"
            href="https://old.simonyi.bme.hu/ntp2021/ntp2021.pdf"
            title="Nemzeti Tehetség Program 2021"
            target="_blank"
          >
            NTP-SZKOLL-21-0078
          </Link>
        </Box>
        <Box display="flex" flexDirection="column" gap={1}>
          <Text as="h2" pb={4}>
            Közösségi hálónk
          </Text>
          <Link color="simonyi_zold" href="https://www.facebook.com/simonyiszk" title="facebook.com/simonyiszk" target="_blank">
            Facebook oldal
          </Link>
          <Link color="simonyi_zold" href="https://www.instagram.com/simonyiszk/" title="instagram.com/simonyiszk" target="_blank">
            Instagram profil
          </Link>
          <Link color="simonyi_zold" href="https://www.youtube.com/@SimonyiSzakkoli" title="youtube.com/@SimonyiSzakkoli" target="_blank">
            YouTube csatorna
          </Link>
          <Link color="simonyi_zold" href="https://www.linkedin.com/company/simonyi/" title="linkedin.com/company/simonyi" target="_blank">
            LinkedIn profil
          </Link>
          <Link color="simonyi_zold" href="https://github.com/simonyiszk" title="github.com/simonyiszk" target="_blank">
            GitHub profil
          </Link>
        </Box>
      </Box>
      <Box display="flex" gap={8} flexWrap="wrap" alignItems="center" flexDirection={{ base: 'column', md: 'row' }}>
        <Link href="http://www.bme.hu/" target="_blank" height="60px" width="225px" position="relative">
          <Image src="/images/bme/bme.png" alt="Logo of BME" fill />
        </Link>
        <Link href="http://www.vik.bme.hu/" target="_blank" height="60px" width="60px" position="relative">
          <Image src="/images/bme/vik.png" alt="Logo of BME VIK" fill />
        </Link>
        <Link href="https://svie.hu/" target="_blank" width={{ base: 'auto', md: '225px' }}>
          <Box height="60px" width="192px" position="relative">
            <Image src="/images/bme/schonherz.png" alt="Logo of Schonherz" fill />
          </Box>
        </Link>
      </Box>
      <Link href="https://github.com/simonyiszk/simonyi-web-next">
        <Text align="center">github.com/simonyiszk/simonyi-web-next</Text>
      </Link>
    </Box>
  );
}

export { HomeFooter };
