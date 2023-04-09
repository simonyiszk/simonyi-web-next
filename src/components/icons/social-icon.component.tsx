import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';
import { TikTokIcon } from './social';
import { EmailIcon, FacebookIcon, GitHubIcon, GlobeIcon, InstagramIcon, LinkedInIcon, PhoneIcon, YouTubeIcon } from '../icons';
import { SocialIconType } from '../../types';

function SocialIcon({ iconName, props }: { iconName: string; props?: IconProps }) {
  switch (iconName.toLocaleLowerCase() as SocialIconType) {
    case 'email':
      return <Icon as={EmailIcon} {...props} />;
    case 'facebook':
      return <Icon as={FacebookIcon} {...props} />;
    case 'github':
      return <Icon as={GitHubIcon} {...props} />;
    case 'instagram':
      return <Icon as={InstagramIcon} {...props} />;
    case 'linkedin':
      return <Icon as={LinkedInIcon} {...props} />;
    case 'phone':
      return <Icon as={PhoneIcon} {...props} />;
    case 'youtube':
      return <Icon as={YouTubeIcon} {...props} />;
    case 'tiktok':
      return <Icon as={TikTokIcon} {...props} />;
    default:
      return <Icon as={GlobeIcon} {...props} />;
  }
}

export { SocialIcon };
