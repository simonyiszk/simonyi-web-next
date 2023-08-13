import { createClient } from 'contentful';
import {
  TypeLightboxSkeleton,
  TypeProfileSkeleton,
  TypeStudentGroupSkeleton,
  TypePostSkeleton,
  TypeAboutSkeleton
} from '~/@types/generated/content-types';
import { AboutType, LightboxImage, PostType, ProfileType, StudentGroupType } from '~/@types';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? 'ErrorNoSpaceID',
  accessToken:
    (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
      ? process.env.CONTENTFUL_ACCESS_TOKEN
      : process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) ?? 'ErrorNoAccessToken',
  host: process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? 'cdn.contentful.com' : 'preview.contentful.com'
});

export async function getAbout(): Promise<AboutType> {
  const aboutEntry = await client.getEntries<TypeAboutSkeleton, 'hu'>({ content_type: 'about' });

  return {
    title: aboutEntry.items[0].fields.title,
    description: aboutEntry.items[0].fields.description
  };
}

export async function getLightbox(): Promise<LightboxImage[]> {
  const lightboxEntries = await client.withoutUnresolvableLinks.getEntries<TypeLightboxSkeleton, 'hu'>({
    content_type: 'lightbox',
    include: 1
  });

  return lightboxEntries.items.map((lightbox) => ({
    picture: {
      url: 'https:' + lightbox.fields.photo?.fields.file?.url || '',
      alt: lightbox.fields.photo?.fields.description || ''
    },
    title: lightbox.fields.title,
    description: lightbox.fields.description || '',
    width: lightbox.fields.width || 0,
    height: lightbox.fields.height || 0
  }));
}

export async function getStudentGroups(): Promise<StudentGroupType[]> {
  const studentGroupEntries = await client.withoutUnresolvableLinks.getEntries<TypeStudentGroupSkeleton, 'hu'>({
    content_type: 'studentGroup',
    include: 2
  });

  return studentGroupEntries.items.map((studentGroup) => ({
    name: studentGroup.fields.name,
    logo: {
      url: 'https:' + studentGroup.fields.logo?.fields.file?.url || '',
      alt: studentGroup.fields.logo?.fields.description || ''
    },
    description: studentGroup.fields.description,
    socials: studentGroup.fields.socials.map((social) => ({
      icon: social?.fields.icon || 'website',
      link: {
        url: social?.fields.link?.fields.url || '',
        title: social?.fields.link?.fields.title || '',
        text: social?.fields.link?.fields.text || ''
      }
    })),
    isDense: studentGroup.fields.isDense
  }));
}

export async function getProfiles(): Promise<ProfileType[]> {
  const profileEntries = await client.withoutUnresolvableLinks.getEntries<TypeProfileSkeleton, 'hu'>({
    content_type: 'profile',
    include: 2
  });

  return profileEntries.items.map((profile) => ({
    name: profile.fields.name,
    title: profile.fields.title,
    profilePicture: {
      url: 'https:' + profile.fields.profilePicture?.fields.file?.url || '',
      alt: profile.fields.profilePicture?.fields.description || ''
    },
    socials: profile.fields.socials.map((social) => ({
      icon: social?.fields.icon || 'website',
      link: {
        url: social?.fields.link?.fields.url || '',
        title: social?.fields.link?.fields.title || '',
        text: social?.fields.link?.fields.text || ''
      }
    }))
  }));
}

export async function getPosts(): Promise<PostType[]> {
  const postEntries = await client.withoutUnresolvableLinks.getEntries<TypePostSkeleton, 'hu'>({
    content_type: 'post'
  });

  return postEntries.items.map((post) => ({
    slug: post.fields.slug,
    body: post.fields.body,
    title: post.fields.title,
    description: post.fields.description,
    date: post.fields.date ? new Date(post.fields.date) : undefined,
    authors: post.fields.authors,
    published: post.fields.published,
    hidden: post.fields.hidden,
    tags: post.fields.tags,
    previewImage: post.fields.previewImage?.fields.file?.url
      ? 'https://' + post.fields.previewImage?.fields.file?.url
      : 'https://warp.sch.bme.hu/images/cover',
    previewImageAlt: post.fields.previewImage?.fields.description,
    ogImage: post.fields.ogImage?.fields.file?.url
      ? 'https://' + post.fields.ogImage?.fields.file?.url
      : 'https://warp.sch.bme.hu/images/cover',
    ogImageAlt: post.fields.ogImage?.fields.description || '',
    ogImageWidth: post.fields.ogImage?.fields.file?.details?.image?.width || 960,
    ogImageHeight: post.fields.ogImage?.fields.file?.details?.image?.height || 540
  }));
}

export async function getPostBySlug(slug: string) {
  const postEntries = await client.withoutUnresolvableLinks.getEntries<TypePostSkeleton, 'hu'>({
    content_type: 'post',
    'fields.slug[match]': slug
  });

  return postEntries.items.map((post) => ({
    slug: post.fields.slug,
    body: post.fields.body,
    title: post.fields.title,
    description: post.fields.description,
    date: post.fields.date ? new Date(post.fields.date) : undefined,
    authors: post.fields.authors,
    published: post.fields.published,
    hidden: post.fields.hidden,
    tags: post.fields.tags,
    previewImage: post.fields.previewImage?.fields.file?.url
      ? 'https://' + post.fields.previewImage?.fields.file?.url
      : 'https://warp.sch.bme.hu/images/cover',
    previewImageAlt: post.fields.previewImage?.fields.description,
    ogImage: post.fields.ogImage?.fields.file?.url
      ? 'https://' + post.fields.ogImage?.fields.file?.url
      : 'https://warp.sch.bme.hu/images/cover',
    ogImageAlt: post.fields.ogImage?.fields.description || '',
    ogImageWidth: post.fields.ogImage?.fields.file?.details?.image?.width || 960,
    ogImageHeight: post.fields.ogImage?.fields.file?.details?.image?.height || 540
  }));
}
