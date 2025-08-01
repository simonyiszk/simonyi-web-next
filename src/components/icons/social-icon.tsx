import { SVGProps } from 'react'
import { SocialIconType } from '~/@types'
import { EmailIcon } from './social/email-icon'
import { FacebookIcon } from './social/facebook-icon'
import { GitHubIcon } from './social/github-icon'
import { GlobeIcon } from './social/globe-icon'
import { InstagramIcon } from './social/instagram-icon'
import { LinkedInIcon } from './social/linkedin-icon'
import { PhoneIcon } from './social/phone-icon'
import { TikTokIcon } from './social/tiktok-icon'
import { YouTubeIcon } from './social/youtube-icon'

export function SocialIcon({
  iconName,
  props,
}: {
  iconName: string
  props?: SVGProps<SVGSVGElement>
}) {
  switch (iconName.toLocaleLowerCase() as SocialIconType) {
    case 'email':
      return <EmailIcon {...props} />
    case 'facebook':
      return <FacebookIcon {...props} />
    case 'github':
      return <GitHubIcon {...props} />
    case 'instagram':
      return <InstagramIcon {...props} />
    case 'linkedin':
      return <LinkedInIcon {...props} />
    case 'phone':
      return <PhoneIcon {...props} />
    case 'youtube':
      return <YouTubeIcon {...props} />
    case 'tiktok':
      return <TikTokIcon {...props} />
    default:
      return <GlobeIcon {...props} />
  }
}
