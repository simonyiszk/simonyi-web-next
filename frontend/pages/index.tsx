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
import { SContainer } from '../components/_basics/SContainer'
import { SLayout } from '../components/_basics/SLayout'

export default function IndexPage() {
  return (
    <>
      <NextSeo canonical="https://simonyi.bme.hu" />
      <SLayout>
        <SContainer>
          <ChevronIcon boxSize="24" />
          <EmailIcon boxSize="24" />
          <FacebookIcon boxSize="24" />
          <GlobeIcon boxSize="24" />
          <IncreaseIcon boxSize="24" />
          <InstagramIcon boxSize="24" />
          <LinkedInIcon boxSize="24" />
          <PhoneIcon boxSize="24" />
          <YouTubeIcon boxSize="24" />
        </SContainer>
      </SLayout>
    </>
  )
}
