import Link from 'next/link';
import { Button } from '~/components/button';

export default function HomeSubPages() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row flex-wrap justify-evenly gap-4">
        <Link href="/blog">
          <Button>Blog</Button>
        </Link>
      </div>
    </div>
  );
}
