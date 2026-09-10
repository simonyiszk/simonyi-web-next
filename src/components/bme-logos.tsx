import { useTranslations } from "next-intl"
import Image from "next/image"

export function BmeLogos() {
  const t = useTranslations("pages.home")

  return (
    <>
      <a
        className="relative h-[50px] w-[188px] drop-shadow-sm drop-shadow-black transition-all duration-200 hover:opacity-75"
        title={t("bmeAlt")}
        href="http://www.bme.hu/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/images/bme/bme.png"
          alt={t("bmeAlt")}
          width={242}
          height={50}
        />
      </a>
      <a
        className="relative h-[50px] w-[50px] drop-shadow-sm drop-shadow-black transition-all duration-200 hover:opacity-75"
        title={t("vikAlt")}
        href="http://www.vik.bme.hu/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/images/bme/vik.png"
          alt={t("vikAlt")}
          width={195}
          height={50}
        />
      </a>
      <a
        className="relative h-[50px] w-[188px] drop-shadow-sm drop-shadow-black transition-all duration-200 hover:opacity-75"
        title={t("schonherzAlt")}
        href="https://svie.hu/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/images/bme/schonherz.png"
          alt={t("schonherzAlt")}
          width={160}
          height={50}
        />
      </a>
      <a
        className="relative h-[50px] w-[188px] drop-shadow-sm drop-shadow-black transition-all duration-200 hover:opacity-75"
        title={t("ujbudaAlt")}
        href="https://ujbuda.hu/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/images/bme/ujbuda.png"
          alt={t("ujbudaAlt")}
          width={171}
          height={50}
        />
      </a>
      <a
        className="relative h-[50px] w-[188px] drop-shadow-sm drop-shadow-black transition-all duration-200 hover:opacity-75"
        title={t("miniszteriumAlt")}
        href="https://kormany.hu/kormanyzat/oktatasi-es-gyermekugyi-miniszterium"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/images/bme/miniszterium.png"
          alt={t("miniszteriumAlt")}
          width={109}
          height={50}
        />
      </a>
      <a
        className="relative h-[50px] w-[188px] drop-shadow-sm drop-shadow-black transition-all duration-200 hover:opacity-75"
        title={t("ntpAlt")}
        href="https://emet.gov.hu/kategoria/kiemelt-kategoriak/palyazatok/aktualis-felhivasok/nemzeti-tehetseg-program/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/images/bme/ntp.png"
          alt={t("ntpAlt")}
          width={140}
          height={50}
        />
      </a>
    </>
  )
}
