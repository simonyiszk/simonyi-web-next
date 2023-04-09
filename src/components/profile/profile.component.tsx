import React from 'react';
import { Box, Image, Link, Text } from '@chakra-ui/react';
import type { ProfileType } from '../../types';
import { SocialIcon } from '../icons';

function Profile({ name, title, profilePicture, socials }: ProfileType) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="darkmode_regular"
      borderRadius="1rem"
      padding="1rem"
      gap="1rem"
      maxWidth="300px"
      width="100%"
    >
      <Box width="100%" height="100%" maxWidth="200px" maxHeight="200px">
        <Image
          src={profilePicture.url}
          alt={profilePicture.alt}
          objectFit="contain"
          width="100%"
          height="100%"
          lineHeight="200px"
          textAlign="center"
          borderRadius="50%"
          borderStyle="solid"
          borderWidth={2}
          borderColor="simonyi_zold"
        />
      </Box>

      <Text as="h2" align="center">
        {name}
      </Text>
      <Text fontSize="1.25rem" fontWeight="regular" align="center">
        {title}
      </Text>
      <Box display="flex" justifyContent="center" gap="1.75rem" mt="1.75rem" flexWrap="wrap">
        {socials.map((social, index) => (
          <Link href={social.link.url} title={social.link.title} target="_blank" key={index}>
            <SocialIcon iconName={social.icon} props={{ boxSize: '1.5rem', fill: 'simonyi_zold' }} />
          </Link>
        ))}
      </Box>
    </Box>
  );
}

export { Profile };
