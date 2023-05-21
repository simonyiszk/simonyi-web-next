import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPost } from '~/app/lib/get-posts';

import { mdxComponents } from '~/mdx-components';

export default async function PostPage({
  params
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug);

  if (!post) return notFound();

  const { title, author, date } = post;

  return (
    <div className="rounded-md bg-darkmode_regular p-4 max-w-3xl">
      <div>
        <h1>{title}</h1>
        <div>
          <span>{author}</span>
          <span>{date?.toDateString()}</span>
        </div>
      </div>
      {/* @ts-expect-error RSC */}
      <MDXRemote
        source={post.body}
        options={{
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [],
            format: 'mdx'
          }
        }}
        components={mdxComponents}
      />
    </div>
  );
}
