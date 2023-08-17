import { Metadata } from 'next';
import './globals.css';
import { getTranslator } from 'next-intl/server';
import { locales } from '~/utils';

type ParamsType = {
  locale: string;
};

export async function generateMetadata({ params: { locale } }: { params: ParamsType }): Promise<Metadata> {
  const t = await getTranslator(locale, 'metadata');

  return {
    metadataBase: new URL(t('metadataBase')),
    title: {
      default: t('title.default'),
      template: t('title.template'),
      absolute: t('title.absolute')
    },
    description: t('description'),
    openGraph: {
      type: 'website',
      images: [
        {
          url: '/images/defaults/cover.png',
          width: 960,
          height: 540,
          alt: t('openGraph.images.alt')
        }
      ],
      locale: 'hu',
      alternateLocale: ['en_US']
    },
    twitter: {
      card: 'summary_large_image',
      images: [
        {
          url: '/images/defaults/cover.png',
          width: 960,
          height: 540,
          alt: t('twitter.images.alt')
        }
      ],
      site: 'simonyiszakkoli',
      creator: 'simonyiszakkoli'
    }
  };
}

export function generateStaticParams() {
  return locales.map((lang) => ({ params: { lang } }));
}

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: ParamsType }) {
  return (
    <html data-theme="dark" lang={params.locale} className="h-full">
      <body className="bg-dark text-white text-opacity-text">
        <div className="flex min-h-safe_screen flex-col justify-between">{children}</div>
      </body>
    </html>
  );
}
