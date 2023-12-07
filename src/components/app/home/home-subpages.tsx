import { useTranslations } from "next-intl";
import Link from "next/link";
import { Button } from "~/components/button";

export default function HomeSubPages() {
  const t = useTranslations("home");

  return (
    <div className="flex flex-col">
      <div className="flex flex-row flex-wrap justify-evenly gap-4">
        <Link href="/about">
          <Button>{t("aboutUs")}</Button>
        </Link>
        <Link href="/blog">
          <Button>{t("blog")}</Button>
        </Link>
      </div>
    </div>
  );
}
