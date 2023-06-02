import Image from 'next/image';
import Link from 'next/link';
import { PostType } from '~/types';

function Post({ data }: { data: PostType }) {
  return (
    <div className="grid grid-cols-[0_1fr] sm:grid-cols-[100px_1fr] grid-rows-2 bg-darkmode_regular rounded-md gap-4">
      <div className="row-span-2 relative">
        {data.previewImage ? (
          <Image src={data.previewImage} alt={data.previewImageAlt || ''} fill className="rounded-l-md object-cover" />
        ) : (
          <div className="rounded-l-md bg-darkmode_regular w-full h-full" />
        )}
      </div>
      <div className={`${data.date ? 'pt-4' : 'py-4 row-span-2'}`}>
        <Link href={`/blog/${data.slug}`} className="hover:underline font-heading text-3xl">
          {data.title || data.slug}
        </Link>
      </div>
      {data.date && <p className="font-body">{data.date.toLocaleDateString()}</p>}
    </div>
  );
}

export { Post };
