import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Rólunk'
};

export default function Page() {
  return <h1>About</h1>;
}
