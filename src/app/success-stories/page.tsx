import { Metadata } from 'next';
import { SubpageLayout } from '~/components';

export const metadata: Metadata = {
  title: 'Büszkeségeink'
};

export default function Page() {
  return (
    <SubpageLayout>
      <h1>Success stories</h1>
    </SubpageLayout>
  );
}
