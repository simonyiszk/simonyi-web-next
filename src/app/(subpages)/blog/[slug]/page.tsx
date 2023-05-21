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

  const { title, date } = post;

  return (
    <div className="rounded-md bg-darkmode_regular p-4 max-w-3xl">
      <div className="mb-8">
        <h1 className="text-h1 text-5xl font-heading mb-4">{title}</h1>
        <div className="font-body">{date?.toLocaleDateString()}</div>
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
