import { PageProps } from "~/@types";
import { HeaderSubpage, Footer } from "~/components";
import { getFooterFromCache } from "~/utils";

async function getData({ params: { locale } }: PageProps) {

  const footer = await getFooterFromCache(locale);

  return { footer };
}

export default async function SubpageLayout(props: PageProps) {
  const { footer } = await getData(props);

  return (
    <div className="flex min-h-safe_screen flex-col justify-between gap-16">
      <HeaderSubpage />
      {props.children}
      <Footer data={footer} />
    </div>
  );
}
