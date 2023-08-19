import { PageProps } from '~/@types';
import { HomeAbout, HomeGreeting, HomePresidency, HomeStudentGroups, HomeSubpages, Footer } from '~/components';
import {
  getAboutFromCache,
  getFooterFromCache,
  getHeroFromCache,
  getLightboxFromCache,
  getProfilesFromCache,
  getStudentGroupsFromCache
} from '~/utils';

export const dynamic = 'force-dynamic';

async function getData({ params: { locale } }: PageProps) {
  const hero = await getHeroFromCache(locale);
  const about = await getAboutFromCache(locale);
  const lightbox = await getLightboxFromCache(locale);
  const groups = await getStudentGroupsFromCache(locale);
  const profiles = await getProfilesFromCache(locale);
  const footer = await getFooterFromCache(locale);

  return { hero, about, lightbox, groups, profiles, footer };
}

export default async function Page(props: PageProps) {
  const { hero, about, lightbox, groups, profiles, footer } = await getData(props);

  return (
    <>
      <HomeGreeting heroImage={hero} />
      <div className="mx-auto flex max-w-home flex-col gap-[calc(80px+2rem)] p-8 pb-[calc(80px+2rem)]">
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
