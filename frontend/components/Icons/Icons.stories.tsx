import { Icon } from '@chakra-ui/react'
import type { Meta } from '@storybook/react'

import {
  BMEIcon,
  ChevronIcon,
  EmailIcon,
  FacebookIcon,
  GlobeIcon,
  IncreaseIcon,
  InstagramIcon,
  LinkedInIcon,
  PhoneIcon,
  SchonherzIcon,
  VIKIcon,
  YouTubeIcon
} from './'

const meta: Meta<typeof Icon> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Icons',
  component: Icon
}

export default meta

export const SocialMediaIcons = () => {
  return (
    <>
      <EmailIcon />
      <FacebookIcon />
      <GlobeIcon />
      <InstagramIcon />
      <LinkedInIcon />
      <PhoneIcon />
      <YouTubeIcon />
    </>
  )
}

export const NavigationIcons = () => {
  return (
    <>
      <ChevronIcon />
      <IncreaseIcon />
    </>
  )
}

export const BMEIcons = () => {
  return (
    <>
      <BMEIcon />
      <SchonherzIcon />
      <VIKIcon />
    </>
  )
}
