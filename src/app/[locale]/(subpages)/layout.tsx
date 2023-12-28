import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { PageProps } from "~/@types";
import { HeaderSubpage, Footer } from "~/components";
import { query } from "~/utils";

async function getData({ params: { locale } }: PageProps) {

  const footer = await query.footer(locale);

  return { footer };
}

export default async function SubpageLayout(props: PageProps) {
  unstable_setRequestLocale(props.params.locale);
  const { footer } = await getData(props);
  const t = await getTranslations({ locale: props.params.locale, namespace: "pages.subpages.header" });

  return (
    <div className="flex min-h-safe_screen flex-col justify-between gap-16">
      <HeaderSubpage
        homepage={t("homepage")}
        aboutUs={t("aboutUs")}
        blog={t("blog")}
      />
      {props.children}
      <Footer data={footer} />
    </div>
  );
}
