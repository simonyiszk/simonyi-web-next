import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getPostBySlug, getPostBySlugFromCache } from '~/utils/contentful';
import { contentfulDocumentToReactComponents } from '~/utils';
import { Locales } from '~/@types';

export const dynamic = 'force-static';

export async function generateMetadata({
  params
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata> {
  const locale: Locales = 'hu';

  const post = await getPostBySlugFromCache(params.slug, locale);

  const title = post?.title;
  const description = post?.description;
  const authors = () => {
    const authors = post?.authors ? post.authors.map((author) => ({ name: author })) : undefined;

    return authors;
  };
  const ogImage = post?.ogImage
    ? {
        url: post.ogImage,
        alt: post.ogImage.alt,
        width: post.ogImage.width,
        height: post.ogImage.height
      }
    : undefined;

  const date = post?.date?.toDateString();

  return {
    title,
    description,
    authors: authors(),
    openGraph: {
      releaseDate: date,
      images: ogImage ? [ogImage.url] : undefined,
      locale: 'hu-HU'
    },
    twitter: {
      card: 'summary_large_image',
      images: ogImage ? [ogImage.url] : undefined,
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
  const post = await getPostBySlug(params.slug);

  if (!post) return notFound();

  const { title, date, previewImage } = post;

  return (
    <div className="flex-grow self-center m-4 rounded-md bg-darkmode_regular p-4 max-w-3xl whitespace-pre-wrap">
      {previewImage && (
        <div className="rounded-t-md relative h-80 -mx-4 -mt-4 mb-8">
          <Image src={previewImage.url} alt={previewImage.alt} fill className="rounded-t-md object-cover" />
        </div>
      )}
      <div className="mb-8">
        {title && <h1 className="text-h1 text-5xl font-heading mb-4">{title}</h1>}
        {date && <div className="font-body">{date.toLocaleDateString('hu-HU')}</div>}
      </div>
      {contentfulDocumentToReactComponents(post.body)}
    </div>
  );
}
