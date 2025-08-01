import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { LanguageSwitcher } from '../language-switcher'

export function HeaderHome({ currentLocale }: { currentLocale: string }) {
  const t = useTranslations('pages.home')

  return (
    <div className="flex w-full flex-col flex-wrap items-stretch justify-between md:flex-row md:items-center">
      <div className="md:invisible md:block">
        <LanguageSwitcher currentLocale={currentLocale} />
      </div>
      <div className="flex flex-1 flex-wrap items-center justify-center gap-x-16 gap-y-8 p-8">
        <a
          className="relative h-[50px] w-[188px] hover:opacity-75"
          title={t('bmeAlt')}
          href="http://www.bme.hu/"
          target="_blank"
          rel="noreferrer">
          <Image
            src="/images/bme/bme.png"
            alt={t('bmeAlt')}
            fill
            sizes="188px"
            priority
          />
        </a>
        <a
          className="relative h-[50px] w-[50px] hover:opacity-75"
          title={t('vikAlt')}
          href="http://www.vik.bme.hu/"
          target="_blank"
          rel="noreferrer">
          <Image
            src="/images/bme/vik.png"
            alt={t('vikAlt')}
            fill
            sizes="50px"
          />
        </a>
        <a
          className="w-auto hover:opacity-75 md:w-[188px]"
          title={t('schonherzAlt')}
          href="https://svie.hu/"
          target="_blank"
          rel="noreferrer">
          <div className="relative h-[50px] w-[160px]">
            <Image
              src="/images/bme/schonherz.png"
              alt={t('schonherzAlt')}
              fill
              sizes="188px"
            />
          </div>
        </a>
      </div>
      <div className="hidden md:block">
        <LanguageSwitcher currentLocale={currentLocale} />
      </div>
    </div>
  )
}
