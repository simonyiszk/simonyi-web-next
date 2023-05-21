import { SubpageHeader, HomeFooter } from '~/components';

export default function SubpageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between min-h-safe_screen gap-16">
      <SubpageHeader />
      <div className="self-center p-4 max-w-home">{children}</div>
      <HomeFooter />
    </div>
  );
}
