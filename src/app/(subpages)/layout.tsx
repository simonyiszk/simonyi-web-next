import { Suspense } from 'react';
import { Locales } from '~/@types';
import { SubpageHeader, HomeFooter, LoadingSubpages } from '~/components';
import { getFooter } from '~/utils/contentful';

export const dynamic = 'force-static';

async function getData() {
  const locale: Locales = 'hu';

  const footer = await getFooter(locale);

  return { footer };
}

export default async function SubpageLayout({ children }: { children: React.ReactNode }) {
  const { footer } = await getData();

  return (
    <div className="flex flex-col justify-between min-h-safe_screen gap-16">
      <SubpageHeader />
      <Suspense fallback={<LoadingSubpages />}>{children}</Suspense>
      <HomeFooter data={footer} />
    </div>
  );
}
