import { Document } from '@contentful/rich-text-types';

type SocialIconType = 'email' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'phone' | 'youtube' | 'tiktok' | 'website';

type AboutType = {
  title: string;
  description: Document;
};

type ImageType = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

type LightboxImage = {
  picture: ImageType;
  title?: string;
  description?: string;
};

type LinkType = {
  url: string;
  title: string;
  text: string;
};

type SocialType = {
  icon: SocialIconType;
  link: LinkType;
};

type ProfileType = {
  profilePicture: ImageType;
  name: string;
  title: string;
  socials: SocialType[];
};

type StudentGroupType = {
  name: string;
  logo: ImageType;
  description: string;
  socials: SocialType[];
  isDense?: boolean;
};

type PostType = {
  slug: string;
  body: Document;
  title?: string;
  description?: string;
  date?: Date;
  author?: string;
  authors?: string[];
  published?: boolean;
  hidden?: boolean;
  tags?: string[];
  previewImage?: ImageType;
  ogImage?: ImageType;
};

type FooterDataType = {
  sections: {
    title: string;
    links: LinkType[];
    address?: Document;
  }[];
};

export type {
  AboutType,
  ImageType,
  LightboxImage,
  LinkType,
  ProfileType,
  StudentGroupType,
  SocialIconType,
  SocialType,
  PostType,
  FooterDataType
};
