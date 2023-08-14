import Image from 'next/image';
import { FooterDataType } from '~/@types';
import { contentfulDocumentToReactComponents } from '~/utils';
import { Link } from '..';
import { FooterSection } from '.';

function HomeFooter({ data }: { data: FooterDataType }) {
  return (
    <div className="flex flex-col items-center bg-darkmode_regular gap-8 p-8">
      <div className="flex flex-wrap flex-col sm:flex-row items-start max-w-home gap-16 pb-8 justify-evenly w-auto md:w-full">
        {data.sections.map((section, index) => (
          <FooterSection
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
