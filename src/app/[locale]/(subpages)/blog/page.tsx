import { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { PageProps, ParamsType, SearchParamsType } from "~/@types";
import { BlogPaginator, BlogPostPreview } from "~/components";
import { query } from "~/utils";

export async function generateMetadata({
  params: {
    locale,
  },
}: {
  params: {
    locale: string
  }
}) {
  const t = await getTranslations({ locale, namespace: "pages.subpages.blog" });
  return {
    title: t("title"),
  } satisfies Metadata;
}

async function getData({locale}: ParamsType, {page, size}: SearchParamsType) {
  const { items, currentPage, pageSize, totalItems, totalPages } = await query.paginatedPosts(locale, page, size);

  return {
    posts: items.filter((post) => !post.hidden),
    currentPage,
    pageSize,
    totalItems,
    totalPages,
  };
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const {searchParams} = props

  setRequestLocale(params.locale);
  const { posts, currentPage, totalPages } = await getData(params, searchParams);

  if (posts.length === 0) {
    return notFound();
  }

  return (
    <div className="flex w-full max-w-3xl grow flex-col gap-8 self-center p-4">
      {posts.map((post) => {
        return <BlogPostPreview key={post.slug} data={post} />;
      })}
      <BlogPaginator currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
