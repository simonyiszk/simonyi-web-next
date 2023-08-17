import { Profile } from '~/components';
import { ProfileType } from '~/@types';
import { useTranslations } from 'next-intl';

export default function HomePresidency({ profiles }: { profiles: Array<ProfileType> }) {
  const t = useTranslations('home');
  return (
    <div className="flex flex-col gap-8">
      <div className="self-center md:self-start">
        <h1 className="font-heading text-h1">{t('presidency')}</h1>
      </div>
      <div className="flex w-full flex-row flex-wrap justify-center gap-8 self-center">
        {profiles.map((profile, index) => (
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
  );
}
