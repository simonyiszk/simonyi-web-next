import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Locales } from '~/@types';
import { BlogPaginator, BlogPostPreview } from '~/components';
import { getPaginatedPostsFromCache } from '~/utils';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Blog'
};

type SearchParams = {
  page?: string;
  size?: string;
};

async function getData(searchParams: SearchParams) {
  const locale: Locales = 'hu';

  const { page, size } = searchParams;

  const { items, currentPage, pageSize, totalItems, totalPages } = await getPaginatedPostsFromCache(page, size, locale);

  return {
    posts: items.filter((post) => !post.hidden),
    currentPage,
    pageSize,
    totalItems,
    totalPages
  };
}

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const { posts, currentPage, totalPages } = await getData(searchParams);

  if (posts.length === 0) {
    return notFound();
  }

  return (
    <div className="flex-grow self-center p-4 flex flex-col gap-8 w-full max-w-3xl">
      {posts.map((post) => {
        return <BlogPostPreview key={post.slug} data={post} />;
      })}
      <BlogPaginator currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
