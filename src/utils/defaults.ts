import { FooterDataType, ImageType, LightboxImage, SocialType } from '~/@types';

type Unpacked<T> = T extends (infer U)[] ? U : T;

export const defaults: {
  lightboxImage: LightboxImage;
  studentGroupLogo: ImageType;
  social: SocialType;
  profilePicture: ImageType;
  ogImage: ImageType;
  footer: FooterDataType;
  footerSection: Unpacked<FooterDataType['sections']>;
} = {
  lightboxImage: {
    picture: {
      url: '',
      alt: '',
      width: 0,
      height: 0
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
    url: '',
    alt: '',
    width: 0,
    height: 0
  },
  ogImage: {
    url: 'https://warp.sch.bme.hu/images/cover',
    alt: '',
    width: 960,
    height: 540
  },
  footer: {
    sections: []
  },
  footerSection: {
    links: [],
    title: ''
  }
};
