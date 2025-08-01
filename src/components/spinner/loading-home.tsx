import { Spinner } from './spinner'

export function LoadingHome() {
  return (
    <div className="flex min-h-safe_screen min-w-full items-center justify-center">
      <Spinner />
    </div>
  )
}
