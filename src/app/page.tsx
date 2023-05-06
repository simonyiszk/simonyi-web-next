import { about, groups, images, profiles } from '~/utils';
import { HomeAbout, HomeGreeting, HomePresidency } from '~/components/app/home';
import HomeStudentGroups from '~/components/app/home/home-student-groups';

export default function Page() {
  return (
    <>
      <HomeGreeting />
      <div className="max-w-[1492px] mx-auto p-8 flex flex-col gap-[calc(80px+2rem)] pb-[calc(80px+2rem)]">
        <div />
        <HomeAbout about={about} images={images} />
        <HomeStudentGroups groups={groups} />
        <HomePresidency profiles={profiles} />
      </div>
    </>
  );
}
