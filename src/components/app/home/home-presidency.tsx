import { Profile } from '~/components';
import { PresidencyType } from '~/@types';

export default function HomePresidency({ presidency }: { presidency: PresidencyType }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="self-center md:self-start">
        <h1 className="font-heading text-h1">{presidency.title}</h1>
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
  );
}
