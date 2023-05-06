import { about, groups, images, profiles } from '~/utils';
import { HomeAbout, HomeGreeting, HomePresidency, HomeStudentGroups, HomeSubpages } from '~/components/app/home';
import { HomeFooter } from '~/components';

export default function Page() {
  return (
    <>
      <HomeGreeting />
      <div className="max-w-home mx-auto p-8 flex flex-col gap-[calc(80px+2rem)] pb-[calc(80px+2rem)]">
        <div />
        <HomeSubpages />
        <HomeAbout about={about} images={images} />
        <HomeStudentGroups groups={groups} />
        <HomePresidency profiles={profiles} />
      </div>
      <HomeFooter />
    </>
  );
}
