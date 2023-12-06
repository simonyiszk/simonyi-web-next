import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AboutTimeline } from "~/components/app/about";
import { contentfulDocumentToReactComponents, getAboutEntriesFromCache, getTimelineEntriesFromCache } from "~/utils";

export const metadata: Metadata = {
  title: "Rólunk",
};

async function getData() {
  const aboutEntries = await getAboutEntriesFromCache();
  const timelineEntries = await getTimelineEntriesFromCache();

  if (!aboutEntries) {
    throw notFound();
  }

  return { before: aboutEntries.before, after: aboutEntries.after, timelineEntries };
}

export default async function AboutPage() {
  const { before, after, timelineEntries } = await getData();

  return (
    <div className="flex w-full max-w-home flex-col gap-8 self-center p-4">
      <div className="flex max-w-3xl flex-col self-center">
        {before.title && <h1 className="mb-10 text-center font-heading text-h1">{before.title}</h1>}
        {contentfulDocumentToReactComponents(before.description)}
      </div>
      <AboutTimeline timelineEntries={timelineEntries} />
      <div className="flex max-w-3xl flex-col self-center">{contentfulDocumentToReactComponents(after.description)}</div>
    </div>
  );
}
