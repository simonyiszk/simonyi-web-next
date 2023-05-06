import Link from 'next/link';
import { Button } from '~/components/button';

export default function HomeSubsites() {
  return (
    <div className="flex flex-col">
      <h1 className="text-h1 font-heading mb-8">Aloldalaink</h1>
      <div className="flex flex-row justify-evenly gap-4">
        <Link href="/blog">
          <Button>Blog</Button>
        </Link>
        <Link href="/about">
          <Button>Rólunk</Button>
        </Link>
        <Link href="/showcase">
          <Button>Büszkeségeink</Button>
        </Link>
      </div>
    </div>
  );
}
