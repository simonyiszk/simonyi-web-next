import { Metadata } from "next";
import { notFound } from "next/navigation";
import { query } from "~/utils";
import { BlogPost } from "~/components";
import { PageProps } from "~/@types";

export async function generateMetadata({ params: { locale, slug } }: { params: PageProps["params"] }): Promise<Metadata> {

  const post = await query.postBySlug(slug, locale);

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
      height: post.ogImage.height,
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
      locale: "hu",
      alternateLocale: ["en_US"],
    },
    twitter: {
      card: "summary_large_image",
      images: ogImage ? [ogImage.url] : undefined,
      site: "simonyiszakkoli",
      creator: "simonyiszakkoli",
    },
  };
}

async function getData({ params: { slug, locale } }: PageProps) {
  const post = await query.postBySlug(slug, locale);
  return { post };
}

export default async function PostPage(props: PageProps) {
  const { post } = await getData(props);

  if (!post) return notFound();

  return (
    <div className="w-full max-w-3xl self-center">
      <BlogPost data={post} />
    </div>
  );
}
