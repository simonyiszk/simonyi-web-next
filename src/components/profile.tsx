import Image from "next/image"
import type { ProfileType } from "~/@types"
import { TypographyH2 } from "~/components/typography"
import { SocialIcon } from "~/components/icons/social-icon"
import { Button } from "./button"

export function Profile({ name, title, profilePicture, socials }: ProfileType) {
  return (
    <div className="flex w-full max-w-[300px] flex-col items-center gap-4 rounded-2xl bg-darkmode_regular p-4">
      <div className="relative h-[200px] w-full max-w-[200px]">
        <Image
          src={profilePicture.url}
          alt={profilePicture.alt}
          fill
          className="rounded-[50%] border-2 border-solid border-primary object-cover text-center leading-[200px]"
          sizes="200px"
        />
      </div>
      <TypographyH2 className="text-center">{name}</TypographyH2>
      <p className="text-center font-body text-body_large leading-[30px]">
        {title}
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-7">
        {socials.map((social, index) => (
          <Button key={index} asChild variant="transparent">
            <a
              href={social.link.url}
              title={social.link.title}
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon
                iconName={social.icon}
                className="inline-block text-white"
              />
            </a>
          </Button>
        ))}
      </div>
    </div>
  )
}
