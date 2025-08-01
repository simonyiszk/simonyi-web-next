import Image from 'next/image'
import { Link } from '~/i18n/navigation'
import { TypographyBody } from '~/components/typography'
import { cn } from '~/utils/cn'

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  return (
    <div className="m-2 flex flex-col gap-2">
      <Link locale="hu" href="/">
        <div
          className={cn(
            'flex cursor-pointer flex-row items-center gap-2 rounded-md border-2 p-2 transition duration-200 ease-in-out hover:bg-primary',
            currentLocale === 'hu' && 'border-primary bg-primary/10',
            currentLocale !== 'hu' &&
              'border-primary-900 bg-white/10 hover:border-primary',
          )}>
          <Image
            src="/images/flags/hungarian.png"
            alt="English"
            width={32}
            height={16}
            className="h-4 w-4 rounded-full object-none"
          />
          <TypographyBody>Magyar</TypographyBody>
        </div>
      </Link>
      <Link locale="en" href="/">
        <div
          className={cn(
            'flex cursor-pointer flex-row items-center gap-2 rounded-md border-2 p-2 transition duration-200 ease-in-out hover:bg-primary',
            currentLocale === 'en' && 'border-primary bg-primary/10',
            currentLocale !== 'en' &&
              'border-primary-900 bg-white/10 hover:border-primary',
          )}>
          <Image
            src="/images/flags/english.png"
            alt="English"
            width={32}
            height={16}
            className="h-4 w-4 rounded-full object-none"
          />
          <TypographyBody>English</TypographyBody>
        </div>
      </Link>
    </div>
  )
}
