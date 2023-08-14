import { Metadata } from 'next';
import './globals.css';
import { Suspense } from 'react';
import { LoadingHome } from '~/components';

export const metadata: Metadata = {
  metadataBase: new URL('https://simonyi.bme.hu'),
  title: {
    default: 'Simonyi Károly Szakkollégium',
    template: '%s - Simonyi Károly Szakkollégium',
    absolute: 'Főoldal - Simonyi Károly Szakkollégium'
  },
  description:
    'A Simonyi Károly Szakkollégium egy hallgatói szakmai szervezet, amely a BME Villamosmérnöki és Informatikai Karán működik. Tagjai a villamosmérnöki és informatikai szakma közel teljes palettáját művelik stúdiótechnikától kezdve a webdesign és -fejlesztésen át az elektronikáig, sőt robotikáig.',
  openGraph: {
    type: 'website',
    images: [
      {
        url: '/images/cover.png',
        width: 960,
        height: 540,
        alt: 'Simonyi Károly Szakkollégium - Simonyi Károly College for Advanced Studies'
      }
    ],
    locale: 'hu-HU'
  },
  twitter: {
    card: 'summary_large_image',
    images: [
      {
        url: '/images/cover.png',
        width: 960,
        height: 540,
        alt: 'Simonyi Károly Szakkollégium - Simonyi Károly College for Advanced Studies'
      }
    ],
    site: 'simonyiszakkoli',
    creator: 'simonyiszakkoli'
  }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="dark" lang="hu" className="h-full">
      <body className="bg-dark text-white text-opacity-text">
        <div className="flex flex-col justify-between min-h-safe_screen">
          <Suspense fallback={<LoadingHome />}>{children}</Suspense>
        </div>
      </body>
    </html>
  );
}
