import { Metadata } from 'next';
import { getPosts } from '~/app/lib/get-posts';
import { Post } from '~/components/app/blog/post';

export const metadata: Metadata = {
  title: 'Blog'
};

export default async function Page() {
  const posts = await getPosts();

  return (
    <div className="flex-grow self-center p-4 flex flex-col gap-8 w-full max-w-3xl">
      {posts.map((post) => {
        return <Post key={post.slug} data={post} />;
      })}
    </div>
  );
}
