export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full max-w-3xl flex-col gap-4 self-start p-8 md:self-center">
      {children}
    </div>
  )
}
