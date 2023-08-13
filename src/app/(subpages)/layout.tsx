import { SubpageHeader, HomeFooter } from '~/components';
import { getFooter } from '~/utils/contentful';

export const dynamic = 'force-static';

async function getData() {
  const footer = await getFooter();

  return { footer };
}

export default async function SubpageLayout({ children }: { children: React.ReactNode }) {
  const { footer } = await getData();

  return (
    <div className="flex flex-col min-h-safe_screen gap-16">
      <SubpageHeader />
      {children}
      <HomeFooter data={footer} />
    </div>
  );
}
