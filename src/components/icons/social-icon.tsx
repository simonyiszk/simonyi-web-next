import {
  FacebookIcon,
  GithubIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  YoutubeIcon,
} from "lucide-react"
import { SVGProps } from "react"
import { SocialIconType } from "~/@types"
import { TikTokIcon } from "./tiktok-icon"

type SocialIconProps = SVGProps<SVGSVGElement> & {
  iconName: SocialIconType
}

export function SocialIcon({ iconName, ...rest }: SocialIconProps) {
  switch (iconName) {
    case "email":
      return <MailIcon {...rest} />
    case "facebook":
      return <FacebookIcon {...rest} />
    case "github":
      return <GithubIcon {...rest} />
    case "instagram":
      return <InstagramIcon {...rest} />
    case "linkedin":
      return <LinkedinIcon {...rest} />
    case "phone":
      return <PhoneIcon {...rest} />
    case "youtube":
      return <YoutubeIcon {...rest} />
    case "tiktok":
      return <TikTokIcon {...rest} />
    default:
      return <GlobeIcon {...rest} />
  }
}
