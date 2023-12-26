import Image from "next/image";
import { useTranslations } from "next-intl";
import { FooterType } from "~/@types";
import { contentfulDocumentToReactComponents } from "~/utils";
import { Link } from "..";
import { Typography } from "../typography";
import { FooterSection } from ".";

function Footer({ data }: { data: FooterType }) {
  const t = useTranslations("pages.home");

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
          title={t("bmeAlt")}
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/images/bme/bme.png" alt={t("bmeAlt")} fill sizes="225px" />
        </Link>
        <Link
          className="relative h-[60px] w-[60px] hover:opacity-75"
          href="http://www.vik.bme.hu/"
          title={t("vikAlt")}
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/images/bme/vik.png" alt={t("vikAlt")} fill sizes="60px" />
        </Link>
        <Link
          className="w-auto hover:opacity-75 md:w-[225px]"
          href="https://svie.hu/"
          title={t("schonherzAlt")}
          target="_blank"
          rel="noreferrer"
        >
          <div className="relative h-[60px] w-[192px]">
            <Image src="/images/bme/schonherz.png" alt={t("schonherzAlt")} fill sizes="192px" />
          </div>
        </Link>
      </div>
      {data.github && (
        <Link href={data.github.url} title={data.github.title}>
          <Typography className="text-center">{data.github.text}</Typography>
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
