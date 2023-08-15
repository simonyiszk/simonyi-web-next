'use client';

import { useState } from 'react';
import { default as NextLink } from 'next/link';
import { SimonyiLogoIcon, HamburgerIcon } from '../icons';

function HeaderSubpage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="hidden md:block w-full bg-darkmode_regular">
        <div className="flex flex-col md:flex-row w-full max-w-home p-4 gap-x-8 gap-y-4 justify-start align-middle items-center m-auto">
          <div className="w-8 h-8">
            <SimonyiLogoIcon />
          </div>
          <NextLink href="/" className="hover:underline">
            Főoldal
          </NextLink>
          <NextLink href="/blog" className="hover:underline">
            Blog
          </NextLink>
        </div>
      </header>
      <header className="md:hidden w-full bg-darkmode_regular">
        <div className="flex flex-row w-full p-4 gap-x-8 gap-y-4 justify-between align-middle items-center">
          <div className="w-8 h-8">
            <SimonyiLogoIcon />
          </div>
          <div className="w-6 h-4 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <HamburgerIcon />
          </div>
        </div>
        {isMenuOpen && (
          <div className="flex flex-col p-4 gap-x-8 gap-y-4 ">
            <div className="flex flex-col md:flex-row w-full max-w-home gap-x-8 gap-y-4 justify-start align-middle items-center m-auto">
              <NextLink
                href="/"
                className="p-4 w-full text-center md:w-auto md:p-0 md:text-left hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Főoldal
              </NextLink>
              <NextLink
                href="/blog"
                className="p-4 w-full text-center md:w-auto md:p-0 md:text-left hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </NextLink>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export { HeaderSubpage };
