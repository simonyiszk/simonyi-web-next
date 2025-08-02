import { FacebookIcon } from "lucide-react"
import { Button } from "~/components/button"
import {
  TypographyBody,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyH5,
  TypographyH6,
  TypographyLabel,
  TypographyLink,
} from "~/components/typography"

export default function DemoPage() {
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="ml-2 flex flex-col items-start gap-2">
        <TypographyH1>H1</TypographyH1>
        <TypographyH2>H2</TypographyH2>
        <TypographyH3>H3</TypographyH3>
        <TypographyH4>H4</TypographyH4>
        <TypographyH5>H5</TypographyH5>
        <TypographyH6>H6</TypographyH6>
        <TypographyBody>Body</TypographyBody>
        <TypographyLabel>Label</TypographyLabel>
        <TypographyLink>Link</TypographyLink>
      </div>
      <div className="ml-2 flex flex-col items-start gap-2">
        <div className="flex flex-row gap-2">
          <Button variant="default" size="icon">
            <FacebookIcon className="size-6 text-white" />
          </Button>
          <Button variant="default">Default Button</Button>
        </div>
        <div className="flex flex-row gap-2">
          <Button variant="outline" size="icon">
            <FacebookIcon className="size-6 text-white" />
          </Button>
          <Button variant="outline">Outline Button</Button>
        </div>
        <div className="flex flex-row gap-2">
          <Button variant="transparent" size="icon">
            <FacebookIcon className="size-6 text-white" />
          </Button>
          <Button variant="transparent">Transparent Button</Button>
        </div>
      </div>
    </div>
  )
}
