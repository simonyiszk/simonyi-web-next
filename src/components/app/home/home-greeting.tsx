import Image from 'next/image';
import { Button, ChevronIcon, HeaderHome, SimonyiFullLightIcon } from '~/components';

export default function HomeGreeting() {
  return (
    <div className="min-h-screen">
      <div className="-z-10 absolute top-0 left-0 bg-black w-full max-w-full h-screen max-h-full blur-home flex">
        <Image src="/images/hero/default.png" alt="Hero image" fill priority style={{ objectFit: 'cover' }} />
      </div>
      <div className="flex flex-col min-h-screen justify-between items-center pb-[calc(80px+2rem)]">
        <HeaderHome />
        <div className="flex flex-col gap-8">
          <div className="max-w-[353px] max-h-[75px] m-8">
            <SimonyiFullLightIcon width="100%" height="100%" filter="drop-shadow(0 4px 8px rgb(0, 0, 0, 0.6))" />
          </div>
          <div className="flex flex-row flex-wrap justify-evenly gap-8">
            <a href="https://tanfolyam.simonyi.bme.hu/" title="tanfolyam.simonyi.bme.hu" target="_blank" rel="noreferrer">
              <Button>Tanfolyam</Button>
            </a>
            <a href="https://termek.sch.bme.hu/" title="termek.sch.bme.hu" target="_blank" rel="noreferrer">
              <Button>Bérlés</Button>
            </a>
          </div>
        </div>
        <div className="h-6">
          <ChevronIcon className="w-4 leading-6 fill-light align-middle inline-block" />
        </div>
      </div>
    </div>
  );
}
