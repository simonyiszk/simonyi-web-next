import { cache } from 'react';
import { AboutType, FooterType, LightboxImage, Locales, Paginated, PostType, ProfileType, StudentGroupType } from '~/@types';
import { defaults } from '..';
import { getAboutEntries, getFooterEntries, getLightboxEntries, getPostEntries, getProfileEntries, getStudentGroupEntries } from '.';

export const revalidate = false;

export const getAboutFromCache = cache(async (locale: Locales = 'hu'): Promise<AboutType> => {
  const aboutEntries = await getAboutEntries(locale);

  if (aboutEntries.items.length === 0) {
    return defaults.about;
  }

  const about = aboutEntries.items[0];

  return {
    title: about.fields.title,
    description: about.fields.description
  };
});

export const getLightboxFromCache = cache(async (locale: Locales = 'hu'): Promise<LightboxImage[]> => {
  const lightboxEntries = await getLightboxEntries(locale);

  return lightboxEntries.items.map((lightbox) => ({
    ...(lightbox.fields.photo && lightbox.fields.photo.fields.file && lightbox.fields.photo.fields.file.details.image
      ? {
          picture: {
            url: `https:${lightbox.fields.photo.fields.file.url}`,
            alt: lightbox.fields.photo.fields.description || '',
            width: lightbox.fields.photo.fields.file.details.image.width,
            height: lightbox.fields.photo.fields.file.details.image.height
          },
          title: lightbox.fields.photo.fields.title,
          description: lightbox.fields.photo.fields.description
        }
      : defaults.lightboxImage)
  }));
});

export const getStudentGroupsFromCache = cache(async (locale: Locales = 'hu'): Promise<StudentGroupType[]> => {
  const studentGroupEntries = await getStudentGroupEntries(locale);

  return studentGroupEntries.items.map((studentGroup) => ({
    name: studentGroup.fields.name,
    ...(studentGroup.fields.logo && studentGroup.fields.logo.fields.file && studentGroup.fields.logo.fields.file.details.image
      ? {
          logo: {
            url: `https:${studentGroup.fields.logo.fields.file.url}`,
            alt: studentGroup.fields.logo.fields.description || '',
            width: studentGroup.fields.logo.fields.file.details.image.width,
            height: studentGroup.fields.logo.fields.file.details.image.height
          }
        }
      : { logo: defaults.studentGroupLogo }),
    description: studentGroup.fields.description,
    socials: studentGroup.fields.socials.map((social) => ({
      ...(social && social.fields.link
        ? {
            icon: social.fields.icon,
            link: {
              url: social.fields.link.fields.url,
              title: social.fields.link.fields.title,
              text: social.fields.link.fields.text
            }
          }
        : defaults.social)
    })),
    isDense: studentGroup.fields.isDense
  }));
});

export const getProfilesFromCache = cache(async (locale: Locales = 'hu'): Promise<ProfileType[]> => {
  const profileEntries = await getProfileEntries(locale);

  return profileEntries.items.map((profile) => ({
    name: profile.fields.name,
    title: profile.fields.title,
    ...(profile.fields.profilePicture &&
    profile.fields.profilePicture.fields.file &&
    profile.fields.profilePicture.fields.file.details.image
      ? {
          profilePicture: {
            url: `https:${profile.fields.profilePicture.fields.file.url}`,
            alt: profile.fields.profilePicture.fields.description || '',
            width: profile.fields.profilePicture.fields.file.details.image.width,
            height: profile.fields.profilePicture.fields.file.details.image.height
          }
        }
      : {
          profilePicture: defaults.profilePicture
        }),
    socials: profile.fields.socials.map((social) => ({
      icon: social?.fields.icon || 'website',
      link: {
        url: social?.fields.link?.fields.url || '',
        title: social?.fields.link?.fields.title || '',
        text: social?.fields.link?.fields.text || ''
      }
    }))
  }));
});

export const getPostsFromCache = cache(async (locale: Locales = 'hu'): Promise<PostType[]> => {
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
          alt: post.fields.previewImage.fields.description || '',
          width: post.fields.previewImage.fields.file.details.image.width,
          height: post.fields.previewImage.fields.file.details.image.height
        }
      }),
    ...(post.fields.ogImage && post.fields.ogImage.fields.file && post.fields.ogImage.fields.file.details.image
      ? {
          ogImage: {
            url: `https://${post.fields.ogImage.fields.file.url}`,
            alt: post.fields.ogImage.fields.description || '',
            width: post.fields.ogImage.fields.file.details.image.width,
            height: post.fields.ogImage.fields.file.details.image.height
          }
        }
      : {
          ogImage: defaults.ogImage
        })
  }));
});

export const getPostBySlugFromCache = cache(async (slug: string, locale: Locales = 'hu'): Promise<PostType | undefined> => {
  const posts = (await getPostsFromCache(locale)).filter((post) => post.slug === slug);

  if (posts.length === 0) {
    return undefined;
  }

  return posts[0];
});

export const getFooterFromCache = cache(async (locale: Locales = 'hu'): Promise<FooterType> => {
  const footerEntries = await getFooterEntries(locale);

  if (footerEntries.items.length === 0) {
    return {
      sections: []
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
                          text: link.fields.text
                        }
                      : defaults.social.link)
                  }))
                }
              : defaults.footerSection)
          })),
          github: footer.fields.github?.fields
        }
      : defaults.footer)
  }))[0];
});

export const getPaginatedPostsFromCache = cache(
  async (page: number | string | undefined, size: number | string | undefined, locale: Locales = 'hu'): Promise<Paginated<PostType>> => {
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
              alt: post.fields.previewImage.fields.description || '',
              width: post.fields.previewImage.fields.file.details.image.width,
              height: post.fields.previewImage.fields.file.details.image.height
            }
          }),
        ...(post.fields.ogImage && post.fields.ogImage.fields.file && post.fields.ogImage.fields.file.details.image
          ? {
              ogImage: {
                url: `https://${post.fields.ogImage.fields.file.url}`,
                alt: post.fields.ogImage.fields.description || '',
                width: post.fields.ogImage.fields.file.details.image.width,
                height: post.fields.ogImage.fields.file.details.image.height
              }
            }
          : {
              ogImage: defaults.ogImage
            })
      }))
    };
  }
);
