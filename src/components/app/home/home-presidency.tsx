import { useTranslations } from "next-intl";
import { PresidencyType } from "~/@types";
import { Profile } from "~/components";

export default function HomePresidency({ presidency }: { presidency: PresidencyType }) {
  const t = useTranslations("home");
  return (
    <div className="flex flex-col gap-8">
      <div className="self-center md:self-start">
        <h1 className="font-heading text-h1">{t("presidency")}</h1>
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
