import { LanguageSwitcher } from "../language-switcher"
import { BmeLogos } from "../bme-logos"

export function HeaderHome({ currentLocale }: { currentLocale: string }) {
  return (
    <div className="flex w-full flex-col flex-wrap items-stretch justify-between md:flex-row md:items-center">
      <div className="md:invisible md:block">
        <LanguageSwitcher currentLocale={currentLocale} />
      </div>
      <div className="flex flex-1 flex-col flex-wrap items-center justify-center gap-x-16 gap-y-8 p-8 md:flex-row">
        <BmeLogos />
      </div>
      <div className="hidden md:block">
        <LanguageSwitcher currentLocale={currentLocale} />
      </div>
    </div>
  )
}
