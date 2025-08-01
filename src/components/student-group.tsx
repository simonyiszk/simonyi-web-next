'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import type { StudentGroupType } from '~/@types'
import { TypographyBody, TypographyH3 } from '~/components/typography'
import { ChevronIcon } from '~/components/icons/chevron-icon'
import { SocialIcon } from '~/components/icons/social-icon'

export function StudentGroup({
  name,
  logo,
  description,
  socials = [],
  isDense = false,
}: StudentGroupType & { isDense?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    //if (!isMobile) return;
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex max-w-full flex-col items-center justify-between gap-8 rounded-2xl bg-darkmode_regular p-8 md:max-w-[45%] lg:max-w-[31%]">
      <div className="flex w-full flex-col items-center gap-8">
        <div
          className="flex w-full flex-row items-center justify-between gap-8 hover:cursor-pointer md:hover:cursor-auto"
          onClick={(e) => handleToggle(e)}>
          <TypographyH3 className="w-full text-left md:text-center">
            {name}
          </TypographyH3>
          <div
            className={`block p-2 md:hidden ${isOpen ? '-scale-y-100' : 'scale-y-100'}`}>
            <ChevronIcon
              className={`inline-block w-4 fill-light align-middle leading-6 ${isOpen ? 'fill-secondary' : 'fill-primary'}`}
            />
          </div>
        </div>
        <>
          <div
            className={`${isOpen ? 'block' : 'hidden md:block'} relative h-[100px] w-full max-w-[250px]`}>
            <Image src={logo.url} alt={logo.alt} fill />
          </div>
          <div
            className={`text-justify ${isOpen ? 'block' : 'hidden md:block'}`}>
            <TypographyBody>{description}</TypographyBody>
          </div>
        </>
      </div>
      <div
        className={`${isOpen ? 'flex' : 'hidden md:flex'} w-full flex-wrap justify-center ${isDense ? 'md:justify-evenly' : ''} gap-5 ${
          isDense ? 'gap-5 md:gap-0' : ''
        }`}>
        {socials.map((social, index) => (
          <a
            href={social.link.url}
            title={social.link.title}
            target="_blank"
            key={index}
            className="rounded-md bg-primary px-[13px] py-[7px] hover:opacity-75"
            rel="noreferrer">
            <SocialIcon
              iconName={social.icon}
              props={{ className: 'w-4 h-4 my-[1px] fill-white' }}
            />
          </a>
        ))}
      </div>
    </div>
  )
}
