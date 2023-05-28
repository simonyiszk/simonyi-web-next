import { Metadata } from 'next';
import HelloWorld from './demo.mdx';

export const metadata: Metadata = {
  title: 'Demo'
};

export default function Page() {
  return (
    <div>
      <HelloWorld />
    </div>
  );
}
