import Image from 'next/image';
import { ReactNode } from 'react';
import { FooterDataType, LinkType } from '~/@types';
import { contentfulDocumentToReactComponents } from '~/utils';
import { Link } from '../link';

function Section({ title, links, address }: { title: string; links: LinkType[]; address?: ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="pb-4 text-h2 font-heading">{title}</h2>
      {links.map((link, index) => (
        <Link key={index} className="text-simonyi_zold font-body" href={link.url} title={link.title} target="_blank" rel="noreferrer">
          {link.title}
        </Link>
      ))}
      {address && <div className="mt-4 font-body whitespace-pre-wrap">{address}</div>}
    </div>
  );
}

function HomeFooter({ data }: { data: FooterDataType }) {
  return (
    <div className="flex flex-col items-center bg-darkmode_regular gap-8 p-8">
      <div className="flex flex-wrap flex-col sm:flex-row items-start max-w-home gap-16 pb-8 justify-evenly w-auto md:w-full">
        {data.sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            links={section.links}
            address={section.address ? contentfulDocumentToReactComponents(section.address) : undefined}
          />
        ))}
      </div>
      <div className="flex flex-wrap flex-col md:flex-row items-center gap-8">
        <Link className="h-[60px] w-[225px] relative" href="http://www.bme.hu/" target="_blank" rel="noreferrer">
          <Image src="/images/bme/bme.png" alt="Logo of BME" fill sizes="225px" />
        </Link>
        <Link className="h-[60px] w-[60px] relative" href="http://www.vik.bme.hu/" target="_blank" rel="noreferrer">
          <Image src="/images/bme/vik.png" alt="Logo of BME VIK" fill sizes="60px" />
        </Link>
        <Link className="w-auto md:w-[225px]" href="https://svie.hu/" target="_blank" rel="noreferrer">
          <div className="h-[60px] w-[192px] relative">
            <Image src="/images/bme/schonherz.png" alt="Logo of Schonherz" fill sizes="192px" />
          </div>
        </Link>
      </div>
      <Link href="https://github.com/simonyiszk/simonyi-web-next">
        <p className="text-center font-body">github.com/simonyiszk/simonyi-web-next</p>
      </Link>
    </div>
  );
}

export { HomeFooter };
