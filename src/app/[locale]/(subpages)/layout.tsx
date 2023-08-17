import { HeaderSubpage, Footer } from '~/components';
import { getFooterFromCache } from '~/utils';

export const dynamic = 'force-static';

type ParamsType = {
  lang: string;
};

async function getData({ lang }: ParamsType) {
  const footer = await getFooterFromCache(lang);

  return { footer };
}

export default async function SubpageLayout({ children, params }: { children: React.ReactNode; params: ParamsType }) {
  const { footer } = await getData(params);

  return (
    <div className="flex flex-col justify-between min-h-safe_screen gap-16">
      <HeaderSubpage />
      {children}
      <Footer data={footer} />
    </div>
  );
}
