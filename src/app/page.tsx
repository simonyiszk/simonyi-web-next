import { HomeAbout, HomeGreeting, HomePresidency, HomeStudentGroups, HomeSubpages, Footer } from '~/components';
import {
  getHomeAboutEntryFromCache,
  getFooterFromCache,
  getHeroFromCache,
  getLightboxFromCache,
  getPresidencyFromCache,
  getCurrentStudentGroupsFromCache
} from '~/utils';
import { Locales } from '~/@types';

export const dynamic = 'force-static';

async function getData() {
  const locale: Locales = 'hu';

  const hero = await getHeroFromCache(locale);
  const about = await getHomeAboutEntryFromCache(locale);
  const lightbox = await getLightboxFromCache(locale);
  const currentStudentGroups = await getCurrentStudentGroupsFromCache(locale);
  const presidency = await getPresidencyFromCache(locale);
  const footer = await getFooterFromCache(locale);

  return { hero, about, lightbox, currentStudentGroups, presidency, footer };
}

export default async function Page() {
  const { hero, about, lightbox, currentStudentGroups, presidency, footer } = await getData();

  return (
    <>
      <HomeGreeting heroImage={hero} />
      <div className="mx-auto flex max-w-home flex-col gap-[calc(80px+2rem)] p-8 pb-[calc(80px+2rem)]">
        <div />
        <HomeSubpages />
        <HomeAbout about={about} images={lightbox} />
        <HomeStudentGroups currentStudentGroups={currentStudentGroups} />
        <HomePresidency presidency={presidency} />
      </div>
      <Footer data={footer} />
    </>
  );
}
