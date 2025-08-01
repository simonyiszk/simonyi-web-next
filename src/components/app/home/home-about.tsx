import { AboutType, LightboxImage } from "~/@types"
import { HomeAboutImageBrowser } from "./home-about-image-browser"
import { TypographyH1 } from "~/components/typography"
import { contentfulDocumentToReactComponents } from "~/utils/contentful/contentful-renderer"

export function HomeAbout({
  about,
  images,
}: {
  about: AboutType
  images: LightboxImage[]
}) {
  return (
    <div className="flex flex-col">
      {about.title && (
        <TypographyH1 className="mb-8">{about.title}</TypographyH1>
      )}
      <div className="grid grid-cols-1 gap-16 whitespace-pre-wrap text-justify lg:grid-cols-2">
        {contentfulDocumentToReactComponents(about.description)}
        <HomeAboutImageBrowser lightboxImages={images} />
      </div>
    </div>
  )
}
