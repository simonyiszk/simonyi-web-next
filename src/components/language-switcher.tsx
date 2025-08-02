import Image from "next/image"
import { Link } from "~/i18n/navigation"
import { TypographyBody } from "~/components/typography"
import { cn } from "~/utils/cn"
import { Button } from "./button"

export function LanguageSwitcher({ currentLocale }: { currentLocale: string }) {
  return (
    <div className="m-2 flex flex-row gap-2 md:flex-col">
      <Button
        asChild
        variant="outline"
        isActive={currentLocale === "hu"}
        className={cn(
          "grow bg-white/10 ring-primary-900 md:grow-0",
          currentLocale === "hu" && "ring-4 ring-primary",
        )}
      >
        <Link
          locale="hu"
          href="/"
          className="flex flex-row items-center justify-start gap-2"
        >
          <Image
            src="/images/flags/hungarian.png"
            alt="English"
            width={32}
            height={16}
            className="h-4 w-4 rounded-full object-none"
          />
          <TypographyBody>Magyar</TypographyBody>
        </Link>
      </Button>
      <Button
        asChild
        variant="outline"
        isActive={currentLocale === "en"}
        className={cn(
          "grow bg-white/10 ring-primary-900 md:grow-0",
          currentLocale === "en" && "ring-4 ring-primary",
        )}
      >
        <Link
          locale="en"
          href="/"
          className="flex flex-row items-center justify-start gap-2"
        >
          <Image
            src="/images/flags/english.png"
            alt="English"
            width={32}
            height={16}
            className="h-4 w-4 rounded-full object-none"
          />
          <TypographyBody>English</TypographyBody>
        </Link>
      </Button>
    </div>
  )
}
