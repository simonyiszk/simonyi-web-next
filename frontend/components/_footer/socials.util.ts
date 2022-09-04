import { IconType } from 'react-icons'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { environment } from '../../utils/environment.config'

type SocialId = 'github' | 'youtube' | 'facebook' | 'insta' | 'twitter'

type SocialItem = {
  id: SocialId
  url: string
  Icon: IconType
  shortText: string
  longText: string
}

const SOCIALS: SocialItem[] = [
  {
    id: 'github',
    url: `https://github.com/${environment.socials.githubOrgId}`,
    Icon: FaGithub,
    shortText: 'GitHub',
    longText: 'GitHub szervezetünk'
  },
  {
    id: 'youtube',
    url: `https://youtube.com/c/${environment.socials.youtubeChannelId}`,
    Icon: FaYoutube,
    shortText: 'YouTube',
    longText: 'YouTube csatornánk'
  },
  {
    id: 'facebook',
    url: `https://facebook.com/${environment.socials.facebookPageId}`,
    Icon: FaFacebook,
    shortText: 'Facebook',
    longText: 'Facebook oldalunk'
  },
  {
    id: 'insta',
    url: `https://instagram.com/${environment.socials.instagramPageId}`,
    Icon: FaInstagram,
    shortText: 'Instagram',
    longText: 'Instagram oldalunk'
  },
  {
    id: 'twitter',
    url: `https://twitter.com/${environment.socials.twitterUsername}`,
    Icon: FaTwitter,
    shortText: 'Twitter',
    longText: 'Twitter oldalunk'
  }
]

export const getSocials = (socialIds: SocialId[] = []) => {
  if (socialIds.length === 0) return SOCIALS
  else return SOCIALS.filter((social) => socialIds.includes(social.id))
}
