import { AboutType, LightboxImage } from '~/@types';
import { contentfulDocumentToReactComponents } from '~/utils';
import HomeAboutImageBrowser from './home-about-image-browser';

export default function HomeAbout({ about, images }: { about: AboutType; images: LightboxImage[] }) {
  return (
    <div className="flex flex-col">
      <h1 className="mb-8 font-heading text-h1">{about.title}</h1>
      <div className="grid grid-cols-1 gap-16 whitespace-pre-wrap lg:grid-cols-2">
        {contentfulDocumentToReactComponents(about.description)}
        <HomeAboutImageBrowser lightboxImages={images} />
      </div>
    </div>
  );
}
