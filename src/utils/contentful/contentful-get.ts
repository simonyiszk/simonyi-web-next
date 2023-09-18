import { cache } from 'react';
import {
  TypeLightboxSkeleton,
  TypeProfileSkeleton,
  TypeStudentGroupSkeleton,
  TypePostSkeleton,
  TypeAboutSkeleton,
  TypeFooterSkeleton,
  TypeHeroSkeleton,
  TypeTimelineSkeleton
} from '~/@types/generated';
import { Locales } from '~/@types';
import { contentfulClient } from '.';

export const getHeroEntries = cache(async (locale: Locales) => {
  const heroEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeHeroSkeleton>({
    content_type: 'hero',
    include: 1,
    limit: 1,
    order: ['-sys.createdAt'],
    locale
  });

  return heroEntries;
});

export const getHomeAboutEntry = cache(async (locale: Locales) => {
  const aboutEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeAboutSkeleton>({
    content_type: 'about',
    limit: 1,
    order: ['-sys.createdAt'],
    locale,
    'fields.displayOnHomepage': true
  });

  return aboutEntries;
});

export const getAboutEntries = cache(async (locale: Locales) => {
  const aboutBeforeTimelineEntry = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeAboutSkeleton>({
    content_type: 'about',
    limit: 1,
    order: ['-sys.createdAt'],
    locale,
    'fields.displayOnHomepage': false,
    'fields.displayOnAboutBeforeTimeline': true,
    'fields.displayOnAboutAfterTimeline': false
  });

  const aboutAfterTimelineEntry = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeAboutSkeleton>({
    content_type: 'about',
    limit: 1,
    order: ['-sys.createdAt'],
    locale,
    'fields.displayOnHomepage': false,
    'fields.displayOnAboutBeforeTimeline': false,
    'fields.displayOnAboutAfterTimeline': true
  });

  return [aboutBeforeTimelineEntry, aboutAfterTimelineEntry];
});

export const getTimelineEntries = cache(async (locale: Locales) => {
  const timelineEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeTimelineSkeleton>({
    content_type: 'timeline',
    order: ['fields.year', '-sys.createdAt'],
    locale
  });

  return timelineEntries;
});

export const getLightboxEntries = cache(async (locale: Locales) => {
  const lightboxEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeLightboxSkeleton>({
    content_type: 'lightbox',
    include: 1,
    order: ['-fields.date', 'fields.name', '-sys.createdAt'],
    limit: 100,
    locale
  });

  return lightboxEntries;
});

export const getStudentGroupEntries = cache(async (locale: Locales) => {
  const studentGroupEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeStudentGroupSkeleton>({
    content_type: 'studentGroup',
    include: 2,
    order: ['fields.name'],
    locale
  });

  return studentGroupEntries;
});

export const getProfileEntries = cache(async (locale: Locales) => {
  const profileEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeProfileSkeleton>({
    content_type: 'profile',
    include: 2,
    limit: 4,
    order: ['fields.priority', 'fields.name'],
    'fields.displayOnHome': true,
    locale
  });

  return profileEntries;
});

export const getPostEntries = cache(async (locale: Locales) => {
  const postEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypePostSkeleton>({
    content_type: 'post',
    order: ['-fields.date', '-sys.createdAt'],
    locale
  });

  return postEntries;
});

export const getPostBySlugEntries = cache(async (slug: string, locale: Locales) => {
  const postEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypePostSkeleton>({
    content_type: 'post',
    'fields.slug[match]': slug,
    limit: 1,
    locale
  });

  return postEntries;
});

export const getFooterEntries = cache(async (locale: Locales) => {
  const footerEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeFooterSkeleton>({
    content_type: 'footer',
    include: 2,
    limit: 1,
    locale
  });

  return footerEntries;
});
