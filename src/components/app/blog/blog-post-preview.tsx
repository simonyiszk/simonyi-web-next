import Image from 'next/image';
import Link from 'next/link';
import { PostType } from '~/@types';

function BlogPostPreview({ data }: { data: PostType }) {
  return (
    <Link href={`/blog/${data.slug}`} className="hover:underline">
      <div className="grid grid-cols-[0_1fr] sm:grid-cols-[100px_1fr] grid-rows-2 bg-darkmode_regular rounded-md gap-4">
        <div className="row-span-2 relative">
          {data.previewImage ? (
            <Image src={data.previewImage.url} alt={data.previewImage.alt} fill className="rounded-l-md object-cover" />
          ) : (
            <div className="rounded-l-md bg-darkmode_regular w-full h-full" />
          )}
        </div>
        <p className={`${data.date ? 'pt-4' : 'py-4 row-span-2'} font-heading text-3xl`}>{data.title || data.slug}</p>
        {data.date && <p className="font-body">{data.date.toLocaleDateString('hu')}</p>}
      </div>
    </Link>
  );
}

export { BlogPostPreview };
