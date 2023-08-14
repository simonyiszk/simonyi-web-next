import { HomeAbout, HomeGreeting, HomePresidency, HomeStudentGroups, HomeSubpages, HomeFooter } from '~/components';
import { getAbout, getFooter, getLightbox, getProfiles, getStudentGroups } from '~/utils';
import { Locales } from '~/@types';

export const dynamic = 'force-static';

async function getData() {
  const locale: Locales = 'hu';

  const about = await getAbout(locale);
  const lightbox = await getLightbox(locale);
  const groups = await getStudentGroups(locale);
  const profiles = await getProfiles(locale);
  const footer = await getFooter(locale);

  return { about, lightbox, groups, profiles, footer };
}

export default async function Page() {
  const { about, lightbox, groups, profiles, footer } = await getData();

  return (
    <>
      <HomeGreeting />
      <div className="max-w-home mx-auto p-8 flex flex-col gap-[calc(80px+2rem)] pb-[calc(80px+2rem)]">
        <div />
        <HomeSubpages />
        <HomeAbout about={about} images={lightbox} />
        <HomeStudentGroups groups={groups} />
        <HomePresidency profiles={profiles} />
      </div>
      <HomeFooter data={footer} />
    </>
  );
}
