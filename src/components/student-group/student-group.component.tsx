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
    <div className="flex flex-col items-center justify-between rounded-2xl gap-8 p-5 bg-darkmode_regular max-w-full md:max-w-[45%] lg:max-w-[31%]">
      <div className="w-full flex flex-col items-center gap-8">
        <div
          className="w-full flex flex-row items-center gap-8 justify-between hover:cursor-pointer md:hover:cursor-auto"
          onClick={(e) => handleToggle(e)}
        >
          <h3 className="font-heading text-h3 w-full text-left md:text-center">{name}</h3>
          <div className={`block md:hidden p-2 ${isOpen ? '-scale-y-100' : 'scale-y-100'}`}>
            <ChevronIcon
              className={`w-4 leading-6 fill-light align-middle inline-block ${isOpen ? 'fill-simonyi_sarga' : 'fill-simonyi_zold'}`}
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
        className={`${isOpen ? 'flex' : 'hidden md:flex'} flex-wrap w-full justify-center ${isDense ? 'md:justify-evenly' : ''} gap-5 ${
          isDense ? 'gap-5 md:gap-0' : ''
        }`}
      >
        {socials.map((social, index) => (
          <a
            href={social.link.url}
            title={social.link.title}
            target="_blank"
            key={index}
            className="bg-simonyi_zold px-[13px] py-[7px] rounded-md hover:opacity-75"
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
