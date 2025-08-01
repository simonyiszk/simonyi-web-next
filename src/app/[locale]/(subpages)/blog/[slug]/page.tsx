import { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { PageProps, ParamsType } from "~/@types"
import { query } from "~/utils/contentful/contentful-query"
import { BlogPost } from "~/components/app/blog/blog-post"

export async function generateMetadata({
  locale,
  slug,
}: ParamsType): Promise<Metadata> {
  const post = await query.postBySlug(slug, locale)

  const title = post?.title
  const description = post?.description
  const authors = () => {
    const authors = post?.authors
      ? post.authors.map((author) => ({ name: author }))
      : undefined

    return authors
  }
  const ogImage = post?.ogImage
    ? {
        url: post.ogImage,
        alt: post.ogImage.alt,
        width: post.ogImage.width,
        height: post.ogImage.height,
      }
    : undefined

  const date = post?.date?.toDateString()

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
  }
}

async function getData({ slug, locale }: ParamsType) {
  setRequestLocale(locale)
  const post = await query.postBySlug(slug, locale)
  return { post }
}

export default async function PostPage(props: PageProps) {
  const params = await props.params

  const { post } = await getData(params)

  if (!post) return notFound()

  return (
    <div className="w-full max-w-3xl self-center">
      <BlogPost data={post} />
    </div>
  )
}
