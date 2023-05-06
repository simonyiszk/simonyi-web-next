import { default as NextLink } from 'next/link';
import { SimonyiLogoIcon } from '../icons';

function SubpageHeader() {
  return (
    <div className="w-full bg-darkmode_regular">
      <div className="flex flex-row w-full max-w-home p-4 gap-x-8 gap-y-4 justify-start align-middle items-center m-auto">
        <div className="w-8 h-8">
          <SimonyiLogoIcon />
        </div>
        <NextLink href="/">Főoldal</NextLink>
        <NextLink href="/blog">Blog</NextLink>
        <NextLink href="/about">Rólunk</NextLink>
        <NextLink href="/success-stories">Büszkeségeink</NextLink>
        <NextLink href="/demo">demo</NextLink>
      </div>
    </div>
  );
}

export { SubpageHeader };
