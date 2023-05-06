import { images as tempImages } from '~/utils';
import { AboutType } from '~/types';
import HomeAboutImageBrowser from './home-about-image-browser';

export default function HomeAbout({ about, images }: { about: AboutType; images: typeof tempImages }) {
  return (
    <div className="flex flex-col">
      <h1 className="mb-8 text-h1 font-heading">{about.title}</h1>
      <div className="grid gap-16 grid-cols-1 lg:grid-cols-2">
        <p className="font-body">
          {about.text} <a href={about.wikiUrl}>(Wikipédia)</a>
        </p>
        <HomeAboutImageBrowser images={images} />
      </div>
    </div>
  );
}
