import { HomeAbout, HomeGreeting, HomePresidency, HomeStudentGroups, HomeSubpages, Footer } from '~/components';
import {
  getAboutFromCache,
  getFooterFromCache,
  getHeroFromCache,
  getLightboxFromCache,
  getProfilesFromCache,
  getStudentGroupsFromCache
} from '~/utils';

export const dynamic = 'force-static';

type ParamsType = {
  lang: string;
};

async function getData({ lang }: ParamsType) {
  const hero = await getHeroFromCache(lang);
  const about = await getAboutFromCache(lang);
  const lightbox = await getLightboxFromCache(lang);
  const groups = await getStudentGroupsFromCache(lang);
  const profiles = await getProfilesFromCache(lang);
  const footer = await getFooterFromCache(lang);

  return { hero, about, lightbox, groups, profiles, footer };
}

export default async function Page({ params }: { params: ParamsType }) {
  const { hero, about, lightbox, groups, profiles, footer } = await getData(params);

  return (
    <>
      <HomeGreeting heroImage={hero} />
      <div className="max-w-home mx-auto p-8 flex flex-col gap-[calc(80px+2rem)] pb-[calc(80px+2rem)]">
        <div />
        <HomeSubpages />
        <HomeAbout about={about} images={lightbox} />
        <HomeStudentGroups groups={groups} />
        <HomePresidency profiles={profiles} />
      </div>
      <Footer data={footer} />
    </>
  );
}
