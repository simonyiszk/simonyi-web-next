import { FooterType, LinkType } from "~/@types"
import { contentfulDocumentToReactComponents } from "~/utils/contentful/contentful-renderer"
import { TypographyLink, TypographyBody, TypographyH2 } from "./typography"
import Image from "next/image"
import { ReactNode } from "react"
import { BmeLogos } from "./bme-logos"

export function Footer({ data }: { data: FooterType }) {
  return (
    <div className="flex flex-col items-center gap-8 bg-darkmode_regular p-8">
      <div
        className={`flex w-auto max-w-home flex-col flex-wrap items-start justify-evenly gap-16 pb-8 sm:flex-row md:w-full`}
      >
        {data.sections.map((section, index) => (
          <FooterSection
            key={index}
            title={section.title}
            links={section.links}
            address={
              section.address
                ? contentfulDocumentToReactComponents(section.address)
                : undefined
            }
          />
        ))}
      </div>
      <div className={`flex flex-col flex-wrap items-center gap-8 md:flex-row`}>
        <BmeLogos />
      </div>
      {data.github && (
        <TypographyLink href={data.github.url} title={data.github.title}>
          <TypographyBody className="text-center">
            {data.github.text}
          </TypographyBody>
        </TypographyLink>
      )}
      <a
        href="https://vercel.com?utm_source=kir-dev&utm_campaign=oss"
        target="_blank"
        rel="noopener noreferrer"
        className={`relative mx-8 block h-8 w-40 text-white hover:opacity-75`}
      >
        <Image src="/vercel.svg" fill alt="Logo of Vercel" />
      </a>
    </div>
  )
}

function FooterSection({
  title,
  links,
  address,
}: {
  title: string
  links: LinkType[]
  address?: ReactNode
}) {
  return (
    <div className="flex flex-col gap-1">
      <TypographyH2 className="mb-4">{title}</TypographyH2>
      {links.map((link, index) => (
        <TypographyLink
          key={index}
          href={link.url}
          title={link.title}
          target="_blank"
          rel="noreferrer"
        >
          {link.title}
        </TypographyLink>
      ))}
      {address && (
        <TypographyBody className="mt-4 whitespace-pre-wrap">
          {address}
        </TypographyBody>
      )}
    </div>
  )
}
