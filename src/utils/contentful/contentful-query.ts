import { cache } from "react";
import { TypeAboutSkeleton, TypeCurrentStudentGroupsSkeleton, TypeFooterSkeleton, TypeHeroSkeleton, TypeLightboxSkeleton, TypePostSkeleton, TypePresidencySkeleton, TypeTimelineSkeleton } from "~/@types/generated";
import { AboutType, CurrentStudnetGroupsType, FooterType, ImageType, LightboxImage, Paginated, PostType, PresidencyType, TimelineEntityType } from "~/@types";
import { stringToContentfulLocale } from "../locales";
import { defaults } from "../defaults";
import { contentfulClient } from "./contentful-client";

export const query = {
  homeHero: cache(async (locale: string) => {
    const heroEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeHeroSkeleton>({
      content_type: "hero",
      include: 1,
      limit: 1,
      order: ["-sys.createdAt"],
      locale: stringToContentfulLocale(locale),
    });

    if (heroEntries.items.length === 0) {
      return defaults.hero;
    }

    const hero = heroEntries.items[0];

    if (!hero.fields.image || !hero.fields.image.fields.file || !hero.fields.image.fields.file.details.image) {
      return defaults.hero;
    }

    return {
      url: `https:${hero.fields.image.fields.file.url}`,
      alt: hero.fields.image.fields.description || "",
      width: hero.fields.image.fields.file.details.image.width,
      height: hero.fields.image.fields.file.details.image.height,
    } satisfies ImageType;
  }),
  homeAbout: cache(async (locale: string) => {
    const aboutEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeAboutSkeleton>({
      content_type: "about",
      limit: 1,
      order: ["-sys.createdAt"],
      locale: stringToContentfulLocale(locale),
      "fields.displayOnHomepage": true,
    });

    if (aboutEntries.items.length === 0) {
      return defaults.about;
    }

    const about = aboutEntries.items[0];

    return {
      title: about.fields.title,
      description: about.fields.description,
    } satisfies AboutType;
  }),
  about: cache(async (locale: string) => {
    const before = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeAboutSkeleton>({
      content_type: "about",
      limit: 1,
      order: ["-sys.createdAt"],
      locale: stringToContentfulLocale(locale),
      "fields.displayOnHomepage": false,
      "fields.displayOnAboutBeforeTimeline": true,
      "fields.displayOnAboutAfterTimeline": false,
    });

    const after = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeAboutSkeleton>({
      content_type: "about",
      limit: 1,
      order: ["-sys.createdAt"],
      locale: stringToContentfulLocale(locale),
      "fields.displayOnHomepage": false,
      "fields.displayOnAboutBeforeTimeline": false,
      "fields.displayOnAboutAfterTimeline": true,
    });

    if (before.items.length > 0 && after.items.length > 0) {
      return {
        before: {
          title: before.items[0].fields.title,
          description: before.items[0].fields.description,
        },
        after: {
          title: after.items[0].fields.title,
          description: after.items[0].fields.description,
        },
      } satisfies {
        before: AboutType,
        after: AboutType,
      };
    }
  }),
  timeline: cache(async (locale: string) => {
    const timelineEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeTimelineSkeleton>({
      content_type: "timeline",
      order: ["fields.year", "-sys.createdAt"],
      locale: stringToContentfulLocale(locale),
    });

    return timelineEntries.items.map((timeline) => ({
      year: timeline.fields.year,
      description: timeline.fields.description,
      isImportant: timeline.fields.important,
    }) satisfies TimelineEntityType);
  }),
  lightbox: cache(async (locale: string) => {
    const lightboxEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeLightboxSkeleton>({
      content_type: "lightbox",
      include: 1,
      order: ["-fields.date", "fields.name", "-sys.createdAt"],
      limit: 100,
      locale: stringToContentfulLocale(locale),
    });

    return lightboxEntries.items.map((lightbox) => ({
      ...(lightbox.fields.photo && lightbox.fields.photo.fields.file && lightbox.fields.photo.fields.file.details.image
        ? {
          picture: {
            url: `https:${lightbox.fields.photo.fields.file.url}`,
            alt: lightbox.fields.photo.fields.description || "",
            width: lightbox.fields.photo.fields.file.details.image.width,
            height: lightbox.fields.photo.fields.file.details.image.height,
          },
          title: lightbox.fields.photo.fields.title,
          description: lightbox.fields.photo.fields.description,
        }
        : defaults.lightboxImage),
    }) satisfies LightboxImage);
  }),
  currentClubs: cache(async (locale: string) => {
    const currentStudentGroupsEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeCurrentStudentGroupsSkeleton>({
      content_type: "currentStudentGroups",
      include: 2,
      limit: 1,
      order: ["fields.name", "-sys.createdAt"],
      locale: stringToContentfulLocale(locale),
    });

    if (currentStudentGroupsEntries.items.length === 0) {
      return {
        title: "",
        studentGroups: [],
      };
    }

    return currentStudentGroupsEntries.items.map((currentStudentGroups) => ({
      title: currentStudentGroups.fields.title,
      studentGroups: currentStudentGroups.fields.studentGroups.map((studentGroup) => {
        if (!studentGroup) {
          return {
            name: "",
            logo: defaults.studentGroupLogo,
            description: "",
            socials: [],
            isDense: false,
          };
        }

        return {
          name: studentGroup.fields.name,
          ...(studentGroup.fields.logo && studentGroup.fields.logo.fields.file && studentGroup.fields.logo.fields.file.details.image
            ? {
              logo: {
                url: `https:${studentGroup.fields.logo.fields.file.url}`,
                alt: studentGroup.fields.logo.fields.description || "",
                width: studentGroup.fields.logo.fields.file.details.image.width,
                height: studentGroup.fields.logo.fields.file.details.image.height,
              },
            }
            : { logo: defaults.studentGroupLogo }),
          description: studentGroup.fields.description,
          socials: studentGroup.fields.links.map((link) => ({
            ...(link
              ? {
                icon: link.fields.icon,
                link: {
                  url: link.fields.url,
                  title: link.fields.title,
                  text: link.fields.text,
                },
              }
              : defaults.social),
          })),
          isDense: studentGroup.fields.isDense,
        };
      }),
    }))[0] satisfies CurrentStudnetGroupsType;
  }),
  presidency: cache(async (locale: string) => {
    const presidency = await contentfulClient.withoutUnresolvableLinks.getEntries<TypePresidencySkeleton>({
      content_type: "presidency",
      include: 3,
      order: ["-fields.year", "-sys.createdAt"],
      limit: 1,
      locale: stringToContentfulLocale(locale),
    });

    if (presidency.items.length === 0) {
      return {
        title: "",
        profiles: [],
      };
    }

    return presidency.items.map((presidency) => ({
      title: presidency.fields.title,
      ...(presidency.fields.profiles
        ? {
          profiles: presidency.fields.profiles.map((profile) => {
            if (!profile) {
              return {
                name: "",
                title: "",
                socials: [],
                profilePicture: defaults.profilePicture,
              };
            }

            return {
              name: profile.fields.name,
              title: profile.fields.title,
              socials: profile.fields.links?.map((link) => ({
                icon: link?.fields.icon || "website",
                link: {
                  url: link?.fields.url || "",
                  title: link?.fields.title || "",
                  text: link?.fields.text || "",
                },
              })),
              ...(profile.fields.profilePicture &&
                profile.fields.profilePicture.fields.file &&
                profile.fields.profilePicture.fields.file.details.image
                ? {
                  profilePicture: {
                    url: `https:${profile.fields.profilePicture.fields.file.url}`,
                    alt: profile.fields.profilePicture.fields.description || "",
                    width: profile.fields.profilePicture.fields.file.details.image.width,
                    height: profile.fields.profilePicture.fields.file.details.image.height,
                  },
                }
                : {
                  profilePicture: defaults.profilePicture,
                }),
            };
          }),
        }
        : {
          profiles: [],
        }),
    }))[0] satisfies PresidencyType;
  }),
  posts: cache(async (locale: string) => {
    const postEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypePostSkeleton>({
      content_type: "post",
      order: ["-fields.date", "-sys.createdAt"],
      locale: stringToContentfulLocale(locale),
    });

    return postEntries.items.map((post) => ({
      slug: post.fields.slug,
      body: post.fields.body,
      title: post.fields.title,
      description: post.fields.description,
      date: post.fields.date ? new Date(post.fields.date) : undefined,
      authors: post.fields.authors,
      hidden: post.fields.hidden,
      tags: post.fields.tags,
      ...(post.fields.previewImage &&
        post.fields.previewImage.fields.file &&
        post.fields.previewImage.fields.file.details.image && {
        previewImage: {
          url: `https://${post.fields.previewImage.fields.file.url}`,
          alt: post.fields.previewImage.fields.description || "",
          width: post.fields.previewImage.fields.file.details.image.width,
          height: post.fields.previewImage.fields.file.details.image.height,
        },
      }),
      ...(post.fields.ogImage && post.fields.ogImage.fields.file && post.fields.ogImage.fields.file.details.image
        ? {
          ogImage: {
            url: `https://${post.fields.ogImage.fields.file.url}`,
            alt: post.fields.ogImage.fields.description || "",
            width: post.fields.ogImage.fields.file.details.image.width,
            height: post.fields.ogImage.fields.file.details.image.height,
          },
        }
        : {
          ogImage: defaults.ogImage,
        }),
    }) satisfies PostType);
  }),
  postBySlug: cache(async (slug: string, locale: string) => {
    const postEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypePostSkeleton>({
      content_type: "post",
      "fields.slug[match]": slug,
      limit: 1,
      locale: stringToContentfulLocale(locale),
    });

    const posts = postEntries.items.map((post) => ({
      slug: post.fields.slug,
      body: post.fields.body,
      title: post.fields.title,
      description: post.fields.description,
      date: post.fields.date ? new Date(post.fields.date) : undefined,
      authors: post.fields.authors,
      hidden: post.fields.hidden,
      tags: post.fields.tags,
      ...(post.fields.previewImage &&
        post.fields.previewImage.fields.file &&
        post.fields.previewImage.fields.file.details.image && {
        previewImage: {
          url: `https://${post.fields.previewImage.fields.file.url}`,
          alt: post.fields.previewImage.fields.description || "",
          width: post.fields.previewImage.fields.file.details.image.width,
          height: post.fields.previewImage.fields.file.details.image.height,
        },
      }),
      ...(post.fields.ogImage && post.fields.ogImage.fields.file && post.fields.ogImage.fields.file.details.image
        ? {
          ogImage: {
            url: `https://${post.fields.ogImage.fields.file.url}`,
            alt: post.fields.ogImage.fields.description || "",
            width: post.fields.ogImage.fields.file.details.image.width,
            height: post.fields.ogImage.fields.file.details.image.height,
          },
        }
        : {
          ogImage: defaults.ogImage,
        }),
    }) satisfies PostType);

    if (posts.length === 0) {
      return undefined;
    }

    return posts[0];
  }),
  footer: cache(async (locale: string) => {
    const footerEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypeFooterSkeleton>({
      content_type: "footer",
      include: 2,
      limit: 1,
      locale: stringToContentfulLocale(locale),
    });

    if (footerEntries.items.length === 0) {
      return {
        sections: [],
      };
    }

    return footerEntries.items.map((footer) => ({
      ...(footer.fields.sections
        ? {
          sections: footer.fields.sections.map((section) => ({
            ...(section && section.fields.links
              ? {
                title: section.fields.title,
                address: section.fields.address,
                links: section.fields.links.map((link) => ({
                  ...(link
                    ? {
                      url: link.fields.url,
                      title: link.fields.title,
                      text: link.fields.text,
                    }
                    : defaults.social.link),
                })),
              }
              : defaults.footerSection),
          })),
          github: footer.fields.github?.fields,
        }
        : defaults.footer),
    }) satisfies FooterType)[0];
  }),
  paginatedPosts: cache(async (locale: string, page: number | string | undefined, size: number | string | undefined) => {
    const postEntries = await contentfulClient.withoutUnresolvableLinks.getEntries<TypePostSkeleton>({
      content_type: "post",
      order: ["-fields.date", "-sys.createdAt"],
      locale: stringToContentfulLocale(locale),
    });

    let unsafePage = page ? Number(page) : defaults.pagination.page;
    let unsafeSize = size ? Number(size) : defaults.pagination.size;

    unsafePage = Number.isNaN(unsafePage) ? defaults.pagination.page : unsafePage;
    unsafeSize = Number.isNaN(unsafeSize) ? defaults.pagination.size : unsafeSize;

    const safeSize = unsafeSize > 0 && unsafeSize < 21 ? unsafeSize : 20;

    const hiddenPosts = postEntries.items.filter((post) => post.fields.hidden);

    const totalItems = postEntries.total - hiddenPosts.length;
    const totalPages = Math.ceil(totalItems / safeSize);

    const safePage = unsafePage > 0 && unsafePage <= totalPages ? unsafePage : totalPages;

    const items = postEntries.items.filter((post) => !post.fields.hidden).slice((safePage - 1) * safeSize, safePage * safeSize);

    return {
      totalItems,
      totalPages,
      currentPage: safePage,
      pageSize: safeSize,
      items: items.map((post) => ({
        slug: post.fields.slug,
        body: post.fields.body,
        title: post.fields.title,
        description: post.fields.description,
        date: post.fields.date ? new Date(post.fields.date) : undefined,
        authors: post.fields.authors,
        hidden: post.fields.hidden,
        tags: post.fields.tags,
        ...(post.fields.previewImage &&
          post.fields.previewImage.fields.file &&
          post.fields.previewImage.fields.file.details.image && {
          previewImage: {
            url: `https://${post.fields.previewImage.fields.file.url}`,
            alt: post.fields.previewImage.fields.description || "",
            width: post.fields.previewImage.fields.file.details.image.width,
            height: post.fields.previewImage.fields.file.details.image.height,
          },
        }),
        ...(post.fields.ogImage && post.fields.ogImage.fields.file && post.fields.ogImage.fields.file.details.image
          ? {
            ogImage: {
              url: `https://${post.fields.ogImage.fields.file.url}`,
              alt: post.fields.ogImage.fields.description || "",
              width: post.fields.ogImage.fields.file.details.image.width,
              height: post.fields.ogImage.fields.file.details.image.height,
            },
          }
          : {
            ogImage: defaults.ogImage,
          }),
      })),
    } satisfies Paginated<PostType>;
  }),
};
