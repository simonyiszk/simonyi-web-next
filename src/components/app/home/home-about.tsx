import { AboutType, LightboxImage } from "~/@types";
import { contentfulDocumentToReactComponents } from "~/utils";
import { Typography } from "~/components";
import HomeAboutImageBrowser from "./home-about-image-browser";

export default function HomeAbout({ about, images }: { about: AboutType; images: LightboxImage[] }) {
  return (
    <div className="flex flex-col">
      {about.title && <Typography as="h1" variant="h1" className="mb-8">{about.title}</Typography>}
      <div className="grid grid-cols-1 gap-16 whitespace-pre-wrap lg:grid-cols-2 text-justify">
        {contentfulDocumentToReactComponents(about.description)}
        <HomeAboutImageBrowser lightboxImages={images} />
      </div>
    </div>
  );
}
