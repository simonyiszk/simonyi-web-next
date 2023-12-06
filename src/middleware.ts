import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "hu"],

  // Used when no locale matches
  defaultLocale: "hu",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|hu)/:path*"],
};
