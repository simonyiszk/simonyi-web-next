import { Box } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'
import {
  ChevronIcon,
  EmailIcon,
  FacebookIcon,
  GlobeIcon,
  IncreaseIcon,
  InstagramIcon,
  LinkedInIcon,
  PhoneIcon,
  YouTubeIcon
} from '../components/icons'
import { Profile } from '../components/profile'
import { SContainer } from '../components/_basics/SContainer'
import { SLayout } from '../components/_basics/SLayout'

function IconShowcase() {
  return (
    <Box display="flex" justifyContent="center">
      <Box display="flex" gap={4}>
        <ChevronIcon boxSize={8} fill="simonyi_zold" />
        <EmailIcon boxSize={8} fill="simonyi_zold" />
        <FacebookIcon boxSize={8} fill="simonyi_zold" />
        <GlobeIcon boxSize={8} fill="simonyi_zold" />
        <IncreaseIcon boxSize={8} fill="simonyi_zold" />
        <InstagramIcon boxSize={8} fill="simonyi_zold" />
        <LinkedInIcon boxSize={8} fill="simonyi_zold" />
        <PhoneIcon boxSize={8} fill="simonyi_zold" />
        <YouTubeIcon boxSize={8} fill="simonyi_zold" />
      </Box>
    </Box>
  )
}

function ProfileShowcase() {
  return (
    <Box display="flex" justifyContent="center">
      <Box display="flex" gap={4} flexWrap="wrap" justifyContent="center">
        {[1, 2, 3, 4, 5].map((i) => (
          <Profile
            key={i}
            name="Piller Trisztan"
            title="Elnok"
            profilePictureUrl="/profile.jpg"
            socials={[
              { socialIcon: 'email', url: 'email' },
              { socialIcon: 'phone', url: 'phone' },
              { socialIcon: 'facebook', url: 'facebook' },
              { socialIcon: 'instagram', url: 'instagram' },
              { socialIcon: 'linkedin', url: 'linkedin' }
            ]}
          />
        ))}
      </Box>
    </Box>
  )
}

export default function IndexPage() {
  return (
    <>
      <NextSeo canonical="https://simonyi.bme.hu" />
      <SLayout>
        <SContainer>
          <IconShowcase />
          <ProfileShowcase />
        </SContainer>
      </SLayout>
    </>
  )
}
