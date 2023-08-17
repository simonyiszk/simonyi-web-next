import Image from 'next/image';
import type { ProfileType } from '~/@types';
import { SocialIcon } from '..';

function Profile({ name, title, profilePicture, socials }: ProfileType) {
  return (
    <div className="flex flex-col items-center bg-darkmode_regular rounded-2xl p-4 gap-4 max-w-[300px] w-full">
      <div className="w-full h-[200px] max-w-[200px] relative">
        <Image
          src={profilePicture.url}
          alt={profilePicture.alt}
          fill
          className="border-simonyi_zold border-solid rounded-[50%] text-center object-cover leading-[200px] border-2"
          sizes="200px"
        />
      </div>

      <h2 className="text-center text-h2 font-heading">{name}</h2>
      <p className="text-center text-text font-body leading-[30px]">{title}</p>
      <div className="flex justify-center gap-7 mt-7 flex-wrap">
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
