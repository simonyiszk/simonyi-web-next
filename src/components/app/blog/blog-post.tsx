import Image from "next/image"
import { PostType } from "~/@types"
import { TypographyBody, TypographyH1 } from "~/components/typography"
import { contentfulDocumentToReactComponents } from "~/utils/contentful/contentful-renderer"

export function BlogPost({ data }: { data: PostType }) {
  const { title, date, previewImage, body } = data

  return (
    <div className="m-4 rounded-md bg-darkmode_regular p-4 whitespace-pre-wrap">
      {previewImage && (
        <div className="relative -mx-4 -mt-4 mb-8 h-80 rounded-t-md">
          <Image
            src={previewImage.url}
            alt={previewImage.alt}
            fill
            className="rounded-t-md object-cover"
          />
        </div>
      )}
      <div className="mb-8">
        {title && <TypographyH1 className="mb-4">{title}</TypographyH1>}
        {date && (
          <TypographyBody>{date.toLocaleDateString("hu")}</TypographyBody>
        )}
      </div>
      {contentfulDocumentToReactComponents(body)}
    </div>
  )
}
