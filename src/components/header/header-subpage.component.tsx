"use client";

import { useState } from "react";
import { Link } from "~/i18n/navigation";
import { SimonyiLogoIcon, HamburgerIcon } from "../icons";

export function HeaderSubpage({
  homepage,
  aboutUs,
  blog,
}: {
  homepage: string;
  aboutUs: string;
  blog: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="hidden w-full bg-darkmode_regular md:block">
        <div className="m-auto flex w-full max-w-home flex-col items-center justify-start gap-x-8 gap-y-4 p-4 align-middle md:flex-row">
          <div className="h-8 w-8">
            <SimonyiLogoIcon />
          </div>
          <Link href="/" className="hover:underline">
            {homepage}
          </Link>
          <Link href="/about-us" className="hover:underline">
            {aboutUs}
          </Link>
          <Link href="/blog" className="hover:underline">
            {blog}
          </Link>
        </div>
      </header>
      <header className="w-full bg-darkmode_regular md:hidden">
        <div className="flex w-full flex-row items-center justify-between gap-x-8 gap-y-4 p-4 align-middle">
          <div className="h-8 w-8">
            <SimonyiLogoIcon />
          </div>
          <div className="h-4 w-6 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <HamburgerIcon />
          </div>
        </div>
        {isMenuOpen && (
          <div className="flex flex-col gap-x-8 gap-y-4 p-4 ">
            <div className="m-auto flex w-full max-w-home flex-col items-center justify-start gap-x-8 gap-y-4 align-middle md:flex-row">
              <Link
                href="/"
                className="w-full p-4 text-center hover:underline md:w-auto md:p-0 md:text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                {homepage}
              </Link>
              <Link
                href="/about-us"
                className="w-full p-4 text-center hover:underline md:w-auto md:p-0 md:text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                {aboutUs}
              </Link>
              <Link
                href="/blog"
                className="w-full p-4 text-center hover:underline md:w-auto md:p-0 md:text-left"
                onClick={() => setIsMenuOpen(false)}
              >
                {blog}
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
