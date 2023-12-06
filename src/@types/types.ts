import { Document } from "@contentful/rich-text-types";

export type SocialIconType = "email" | "facebook" | "github" | "instagram" | "linkedin" | "phone" | "youtube" | "tiktok" | "website";

export type AboutType = {
  title?: string;
  description: Document;
};

export type TimelineEntityType = {
  year: number;
  description: Document;
  isImportant: boolean;
};

export type ImageType = {
  url: string;
  alt: string;
  width: number;
  height: number;
};

export type LightboxImage = {
  picture: ImageType;
  title?: string;
  description?: string;
};

export type LinkType = {
  url: string;
  title: string;
  text: string;
};

export type SocialType = {
  icon: SocialIconType;
  link: LinkType;
};

export type ProfileType = {
  profilePicture: ImageType;
  name: string;
  title: string;
  socials: SocialType[];
};

export type PresidencyType = {
  title: string;
  profiles: ProfileType[];
};

export type StudentGroupType = {
  name: string;
  logo: ImageType;
  description: string;
  socials: SocialType[];
  isDense?: boolean;
};

export type CurrentStudnetGroupsType = {
  title: string;
  studentGroups: StudentGroupType[];
};

export type PostType = {
  slug: string;
  body: Document;
  title?: string;
  description?: string;
  date?: Date;
  author?: string;
  authors?: string[];
  hidden?: boolean;
  tags?: string[];
  previewImage?: ImageType;
  ogImage?: ImageType;
};

export type FooterType = {
  sections: {
    title: string;
    links: LinkType[];
    address?: Document;
  }[];
  github?: LinkType;
};

export type PageProps = {
  children: React.ReactNode;
  params: {
    locale: string;
    slug: string;
  };
  searchParams: {
    page?: string;
    size?: string;
  };
};
