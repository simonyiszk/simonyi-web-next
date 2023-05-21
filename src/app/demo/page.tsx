import { Metadata } from 'next';
import { SubpageLayout } from '~/components';
import HelloWorld from './demo.mdx';

export const metadata: Metadata = {
  title: 'Demo'
};

export default function Page() {
  return (
    <SubpageLayout>
      <div className="rounded-md bg-darkmode_regular p-4 max-w-3xl">
        <HelloWorld />
      </div>
    </SubpageLayout>
  );
}
