import { Metadata } from 'next';
import Link from 'next/link';
import { getPosts } from '~/app/lib/get-posts';

export const metadata: Metadata = {
  title: 'Blog'
};

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      <div className="flex flex-col gap-8 items-stretch w-3xl">
        {posts.map((post) => {
          if (post) {
            return (
              <div key={post.slug} className="flex flex-col gap-2 p-4 rounded-md bg-darkmode_regular max-w-3xl">
                <Link href={{ pathname: `blog/${post.slug}` }} className="hover:underline font-heading text-3xl">
                  {post.title}
                </Link>
                <p className="font-body">{post.date?.toLocaleDateString()}</p>
                <p className="font-body">{post.description} </p>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
