import React, { useState } from 'react';
import { Box, Link, Text, Image, useBreakpointValue } from '@chakra-ui/react';
import { ChevronIcon, SocialIcon } from '../icons';
import type { StudentGroupType } from '../../types';

function StudentGroup({ name, logo, description, socials = [], isDense = false }: StudentGroupType & { isDense?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: false }) as boolean;

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isMobile) return;
    setIsOpen(!isOpen);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      borderRadius="1rem"
      gap="2rem"
      justifyContent="space-between"
      padding="1.25rem"
      bg="darkmode_regular"
      maxWidth={{ base: '100%', md: '45%', lg: '31%' }}
    >
      <Box width="100%" display="flex" flexDirection="column" alignItems="center" gap="2rem">
        <Box
          width="100%"
          display="flex"
          flexDirection="row"
          alignItems="center"
          gap="2rem"
          justifyContent="space-between"
          _hover={{ cursor: { base: 'pointer', md: 'auto' } }}
          onClick={(e) => handleToggle(e)}
        >
          <Text as="h3" width="full" textAlign={{ base: 'left', md: 'center' }}>
            {name}
          </Text>
          {isMobile && (
            <Box p="0.5rem" transform={isOpen ? 'scaleY(-1)' : 'scaleY(1)'}>
              <ChevronIcon fill={isOpen ? 'simonyi_sarga' : 'simonyi_zold'} />
            </Box>
          )}
        </Box>
        {(!isMobile || isOpen) && (
          <>
            <Box height="100px">
              <Image src={logo.url} alt={logo.alt} height="100%" maxWidth="250px" />
            </Box>
            <Box>
              <Text>{description}</Text>
            </Box>
          </>
        )}
      </Box>
      {(!isMobile || isOpen) && (
        <Box
          width="100%"
          display="flex"
          justifyContent={isDense && !isMobile ? 'space-evenly' : 'center'}
          gap={isDense && !isMobile ? 'auto' : '1.25rem'}
          flexWrap="wrap"
        >
          {socials.map((social, index) => (
            <Link
              href={social.link.url}
              title={social.link.title}
              target="_blank"
              key={index}
              px="13px"
              py="6px"
              bgColor="simonyi_zold"
              borderRadius="6px"
            >
              <SocialIcon iconName={social.icon} props={{ boxSize: 4, fill: 'white' }} />
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
}

export { StudentGroup };
