import Image from 'next/image';
import type { ProfileType } from '~/@types';
import { SocialIcon } from '..';

function Profile({ name, title, profilePicture, socials }: ProfileType) {
  return (
    <div className="flex w-full max-w-[300px] flex-col items-center gap-4 rounded-2xl bg-darkmode_regular p-4">
      <div className="relative h-[200px] w-full max-w-[200px]">
        <Image
          src={profilePicture.url}
          alt={profilePicture.alt}
          fill
          className="rounded-[50%] border-2 border-solid border-simonyi_zold object-cover text-center leading-[200px]"
          sizes="200px"
        />
      </div>

      <h2 className="text-center font-heading text-h2">{name}</h2>
      <p className="text-center font-body text-text leading-[30px]">{title}</p>
      <div className="mt-7 flex flex-wrap justify-center gap-7">
        {socials.map((social, index) => (
          <a href={social.link.url} title={social.link.title} target="_blank" key={index} rel="noreferrer" className=" hover:opacity-75">
            <SocialIcon iconName={social.icon} props={{ className: 'w-6 h-6 leading-4 inline-block align-middle fill-simonyi_zold' }} />
          </a>
        ))}
      </div>
    </div>
  );
}

export { Profile };
