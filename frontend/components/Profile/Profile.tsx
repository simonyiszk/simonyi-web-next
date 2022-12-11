import { Box, Image, Link, Text } from '@chakra-ui/react'
import { SocialIcon } from './SocialIcon'

function Profile({
  name,
  title,
  profilePictureUrl,
  socials
}: {
  name: string
  title: string
  profilePictureUrl: string
  socials: { socialIcon: string; url: string }[]
}) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      bg="darkmode_regular"
      borderRadius="16px"
      padding="16px"
      gap="16px"
      flex="0 0 20%"
    >
      <Image
        src={profilePictureUrl}
        alt={`Profile picture of ${name}`}
        width="200px"
        height="200px"
        borderRadius="50%"
        borderStyle="solid"
        borderWidth={2}
        borderColor="simonyi_zold"
      />
      <Text fontSize="24px" fontWeight="semibold">
        {name}
      </Text>
      <Text fontSize="20px" fontWeight="regular">
        {title}
      </Text>
      <Box display="flex" justifyContent="center" gap="28px" mt="28px">
        {socials.map((social) => (
          <Link href={social.url}>
            <SocialIcon iconName={social.socialIcon} props={{ boxSize: 8, fill: 'simonyi_zold' }} />
          </Link>
        ))}
      </Box>
    </Box>
  )
}

export { Profile }
