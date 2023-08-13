type SocialIconType = 'email' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'phone' | 'youtube' | 'tiktok' | 'website';

type AboutType = {
  title: string;
  description: string;
};

type ImageType = {
  url: string;
  alt: string;
};

type LightboxImage = {
  picture: ImageType;
  title: string;
  description: string;
  width: number;
  height: number;
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
  body: string;
  title?: string;
  description?: string;
  date?: Date;
  author?: string;
  authors?: string[];
  published?: boolean;
  hidden?: boolean;
  tags?: string[];
  previewImage?: string;
  previewImageAlt?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
};

export type { AboutType, ImageType, LightboxImage, ProfileType, StudentGroupType, SocialIconType, SocialType, PostType };
