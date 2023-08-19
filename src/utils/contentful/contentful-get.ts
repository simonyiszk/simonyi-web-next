import { cache } from 'react';
import {
  TypeLightboxSkeleton,
  TypeProfileSkeleton,
  TypeStudentGroupSkeleton,
  TypePostSkeleton,
  TypeAboutSkeleton,
  TypeFooterSkeleton,
  TypeHeroSkeleton
} from '~/@types/generated';
import { stringToContentfulLocale } from '..';
import { contentfulClient } from '.';

export const getHeroEntries = cache(async (locale: string) => {
  const heroEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeHeroSkeleton>({
    content_type: 'hero',
    include: 1,
    limit: 1,
    order: ['-sys.createdAt'],
    locale: stringToContentfulLocale(locale)
  });

  return heroEntries;
});

export const getAboutEntries = cache(async (locale: string) => {
  const aboutEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeAboutSkeleton>({
    content_type: 'about',
    limit: 1,
    order: ['-sys.createdAt'],
    locale: stringToContentfulLocale(locale)
  });

  return aboutEntries;
});

export const getLightboxEntries = cache(async (locale: string) => {
  const lightboxEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeLightboxSkeleton>({
    content_type: 'lightbox',
    include: 1,
    order: ['-fields.date', 'fields.name', '-sys.createdAt'],
    limit: 100,
    locale: stringToContentfulLocale(locale)
  });

  return lightboxEntries;
});

export const getStudentGroupEntries = cache(async (locale: string) => {
  const studentGroupEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeStudentGroupSkeleton>({
    content_type: 'studentGroup',
    include: 2,
    order: ['fields.name'],
    locale: stringToContentfulLocale(locale)
  });

  return studentGroupEntries;
});

export const getProfileEntries = cache(async (locale: string) => {
  const profileEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeProfileSkeleton>({
    content_type: 'profile',
    include: 2,
    limit: 4,
    order: ['fields.priority', 'fields.name'],
    locale: stringToContentfulLocale(locale)
  });

  return profileEntries;
});

export const getPostEntries = cache(async (locale: string) => {
  const postEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypePostSkeleton>({
    content_type: 'post',
    order: ['-fields.date', '-sys.createdAt'],
    locale: stringToContentfulLocale(locale)
  });

  return postEntries;
});

export const getPostBySlugEntries = cache(async (slug: string, locale: string) => {
  const postEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypePostSkeleton>({
    content_type: 'post',
    'fields.slug[match]': slug,
    limit: 1,
    locale: stringToContentfulLocale(locale)
  });

  return postEntries;
});

export const getFooterEntries = cache(async (locale: string) => {
  const footerEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeFooterSkeleton>({
    content_type: 'footer',
    include: 2,
    limit: 1,
    locale: stringToContentfulLocale(locale)
  });

  return footerEntries;
});
