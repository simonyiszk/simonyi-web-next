import { Metadata } from "next";
import "../globals.css";
import { notFound } from "next/navigation";
import { locales } from "~/utils";

export const metadata: Metadata = {
  metadataBase: new URL("https://simonyi.bme.hu"),
  title: {
    default: "Simonyi Károly Szakkollégium",
    template: "%s - Simonyi Károly Szakkollégium",
    absolute: "Főoldal - Simonyi Károly Szakkollégium",
  },
  description:
    "A Simonyi Károly Szakkollégium egy hallgatói szakmai szervezet, amely a BME Villamosmérnöki és Informatikai Karán működik. Tagjai a villamosmérnöki és informatikai szakma közel teljes palettáját művelik stúdiótechnikától kezdve a webdesign és -fejlesztésen át az elektronikáig, sőt robotikáig.",
  openGraph: {
    type: "website",
    images: [
      {
        url: "/images/defaults/cover.png",
        width: 960,
        height: 540,
        alt: "Simonyi Károly Szakkollégium - Simonyi Károly College for Advanced Studies",
      },
    ],
    locale: "hu",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/images/defaults/cover.png",
        width: 960,
        height: 540,
        alt: "Simonyi Károly Szakkollégium - Simonyi Károly College for Advanced Studies",
      },
    ],
    site: "simonyiszakkoli",
    creator: "simonyiszakkoli",
  },
};

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {
  // Validate that the incoming `locale` parameter is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locales.includes(locale as any)) notFound();

  return (
    <html data-theme="dark" lang={locale}>
      <body className="bg-dark text-white text-opacity-text">
        <div className="flex min-h-safe_screen flex-col justify-between">{children}</div>
      </body>
    </html>
  );
}
