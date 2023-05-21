import { Metadata } from 'next';
import { getPosts } from '~/app/lib/get-posts';

export const metadata: Metadata = {
  title: 'Blog'
};

export default async function Page() {
  const posts = await getPosts();

  return (
    <>
      <div className="flex flex-col p-4 rounded-md bg-darkmode_regular ">
        <h1>Blog</h1>
      </div>
      <div>
        {posts.map((post) => {
          if (post) {
            return <div key={post.slug}>{post.title}</div>;
          }
        })}
      </div>
    </>
  );
}
