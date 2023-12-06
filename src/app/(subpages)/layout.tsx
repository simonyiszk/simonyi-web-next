import { Locales } from "~/@types";
import { HeaderSubpage, Footer } from "~/components";
import { getFooterFromCache } from "~/utils";

export const dynamic = "force-static";

async function getData() {
  const locale: Locales = "hu";

  const footer = await getFooterFromCache(locale);

  return { footer };
}

export default async function SubpageLayout({ children }: { children: React.ReactNode }) {
  const { footer } = await getData();

  return (
    <div className="flex min-h-safe_screen flex-col justify-between gap-16">
      <HeaderSubpage />
      {children}
      <Footer data={footer} />
    </div>
  );
}
