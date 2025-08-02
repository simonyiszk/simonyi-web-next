import { useTranslations } from "next-intl"
import Image from "next/image"
import { ImageType } from "~/@types"
import { Button } from "~/components/button"
import { HeaderHome } from "~/components/header/header-home"
import { SimonyiDarkIcon } from "~/components/icons/bme/simonyi/simonyi-dark-icon"
import { ChevronIcon } from "~/components/icons/chevron-icon"
import { Link } from "~/i18n/navigation"

export function HomeGreeting({
  heroImage,
  currentLocale,
}: {
  heroImage: ImageType
  currentLocale: string
}) {
  const t = useTranslations("pages.home")

  return (
    <div className="min-h-screen">
      <div className="absolute top-0 left-0 -z-10 flex h-screen max-h-full w-full max-w-full bg-black blur-home">
        <Image
          src={heroImage.url}
          alt={heroImage.alt}
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between pb-[calc(80px+2rem)]">
        <HeaderHome currentLocale={currentLocale} />
        <div className="flex flex-col gap-8">
          <div className="m-4 max-h-[75px] max-w-[353px]">
            <SimonyiDarkIcon
              width="100%"
              height="100%"
              filter="drop-shadow(0 4px 8px rgb(0, 0, 0, 0.6))"
            />
          </div>
          <div className="flex justify-center">
            <a
              href="https://skktv.simonyi.bme.hu/?utm_source=simonyi.bme.hu"
              title="skktv.simonyi.bme.hu"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="w-full cursor-pointer">
                {t("tanverseny")}
              </Button>
            </a>
          </div>
          <div className="flex flex-row flex-wrap justify-evenly gap-8">
            <a
              href="https://tanfolyam.simonyi.bme.hu/?utm_source=simonyi.bme.hu"
              title="tanfolyam.simonyi.bme.hu"
              target="_blank"
              rel="noreferrer"
            >
              <Button className="cursor-pointer">{t("course")}</Button>
            </a>
            <Link href="/berles">
              <Button className="cursor-pointer">{t("rent")}</Button>
            </Link>
          </div>
        </div>
        <div className="h-6">
          <ChevronIcon className="inline-block w-4 fill-light align-middle leading-6" />
        </div>
      </div>
    </div>
  )
}
