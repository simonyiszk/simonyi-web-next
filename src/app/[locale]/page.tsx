import { PageProps } from "~/@types";
import { HomeAbout, HomeGreeting, HomePresidency, HomeStudentGroups, HomeSubpages, Footer } from "~/components";
import {
  getHomeAboutEntryFromCache,
  getFooterFromCache,
  getHeroFromCache,
  getLightboxFromCache,
  getPresidencyFromCache,
  getCurrentStudentGroupsFromCache,
} from "~/utils";

export const dynamic = "force-static";

async function getData({ params: { locale } }: PageProps) {

  const hero = await getHeroFromCache(locale);
  const about = await getHomeAboutEntryFromCache(locale);
  const lightbox = await getLightboxFromCache(locale);
  const currentStudentGroups = await getCurrentStudentGroupsFromCache(locale);
  const presidency = await getPresidencyFromCache(locale);
  const footer = await getFooterFromCache(locale);

  return { hero, about, lightbox, currentStudentGroups, presidency, footer };
}

export default async function Page(props: PageProps) {
  const { hero, about, lightbox, currentStudentGroups, presidency, footer } = await getData(props);

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
