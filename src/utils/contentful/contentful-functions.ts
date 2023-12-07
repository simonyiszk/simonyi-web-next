import { cache } from "react";
import {
  AboutType,
  CurrentStudnetGroupsType,
  FooterType,
  ImageType,
  LightboxImage,
  Paginated,
  PostType,
  PresidencyType,
  TimelineEntityType,
} from "~/@types";
import { defaults } from "..";
import {
  getHomeAboutEntry,
  getFooterEntries,
  getHeroEntries,
  getLightboxEntries,
  getPostEntries,
  getCurrentStudentGroupsEntry,
  getAboutEntries,
  getTimelineEntries,
  getPresidencyEntry,
} from ".";

export const revalidate = false;

export const getHeroFromCache = cache(async (locale = "hu"): Promise<ImageType> => {
  const heroEntries = await getHeroEntries(locale);

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
  };
});

export const getHomeAboutEntryFromCache = cache(async (locale = "hu"): Promise<AboutType> => {
  const aboutEntries = await getHomeAboutEntry(locale);

  if (aboutEntries.items.length === 0) {
    return defaults.about;
  }

  const about = aboutEntries.items[0];

  return {
    title: about.fields.title,
    description: about.fields.description,
  };
});

export const getAboutEntriesFromCache = cache(
  async (locale = "hu"): Promise<{ before: AboutType; after: AboutType } | undefined> => {
    const entries = await getAboutEntries(locale);
    const before = entries[0];
    const after = entries[1];

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
      };
    }
  },
);

export const getTimelineEntriesFromCache = cache(async (locale = "hu"): Promise<TimelineEntityType[]> => {
  const timelineEntries = await getTimelineEntries(locale);

  return timelineEntries.items.map((timeline) => ({
    year: timeline.fields.year,
    description: timeline.fields.description,
    isImportant: timeline.fields.important,
  }));
});

export const getLightboxFromCache = cache(async (locale = "hu"): Promise<LightboxImage[]> => {
  const lightboxEntries = await getLightboxEntries(locale);

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
  }));
});

export const getCurrentStudentGroupsFromCache = cache(async (locale = "hu"): Promise<CurrentStudnetGroupsType> => {
  const currentStudentGroupsEntries = await getCurrentStudentGroupsEntry(locale);

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
  }))[0];
});

export const getPresidencyFromCache = cache(async (locale = "hu"): Promise<PresidencyType> => {
  const presidency = await getPresidencyEntry(locale);

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
  }))[0];
});

export const getPostsFromCache = cache(async (locale = "hu"): Promise<PostType[]> => {
  const postEntries = await getPostEntries(locale);

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
  }));
});

export const getPostBySlugFromCache = cache(async (slug: string, locale = "hu"): Promise<PostType | undefined> => {
  const posts = (await getPostsFromCache(locale)).filter((post) => post.slug === slug);

  if (posts.length === 0) {
    return undefined;
  }

  return posts[0];
});

export const getFooterFromCache = cache(async (locale = "hu"): Promise<FooterType> => {
  const footerEntries = await getFooterEntries(locale);

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
  }))[0];
});

export const getPaginatedPostsFromCache = cache(
  async (page: number | string | undefined, size: number | string | undefined, locale = "hu"): Promise<Paginated<PostType>> => {
    const postEntries = await getPostEntries(locale);

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
    };
  },
);
