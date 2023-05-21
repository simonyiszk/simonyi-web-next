import { Metadata } from 'next';
import { SubpageLayout } from '~/components';

export const metadata: Metadata = {
  title: 'Rólunk'
};

export default function Page() {
  return (
    <SubpageLayout>
      <h1>About</h1>
    </SubpageLayout>
  );
}
