import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog'
};

export default function Page() {
  return (
    <div className="flex flex-col p-4 rounded-md bg-darkmode_regular ">
      <h1>Blog</h1>
    </div>
  );
}
