"use client"

import Image from "next/image"
import type { StudentGroupType } from "~/@types"
import { TypographyBody, TypographyH3 } from "~/components/typography"
import { SocialIcon } from "~/components/icons/social-icon"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion"
import { Button } from "./button"
import { cn } from "~/utils/cn"

function ClubHeader({ name }: Pick<StudentGroupType, "name">) {
  return (
    <TypographyH3 asChild>
      <span>{name}</span>
    </TypographyH3>
  )
}

function ClubContent({
  description,
  logo,
  socials,
  isDense,
}: Pick<StudentGroupType, "description" | "logo" | "socials" | "isDense">) {
  return (
    <>
      <div className="relative h-[100px] w-full max-w-[250px] self-center">
        <Image src={logo.url} alt={logo.alt} fill />
      </div>
      <TypographyBody className="grow">{description}</TypographyBody>
      <div
        className={cn(
          "flex flex-row flex-wrap justify-center gap-5",
          isDense && "gap-0 md:justify-evenly",
        )}
      >
        {socials.map((social, index) => (
          <Button size="icon" asChild key={index}>
            <a
              href={social.link.url}
              title={social.link.title}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon iconName={social.icon} />
            </a>
          </Button>
        ))}
      </div>
    </>
  )
}

export function ClubCard({
  description,
  logo,
  name,
  socials,
  isDense,
  className,
}: StudentGroupType & {
  className?: string
}) {
  return (
    <div
      className={cn(
        "hidden grow flex-col rounded-2xl bg-darkmode_regular p-8 md:flex md:max-w-[45%] lg:max-w-[31%]",
        className,
      )}
    >
      <div className="self-center">
        <ClubHeader name={name} />
      </div>
      <div className="mt-8 flex grow flex-col gap-8">
        <ClubContent
          description={description}
          logo={logo}
          socials={socials}
          isDense={isDense}
        />
      </div>
    </div>
  )
}

export function ClubAccordion({
  description,
  logo,
  name,
  socials,
  isDense,
  className,
}: StudentGroupType & {
  className?: string
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn(
        "flex grow flex-col rounded-2xl bg-darkmode_regular p-8 md:hidden",
        className,
      )}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <ClubHeader name={name} />
        </AccordionTrigger>
        <AccordionContent className="mt-8 flex flex-col gap-8">
          <ClubContent
            description={description}
            logo={logo}
            socials={socials}
            isDense={isDense}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
