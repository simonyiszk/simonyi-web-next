import { Metadata } from 'next';
import { SubpageLayout } from '~/components';

export const metadata: Metadata = {
  title: 'Blog'
};

export default function Page() {
  return (
    <SubpageLayout>
      <div className="flex flex-col p-4 rounded-md bg-darkmode_regular ">
        <h1>Blog</h1>
      </div>
    </SubpageLayout>
  );
}
