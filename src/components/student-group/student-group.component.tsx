'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import type { StudentGroupType } from '~/@types';
import { ChevronIcon, SocialIcon } from '..';

function StudentGroup({ name, logo, description, socials = [], isDense = false }: StudentGroupType & { isDense?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    //if (!isMobile) return;
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex max-w-full flex-col items-center justify-between gap-8 rounded-2xl bg-darkmode_regular p-5 md:max-w-[45%] lg:max-w-[31%]">
      <div className="flex w-full flex-col items-center gap-8">
        <div
          className="flex w-full flex-row items-center justify-between gap-8 hover:cursor-pointer md:hover:cursor-auto"
          onClick={(e) => handleToggle(e)}
        >
          <h3 className="w-full text-left font-heading text-h3 md:text-center">{name}</h3>
          <div className={`block p-2 md:hidden ${isOpen ? '-scale-y-100' : 'scale-y-100'}`}>
            <ChevronIcon
              className={`inline-block w-4 fill-light align-middle leading-6 ${isOpen ? 'fill-simonyi_sarga' : 'fill-simonyi_zold'}`}
            />
          </div>
        </div>
        <>
          <div className={`${isOpen ? 'block' : 'hidden md:block'} relative h-[100px] w-full max-w-[250px]`}>
            <Image src={logo.url} alt={logo.alt} fill />
          </div>
          <div className={`${isOpen ? 'block' : 'hidden md:block'}`}>
            <p className="font-body">{description}</p>
          </div>
        </>
      </div>
      <div
        className={`${isOpen ? 'flex' : 'hidden md:flex'} w-full flex-wrap justify-center ${isDense ? 'md:justify-evenly' : ''} gap-5 ${
          isDense ? 'gap-5 md:gap-0' : ''
        }`}
      >
        {socials.map((social, index) => (
          <a
            href={social.link.url}
            title={social.link.title}
            target="_blank"
            key={index}
            className="rounded-md bg-simonyi_zold px-[13px] py-[7px] hover:opacity-75"
            rel="noreferrer"
          >
            <SocialIcon iconName={social.icon} props={{ className: 'w-4 h-4 my-[1px] fill-white' }} />
          </a>
        ))}
      </div>
    </div>
  );
}

export { StudentGroup };
