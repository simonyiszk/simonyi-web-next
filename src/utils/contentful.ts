import { createClient } from 'contentful';
import {
  TypeLightboxSkeleton,
  TypeProfileSkeleton,
  TypeStudentGroupSkeleton,
  TypePostSkeleton,
  TypeAboutSkeleton,
  TypeFooterSkeleton
} from '~/@types/generated/content-types';
import { AboutType, FooterDataType, LightboxImage, PostType, ProfileType, StudentGroupType } from '~/@types';
import { defaults } from '.';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID ?? 'ErrorNoSpaceID',
  accessToken:
    (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
      ? process.env.CONTENTFUL_ACCESS_TOKEN
      : process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) ?? 'ErrorNoAccessToken',
  host: process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? 'cdn.contentful.com' : 'preview.contentful.com',
  environment: process.env.CONTENTFUL_ENVIRONMENT
});

export async function getAbout(): Promise<AboutType> {
  const aboutEntries = await client.getEntries<TypeAboutSkeleton, 'hu'>({ content_type: 'about', limit: 1, order: ['-sys.createdAt'] });

  return {
    title: aboutEntries.items[0].fields.title,
    description: aboutEntries.items[0].fields.description
  };
}

export async function getLightbox(): Promise<LightboxImage[]> {
  const lightboxEntries = await client.withoutUnresolvableLinks.getEntries<TypeLightboxSkeleton, 'hu'>({
    content_type: 'lightbox',
    include: 1,
    order: ['-fields.date', 'fields.name', '-sys.createdAt'],
    limit: 100
  });

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
}

export async function getStudentGroups(): Promise<StudentGroupType[]> {
  const studentGroupEntries = await client.withoutUnresolvableLinks.getEntries<TypeStudentGroupSkeleton, 'hu'>({
    content_type: 'studentGroup',
    include: 2,
    order: ['fields.name']
  });

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
}

export async function getProfiles(): Promise<ProfileType[]> {
  const profileEntries = await client.withoutUnresolvableLinks.getEntries<TypeProfileSkeleton, 'hu'>({
    content_type: 'profile',
    include: 2,
    limit: 4,
    order: ['fields.priority', 'fields.name']
  });

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
}

export async function getPostBySlug(slug: string): Promise<PostType | undefined> {
  const postEntries = await client.withoutUnresolvableLinks.getEntries<TypePostSkeleton, 'hu'>({
    content_type: 'post',
    'fields.slug[match]': slug,
    limit: 1
  });

  if (postEntries.items.length === 0) {
    return undefined;
  }

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
  }))[0];
}

export async function getFooter(): Promise<FooterDataType> {
  const footerEntries = await client.withoutUnresolvableLinks.getEntries<TypeFooterSkeleton, 'hu'>({
    content_type: 'footer',
    include: 2,
    limit: 1
  });

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
          }))
        }
      : defaults.footer)
  }))[0];
}
