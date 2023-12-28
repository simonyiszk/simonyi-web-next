import { Metadata } from "next";
import "../globals.css";
import { notFound } from "next/navigation";
import localFont from "next/font/local";
import { getTranslations } from "next-intl/server";
import { locales } from "~/utils";

export async function generateMetadata({
  params: {
    locale,
  },
}: {
  params: {
    locale: string
  }
}) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL("https://simonyi.bme.hu"),
    title: {
      default: t("title.default"),
      template: t("title.template"),
      absolute: t("title.absolute"),
    },
    description: t("description"),
    openGraph: {
      type: "website",
      locale: "hu",
      alternateLocale: "en",
      images: [
        {
          url: "/images/defaults/cover.png",
          width: 960,
          height: 540,
          alt: t("title.default"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "simonyiszakkoli",
      creator: "simonyiszakkoli",
      images: [
        {
          url: "/images/defaults/cover.png",
          width: 960,
          height: 540,
          alt: t("title.default"),
        },
      ],
    },
  } satisfies Metadata;
}

const spaceGrotesk = localFont({
  src: "../../fonts/space_grotesk-vf.ttf",
  display: "swap",
  variable: "--font-space_grotesk",
});

const archivo = localFont({
  src: "../../fonts/archivo-vf.ttf",
  display: "swap",
  variable: "--font-archivo",
});

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: string } }) {
  // Validate that the incoming `locale` parameter is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!locales.includes(locale as any)) notFound();

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${archivo.variable}`}
    >
      <body className="bg-dark text-white text-opacity-text selection:bg-primary-200 selection:text-primary-950">
        <div className="flex min-h-safe_screen flex-col justify-between">{children}</div>
      </body>
    </html>
  );
}
