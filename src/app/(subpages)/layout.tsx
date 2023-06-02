import { SubpageHeader, HomeFooter } from '~/components';

export default function SubpageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-safe_screen gap-16">
      <SubpageHeader />
      {children}
      <HomeFooter />
    </div>
  );
}
