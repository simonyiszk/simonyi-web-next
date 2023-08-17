import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlugFromCache } from '~/utils';
import { BlogPost } from '~/components';

export const dynamic = 'force-dynamic';

type ParamsType = {
  slug: string;
  locale: string;
};

export async function generateMetadata({ locale, slug }: ParamsType): Promise<Metadata> {
  const post = await getPostBySlugFromCache(slug, locale);

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
      locale: 'hu',
      alternateLocale: ['en_US']
    },
    twitter: {
      card: 'summary_large_image',
      images: ogImage ? [ogImage.url] : undefined,
      site: 'simonyiszakkoli',
      creator: 'simonyiszakkoli'
    }
  };
}

async function getData({ slug, locale }: ParamsType) {
  const post = await getPostBySlugFromCache(slug, locale);
  return { post };
}

export default async function PostPage({ params }: { params: ParamsType }) {
  const { post } = await getData(params);

  if (!post) return notFound();

  return (
    <div className="w-full max-w-3xl self-center">
      <BlogPost data={post} />
    </div>
  );
}
