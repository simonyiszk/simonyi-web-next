import { Footer } from '../Footer'
import { Header } from '../Header'

function RootContainer({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="root-container__children">{children}</div>
      <Footer />
    </div>
  )
}

export { RootContainer }
