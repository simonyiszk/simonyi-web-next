import { Profile } from '~/components';
import { ProfileType } from '~/@types';

export default function HomePresidency({ profiles }: { profiles: Array<ProfileType> }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="self-center md:self-start">
        <h1 className="text-h1 font-heading">Elnökség</h1>
      </div>
      <div className="flex flex-row gap-8 flex-wrap w-full justify-center self-center">
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
