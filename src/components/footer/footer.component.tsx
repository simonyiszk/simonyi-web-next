import Image from 'next/image';
import { FooterType } from '~/@types';
import { contentfulDocumentToReactComponents } from '~/utils';
import { Link } from '..';
import { FooterSection } from '.';

function Footer({ data }: { data: FooterType }) {
  return (
    <div className="flex flex-col items-center gap-8 bg-darkmode_regular p-8">
      <div className="flex w-auto max-w-home flex-col flex-wrap items-start justify-evenly gap-16 pb-8 sm:flex-row md:w-full">
        {data.sections.map((section, index) => (
          <FooterSection
            key={index}
            title={section.title}
            links={section.links}
            address={section.address ? contentfulDocumentToReactComponents(section.address) : undefined}
          />
        ))}
      </div>
      <div className="flex flex-col flex-wrap items-center gap-8 md:flex-row">
        <Link
          className="relative h-[60px] w-[225px] hover:opacity-75"
          href="http://www.bme.hu/"
          title="Logo of BME"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/images/bme/bme.png" alt="Logo of BME" fill sizes="225px" />
        </Link>
        <Link
          className="relative h-[60px] w-[60px] hover:opacity-75"
          href="http://www.vik.bme.hu/"
          title="Logo of BME VIK"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/images/bme/vik.png" alt="Logo of BME VIK" fill sizes="60px" />
        </Link>
        <Link
          className="w-auto hover:opacity-75 md:w-[225px]"
          href="https://svie.hu/"
          title="Logo of Schönherz"
          target="_blank"
          rel="noreferrer"
        >
          <div className="relative h-[60px] w-[192px]">
            <Image src="/images/bme/schonherz.png" alt="Logo of Schönherz" fill sizes="192px" />
          </div>
        </Link>
      </div>
      {data.github && (
        <Link href={data.github.url} title={data.github.title}>
          <p className="text-center font-body">{data.github.text}</p>
        </Link>
      )}
      <a
        href="https://vercel.com?utm_source=kir-dev&utm_campaign=oss"
        target="_blank"
        rel="noopener noreferrer"
        className="relative mx-8 block h-8 w-40 text-white hover:opacity-75"
      >
        <Image src="/vercel.svg" fill alt="Logo of Vercel" />
      </a>
    </div>
  );
}

export { Footer };
