import { BLOCKS } from "@contentful/rich-text-types"
import {
  AboutType,
  FooterType,
  ImageType,
  LightboxImage,
  SocialType,
  TimelineEntityType,
} from "~/@types"

type Unpacked<T> = T extends (infer U)[] ? U : T

export const defaults: {
  lightboxImage: LightboxImage
  studentGroupLogo: ImageType
  social: SocialType
  profilePicture: ImageType
  ogImage: ImageType
  footer: FooterType
  footerSection: Unpacked<FooterType["sections"]>
  about: AboutType
  pagination: { page: number; size: number }
  hero: ImageType
  timeline: TimelineEntityType
} = {
  lightboxImage: {
    picture: {
      url: "https://warp.sch.bme.hu/images/cover",
      alt: "",
      width: 960,
      height: 540,
    },
    title: "",
    description: "",
  },
  studentGroupLogo: {
    url: "",
    alt: "",
    width: 0,
    height: 0,
  },
  social: {
    icon: "website",
    link: {
      url: "",
      title: "",
      text: "",
    },
  },
  profilePicture: {
    url: "https://warp.sch.bme.hu/images/profile",
    alt: "",
    width: 512,
    height: 512,
  },
  ogImage: {
    url: "https://warp.sch.bme.hu/images/cover",
    alt: "",
    width: 960,
    height: 540,
  },
  footer: {
    sections: [],
    github: {
      text: "github.com/simonyiszk/simonyi-web-next",
      title: "github.com/simonyiszk/simonyi-web-next",
      url: "https://github.com/simonyiszk/simonyi-web-next",
    },
  },
  footerSection: {
    links: [],
    title: "",
  },
  about: {
    title: "",
    description: {
      nodeType: BLOCKS.DOCUMENT,
      content: [],
      data: {},
    },
  },
  pagination: {
    page: 1,
    size: 10,
  },
  hero: {
    url: "https://warp.sch.bme.hu/images/hero",
    alt: "",
    width: 1366,
    height: 768,
  },
  timeline: {
    year: 0,
    description: {
      nodeType: BLOCKS.DOCUMENT,
      content: [],
      data: {},
    },
    isImportant: false,
  },
}
