import { cache } from "react";
import {
  TypeLightboxSkeleton,
  TypePostSkeleton,
  TypeAboutSkeleton,
  TypeFooterSkeleton,
  TypeHeroSkeleton,
  TypeTimelineSkeleton,
  TypePresidencySkeleton,
  TypeCurrentStudentGroupsSkeleton,
} from "~/@types/generated";
import { stringToContentfulLocale } from "../locales";
import { contentfulClient } from ".";

export const getHeroEntries = cache(async (locale: string) => {
  const heroEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeHeroSkeleton>({
    content_type: "hero",
    include: 1,
    limit: 1,
    order: ["-sys.createdAt"],
    locale: stringToContentfulLocale(locale),
  });

  return heroEntries;
});

export const getHomeAboutEntry = cache(async (locale: string) => {
  const aboutEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeAboutSkeleton>({
    content_type: "about",
    limit: 1,
    order: ["-sys.createdAt"],
    locale: stringToContentfulLocale(locale),
    "fields.displayOnHomepage": true,
  });

  return aboutEntries;
});

export const getAboutEntries = cache(async (locale: string) => {
  const aboutBeforeTimelineEntry = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeAboutSkeleton>({
    content_type: "about",
    limit: 1,
    order: ["-sys.createdAt"],
    locale: stringToContentfulLocale(locale),
    "fields.displayOnHomepage": false,
    "fields.displayOnAboutBeforeTimeline": true,
    "fields.displayOnAboutAfterTimeline": false,
  });

  const aboutAfterTimelineEntry = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeAboutSkeleton>({
    content_type: "about",
    limit: 1,
    order: ["-sys.createdAt"],
    locale: stringToContentfulLocale(locale),
    "fields.displayOnHomepage": false,
    "fields.displayOnAboutBeforeTimeline": false,
    "fields.displayOnAboutAfterTimeline": true,
  });

  return [aboutBeforeTimelineEntry, aboutAfterTimelineEntry];
});

export const getTimelineEntries = cache(async (locale: string) => {
  const timelineEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeTimelineSkeleton>({
    content_type: "timeline",
    order: ["fields.year", "-sys.createdAt"],
    locale: stringToContentfulLocale(locale),
  });

  return timelineEntries;
});

export const getLightboxEntries = cache(async (locale: string) => {
  const lightboxEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeLightboxSkeleton>({
    content_type: "lightbox",
    include: 1,
    order: ["-fields.date", "fields.name", "-sys.createdAt"],
    limit: 100,
    locale: stringToContentfulLocale(locale),
  });

  return lightboxEntries;
});

export const getCurrentStudentGroupsEntry = cache(async (locale: string) => {
  const currentStudentGroupsEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeCurrentStudentGroupsSkeleton>({
    content_type: "currentStudentGroups",
    include: 2,
    limit: 1,
    order: ["fields.name", "-sys.createdAt"],
    locale: stringToContentfulLocale(locale),
  });

  return currentStudentGroupsEntries;
});

export const getPresidencyEntry = cache(async (locale: string) => {
  const presidencyEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypePresidencySkeleton>({
    content_type: "presidency",
    include: 3,
    order: ["-fields.year", "-sys.createdAt"],
    limit: 1,
    locale: stringToContentfulLocale(locale),
  });

  return presidencyEntries;
});

export const getPostEntries = cache(async (locale: string) => {
  const postEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypePostSkeleton>({
    content_type: "post",
    order: ["-fields.date", "-sys.createdAt"],
    locale: stringToContentfulLocale(locale),
  });

  return postEntries;
});

export const getPostBySlugEntries = cache(async (slug: string, locale: string) => {
  const postEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypePostSkeleton>({
    content_type: "post",
    "fields.slug[match]": slug,
    limit: 1,
    locale: stringToContentfulLocale(locale),
  });

  return postEntries;
});

export const getFooterEntries = cache(async (locale: string) => {
  const footerEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeFooterSkeleton>({
    content_type: "footer",
    include: 2,
    limit: 1,
    locale: stringToContentfulLocale(locale),
  });

  return footerEntries;
});
