import Image from "next/image";

function HeaderHome() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8 p-8">
      <a className="relative h-[50px] w-[188px] hover:opacity-75" href="http://www.bme.hu/" target="_blank" rel="noreferrer">
        <Image src="/images/bme/bme.png" alt="Logo of BME" fill sizes="188px" priority />
      </a>
      <a className="relative h-[50px] w-[50px] hover:opacity-75" href="http://www.vik.bme.hu/" target="_blank" rel="noreferrer">
        <Image src="/images/bme/vik.png" alt="Logo of BME VIK" fill sizes="50px" />
      </a>
      <a className="w-auto hover:opacity-75 md:w-[188px]" href="https://svie.hu/" target="_blank" rel="noreferrer">
        <div className="relative h-[50px] w-[160px]">
          <Image src="/images/bme/schonherz.png" alt="Logo of Schonherz" fill sizes="188px" />
        </div>
      </a>
    </div>
  );
}

export { HeaderHome };
