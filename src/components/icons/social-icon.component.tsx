import { SVGProps } from 'react';
import { SocialIconType } from '~/@types';
import { EmailIcon, FacebookIcon, GitHubIcon, GlobeIcon, InstagramIcon, LinkedInIcon, PhoneIcon, YouTubeIcon } from '../icons';
import { TikTokIcon } from './social';

function SocialIcon({ iconName, props }: { iconName: string; props?: SVGProps<SVGSVGElement> }) {
  switch (iconName.toLocaleLowerCase() as SocialIconType) {
    case 'email':
      return <EmailIcon {...props} />;
    case 'facebook':
      return <FacebookIcon {...props} />;
    case 'github':
      return <GitHubIcon {...props} />;
    case 'instagram':
      return <InstagramIcon {...props} />;
    case 'linkedin':
      return <LinkedInIcon {...props} />;
    case 'phone':
      return <PhoneIcon {...props} />;
    case 'youtube':
      return <YouTubeIcon {...props} />;
    case 'tiktok':
      return <TikTokIcon {...props} />;
    default:
      return <GlobeIcon {...props} />;
  }
}

export { SocialIcon };
