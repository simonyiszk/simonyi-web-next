import './globals.css';
import { SEO } from '~/components';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="dark" lang="hu">
      <head>
        <SEO title="Főoldal" siteUrl="https://simonyi.bme.hu" />
      </head>
      <body className="bg-dark text-white text-opacity-text">
        <div className="flex flex-col justify-between min-h-safe_screen">{children}</div>
      </body>
    </html>
  );
}
