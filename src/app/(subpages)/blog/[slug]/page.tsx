import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import { getPost } from '~/app/lib/get-posts';
import { mdxComponents } from '~/mdx-components';

export async function generateMetadata({
  params
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const post = await getPost(params.slug, true);

  const title = post?.title;
  const description = post?.description;
  const authors = () => {
    const author = post?.author ? { name: post.author } : undefined;
    const authors = post?.authors ? post.authors.map((author) => ({ name: author })) : undefined;

    return author ? (authors ? [author, ...authors] : [author]) : authors;
  };
  const ogImage = post?.ogImage
    ? {
        url: post.ogImage,
        alt: post.ogImageAlt,
        width: post.ogImageWidth,
        height: post.ogImageHeight
      }
    : undefined;

  const date = post?.date?.toDateString();

  return {
    title,
    description,
    authors: authors(),
    openGraph: {
      releaseDate: date,
      images: ogImage ? [ogImage] : undefined,
      locale: 'hu-HU'
    },
    twitter: {
      card: 'summary_large_image',
      images: ogImage ? [ogImage] : undefined,
      site: 'simonyiszakkoli',
      creator: 'simonyiszakkoli'
    }
  };
}

export default async function PostPage({
  params
}: {
  params: {
    slug: string;
  };
}) {
  const post = await getPost(params.slug, true);

  if (!post) return notFound();

  const { title, date, previewImage } = post;

  return (
    <div className="rounded-md bg-darkmode_regular p-4 max-w-3xl">
      {previewImage && (
        <div className="rounded-t-md relative h-80 -mx-4 -mt-4 mb-8">
          <Image src={previewImage} alt={''} fill className="rounded-t-md object-cover" />
        </div>
      )}
      <div className="mb-8">
        {title && <h1 className="text-h1 text-5xl font-heading mb-4">{title}</h1>}
        {date && <div className="font-body">{date.toLocaleDateString()}</div>}
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
