function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <html data-theme="dark" lang="hu">
      <body className="bg-dark text-white text-opacity-text">
        <div className="flex flex-col justify-between min-h-safe_screen">{children}</div>
      </body>
    </html>
  );
}

export { HomeLayout };
