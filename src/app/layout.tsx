import './globals.css';
import { HomeFooter, SEO } from '~/components';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="dark" lang="hu">
      <head>
        <SEO title="Főoldal" siteUrl="https://simonyi.bme.hu" />
      </head>
      <body className="bg-dark text-white text-opacity-[0.92]">
        <div className="flex flex-col justify-between min-h-[100svh]">
          <div>{children}</div>
          <HomeFooter />
        </div>
      </body>
    </html>
  );
}
