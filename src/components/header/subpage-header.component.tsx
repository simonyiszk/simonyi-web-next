import { default as NextLink } from 'next/link';
import { SimonyiLogoIcon } from '../icons';

function SubpageHeader() {
  return (
    <div className="flex flex-row w-full p-4 gap-x-8 gap-y-4 bg-darkmode_regular justify-start align-middle items-center">
      <div className="w-8 h-8">
        <SimonyiLogoIcon />
      </div>
      <NextLink href="/">Főoldal</NextLink>
      <NextLink href="/blog">Blog</NextLink>
      <NextLink href="/about">Rólunk</NextLink>
      <NextLink href="/success-stories">Büszkeségeink</NextLink>
    </div>
  );
}

export { SubpageHeader };
