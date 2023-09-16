import { BLOCKS } from '@contentful/rich-text-types';
import { AboutType, FooterType, ImageType, LightboxImage, SocialType, TimelineEntityType } from '~/@types';

type Unpacked<T> = T extends (infer U)[] ? U : T;

export const defaults: {
  lightboxImage: LightboxImage;
  studentGroupLogo: ImageType;
  social: SocialType;
  profilePicture: ImageType;
  ogImage: ImageType;
  footer: FooterType;
  footerSection: Unpacked<FooterType['sections']>;
  about: AboutType;
  pagination: { page: number; size: number };
  hero: ImageType;
  timeline: TimelineEntityType[];
} = {
  lightboxImage: {
    picture: {
      url: 'https://warp.sch.bme.hu/images/cover',
      alt: '',
      width: 960,
      height: 540
    },
    title: '',
    description: ''
  },
  studentGroupLogo: {
    url: '',
    alt: '',
    width: 0,
    height: 0
  },
  social: {
    icon: 'website',
    link: {
      url: '',
      title: '',
      text: ''
    }
  },
  profilePicture: {
    url: 'https://warp.sch.bme.hu/images/profile',
    alt: '',
    width: 512,
    height: 512
  },
  ogImage: {
    url: 'https://warp.sch.bme.hu/images/cover',
    alt: '',
    width: 960,
    height: 540
  },
  footer: {
    sections: [],
    github: {
      text: 'github.com/simonyiszk/simonyi-web-next',
      title: 'github.com/simonyiszk/simonyi-web-next',
      url: 'https://github.com/simonyiszk/simonyi-web-next'
    }
  },
  footerSection: {
    links: [],
    title: ''
  },
  about: {
    title: '',
    description: {
      nodeType: BLOCKS.DOCUMENT,
      content: [],
      data: {}
    }
  },
  pagination: {
    page: 1,
    size: 10
  },
  hero: {
    url: 'https://warp.sch.bme.hu/images/hero',
    alt: '',
    width: 1366,
    height: 768
  },
  timeline: [
    {
      year: 1954,
      description: 'Útjukra indulnak a budavári kollégiumban a körök és a hagyományos események. Megalapul a HA5KFU Rádióamatőr Klub.'
    },
    {
      year: 1961,
      description: 'Megalapul a SPOT Fotókör.'
    },
    {
      year: 1962,
      description: 'Megalapul a Budavári Schönherz Stúdió (BSS).'
    },
    {
      year: 1993,
      description: 'Megalapul az AC Studio & Live (AC).'
    },
    {
      year: 2001,
      description: `Megalapul a Kir-Dev.`
    },
    {
      year: 2003,
      description:
        'November 4-én az I. Simonyi Névfelvevő Ünnepség és Konferencián megalapítják a Simonyi Károly Szakkollégiumot elődeink. Alapító köreink: AC, BSS, HA5KFU, KSZK, RD.'
    },
    {
      year: 2008,
      description:
        'A Rádiótechnikai Diákkör (RD) újjászületik, ezáltal megalapul a Schönherz Elektronikai Műhely (SEM). Megalapul a LEGO Kör. 6 körrel folytatja a Simonyi.'
    },
    {
      year: 2009,
      description: 'Elnyerjük a Junior Prima Primissima Díjat. Csatlakozik a szakkolihoz a Kir-Dev. 7 körrel folytatja a Simonyi.'
    },
    {
      year: 2011,
      description: 'Megalapul a Schönherz Design Stúdió, azaz schdesign. 8 körrel folytatja a Simonyi.'
    },
    {
      year: 2014,
      description: 'A KSZK kiválik a szakkollégiumból, és önálló szervezetté alakul.'
    },
    {
      year: 2015,
      description: 'Csatlakozik a szakkolihoz a SPOT. Megalapul a MGMT Kör. 9 köre van a Simonyinak.'
    },
    {
      year: 2023,
      description:
        '20 éves a szakkollégium, jubileumi Konferenciát és nagy születésnapi ünnepséget rendezünk, kiadásra kerül a Simonyi20-as könyv.'
    }
  ]
};
