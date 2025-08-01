import { useTranslations } from "next-intl"
import { Button } from "~/components/button"
import { Link } from "~/i18n/navigation"

export function HomeSubpages() {
  const t = useTranslations("pages.home")

  return (
    <div className="flex flex-col">
      <div className="flex flex-row flex-wrap justify-evenly gap-4">
        <Link href="/about-us">
          <Button className="cursor-pointer">{t("aboutUs")}</Button>
        </Link>
        <Link href="/blog">
          <Button className="cursor-pointer">{t("blog")}</Button>
        </Link>
      </div>
    </div>
  )
}
