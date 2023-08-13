import { AboutType, LightboxImage } from '~/types';
import HomeAboutImageBrowser from './home-about-image-browser';

export default function HomeAbout({ about, images }: { about: AboutType; images: LightboxImage[] }) {
  return (
    <div className="flex flex-col">
      <h1 className="mb-8 text-h1 font-heading">{about.title}</h1>
      <div className="grid gap-16 grid-cols-1 lg:grid-cols-2">
        <HomeAboutImageBrowser lightboxImages={images} />
      </div>
    </div>
  );
}
