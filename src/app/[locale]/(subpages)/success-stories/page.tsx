import { Metadata } from 'next'
import { TypographyH1 } from '~/components/typography'

export const metadata: Metadata = {
  title: 'Büszkeségeink',
}

export default function Page() {
  return <TypographyH1>Success stories</TypographyH1>
}
