import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPosts } from '~/app/lib/get-posts';

export const metadata: Metadata = {
  title: 'Blog'
};

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      <div className="flex flex-col gap-8 max-w-3xl">
        {posts.map((post) => {
          return (
            <div key={post.slug} className="flex flex-col sm:flex-row rounded-md">
              <div className="hidden sm:block relative w-[100px] h-full">
                {post.previewImage ? (
                  <Image src={post.previewImage} alt={post.previewImageAlt || ''} fill className="rounded-l-md object-cover" />
                ) : (
                  <div className="rounded-l-md bg-darkmode_regular w-full h-full" />
                )}
              </div>
              <div className="flex flex-col gap-2 p-4 bg-darkmode_regular rounded-md sm:rounded-l-none sm:rounded-r-md flex-1">
                <Link href={`/blog/${post.slug}`} className="hover:underline font-heading text-3xl">
                  {post.title || post.slug}
                </Link>
                {post.date && <p className="font-body">{post.date.toLocaleDateString()}</p>}
                {post.description && <p className="font-body">{post.description}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
