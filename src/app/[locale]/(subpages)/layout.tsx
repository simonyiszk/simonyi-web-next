import { HeaderSubpage, Footer } from '~/components';
import { getFooterFromCache } from '~/utils';

export const dynamic = 'force-dynamic';

type ParamsType = {
  locale: string;
};

async function getData({ locale }: ParamsType) {
  const footer = await getFooterFromCache(locale);

  return { footer };
}

export default async function SubpageLayout({ children, params }: { children: React.ReactNode; params: ParamsType }) {
  const { footer } = await getData(params);

  return (
    <div className="flex min-h-safe_screen flex-col justify-between gap-16">
      <HeaderSubpage />
      {children}
      <Footer data={footer} />
    </div>
  );
}
