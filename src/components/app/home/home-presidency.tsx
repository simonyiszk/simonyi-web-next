import { PresidencyType } from '~/@types'
import { Profile } from '~/components/profile'
import { TypographyH1 } from '~/components/typography'

export function HomePresidency({ presidency }: { presidency: PresidencyType }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="self-center md:self-start">
        <TypographyH1>{presidency.title}</TypographyH1>
      </div>
      <div className="flex w-full flex-row flex-wrap justify-center gap-8 self-center">
        {presidency.profiles.map((profile, index) => (
          <Profile
            key={index}
            profilePicture={profile.profilePicture}
            name={profile.name}
            title={profile.title}
            socials={profile.socials}
          />
        ))}
      </div>
    </div>
  )
}
