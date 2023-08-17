import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { ImageType } from '~/@types';
import { Button, ChevronIcon, HeaderHome, SimonyiDarkIcon } from '~/components';

export default function HomeGreeting({ heroImage }: { heroImage: ImageType }) {
  const t = useTranslations('home');

  return (
    <div className="min-h-screen">
      <div className="absolute left-0 top-0 -z-10 flex h-screen max-h-full w-full max-w-full bg-black blur-home">
        <Image src={heroImage.url} alt={heroImage.alt} fill priority style={{ objectFit: 'cover' }} />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between pb-[calc(80px+2rem)]">
        <HeaderHome />
        <div className="flex flex-col gap-8">
          <div className="m-8 max-h-[75px] max-w-[353px]">
            <SimonyiDarkIcon width="100%" height="100%" filter="drop-shadow(0 4px 8px rgb(0, 0, 0, 0.6))" />
          </div>
          <div className="flex flex-row flex-wrap justify-evenly gap-8">
            <a href="https://tanfolyam.simonyi.bme.hu/" title="tanfolyam.simonyi.bme.hu" target="_blank" rel="noreferrer">
              <Button>{t('course')}</Button>
            </a>
            <a href="https://termek.sch.bme.hu/" title="termek.sch.bme.hu" target="_blank" rel="noreferrer">
              <Button>{t('rent')}</Button>
            </a>
          </div>
        </div>
        <div className="h-6">
          <ChevronIcon className="inline-block w-4 fill-light align-middle leading-6" />
        </div>
      </div>
    </div>
  );
}
