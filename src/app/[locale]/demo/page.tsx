import { FacebookIcon } from "lucide-react"
import { StudentGroupType } from "~/@types"
import { Button } from "~/components/button"
import { ClubAccordion, ClubCard } from "~/components/club"
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

const values: StudentGroupType = {
  name: "AC Studio & Live",
  description:
    "Az AC Studio & Live felel a kollégiumban tartott kisebb-nagyobb rendezvények hangosításáért és fénytechnikájáért, továbbá kezelik, üzemeltetik és karbantartják a kollégium rendezvénytechnikai eszközparkját. A kör gazdagon felszerelt hangstúdiója alkalmas zenekarok, együttesek többsávos felvételeinek elkészítésére is, amit rajtuk kívül kollégiumi bandák és a Qpa csapatai is igénybe szoktak venni.",
  logo: {
    url: "https://images.ctfassets.net/u6yew21vg9af/1KcgbQoqY7j3tz8bhH7nyA/9042242153b868d55a6f0261e85c2566/ac.svg",
    alt: "AC Studio & Live Logo",
    width: 300,
    height: 225,
  },
  socials: [
    {
      icon: "website",
      link: {
        url: "https://acstudio.sch.bme.hu/",
        text: "acstudio.sch.bme.hu",
        title: "acstudio.sch.bme.hu",
      },
    },
    {
      icon: "email",
      link: {
        url: "https://acstudio.sch.bme.hu/",
        text: "acstudio.sch.bme.hu",
        title: "acstudio.sch.bme.hu",
      },
    },
    {
      icon: "facebook",
      link: {
        url: "https://acstudio.sch.bme.hu/",
        text: "acstudio.sch.bme.hu",
        title: "acstudio.sch.bme.hu",
      },
    },
    {
      icon: "github",
      link: {
        url: "https://acstudio.sch.bme.hu/",
        text: "acstudio.sch.bme.hu",
        title: "acstudio.sch.bme.hu",
      },
    },
    {
      icon: "instagram",
      link: {
        url: "https://acstudio.sch.bme.hu/",
        text: "acstudio.sch.bme.hu",
        title: "acstudio.sch.bme.hu",
      },
    },
    {
      icon: "linkedin",
      link: {
        url: "https://acstudio.sch.bme.hu/",
        text: "acstudio.sch.bme.hu",
        title: "acstudio.sch.bme.hu",
      },
    },
    {
      icon: "phone",
      link: {
        url: "https://acstudio.sch.bme.hu/",
        text: "acstudio.sch.bme.hu",
        title: "acstudio.sch.bme.hu",
      },
    },
    {
      icon: "youtube",
      link: {
        url: "https://acstudio.sch.bme.hu/",
        text: "acstudio.sch.bme.hu",
        title: "acstudio.sch.bme.hu",
      },
    },
    {
      icon: "tiktok",
      link: {
        url: "https://acstudio.sch.bme.hu/",
        text: "acstudio.sch.bme.hu",
        title: "acstudio.sch.bme.hu",
      },
    },
  ],
  isDense: false,
}

export default function DemoPage() {
  return (
    <div className="flex w-full flex-col items-start gap-2">
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
      <div className="ml-2 flex w-full flex-col items-start gap-2">
        <div
          className={`flex flex-col flex-wrap items-start gap-8 self-center md:flex-row`}
        >
          <ClubAccordion
            className="block md:block md:max-w-[45%] lg:max-w-[31%]"
            {...values}
          />
          <ClubCard className="block md:block" {...values} />
        </div>
      </div>
    </div>
  )
}
