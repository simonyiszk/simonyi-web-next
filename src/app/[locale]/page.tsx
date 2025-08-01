import { setRequestLocale } from "next-intl/server";
import { PageProps, ParamsType } from "~/@types";
import { HomeAbout, HomeGreeting, HomePresidency, HomeStudentGroups, HomeSubpages, Footer } from "~/components";
import {
  query,
} from "~/utils";

async function getData({locale}: ParamsType) {

  const hero = await query.homeHero(locale);
  const about = await query.homeAbout(locale);
  const lightbox = await query.lightbox(locale);
  const currentStudentGroups = await query.currentClubs(locale);
  const presidency = await query.presidency(locale);
  const footer = await query.footer(locale);

  return { hero, about, lightbox, currentStudentGroups, presidency, footer };
}

export default async function Page(props: PageProps) {
  const params = await props.params;

  setRequestLocale(params.locale);
  const { hero, about, lightbox, currentStudentGroups, presidency, footer } = await getData(params);

  return (
    <>
      <HomeGreeting heroImage={hero} currentLocale={params.locale} />
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
