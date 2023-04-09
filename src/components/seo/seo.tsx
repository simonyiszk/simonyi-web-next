import { format } from 'util';

function SEO({
  themeColor,
  title,
  titleTemplate,
  description,
  image,
  siteUrl,
  pathname,
  ogType,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  ogImageType,
  ogImageWidth,
  ogImageHeight,
  twitterCard,
  twitterTitle,
  twitterUrl,
  twitterDescription,
  twitterImage,
  twitterSite,
  twitterCreator,
  children
}: {
  themeColor?: string;
  title?: string;
  titleTemplate?: string;
  description?: string;
  image?: string;
  siteUrl?: string;
  pathname?: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  ogImageType?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterUrl?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterSite?: string;
  twitterCreator?: string;
  children?: React.ReactNode;
}) {
  const {
    themeColor: defaultThemeColor,
    title: defaultTitle,
    titleTemplate: defaultTitleTemplate,
    description: defaultDescription,
    image: defaultImage,
    siteUrl: defaultSiteUrl,
    ogType: defaultOgType,
    ogImageType: defaultOgImageType,
    ogImageWidth: defaultOgImageWidth,
    ogImageHeight: defaultOgImageHeight,
    twitterCard: defaultTwitterCard,
    twitterSite: defaultTwitterSite,
    twitterCreator: defaultTwitterCreator
  } = {
    themeColor: '',
    title: '',
    titleTemplate: '',
    description: '',
    image: '',
    siteUrl: '',
    ogType: '',
    ogImageType: '',
    ogImageWidth: '',
    ogImageHeight: '',
    twitterCard: '',
    twitterSite: '',
    twitterCreator: ''
  };

  const seo = {
    themeColor: themeColor || defaultThemeColor,
    title: title ? format(titleTemplate || defaultTitleTemplate, title) : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl || defaultSiteUrl}${image || defaultImage}`,
    url: `${siteUrl || defaultSiteUrl}${pathname || ''}`
  };

  // https://developers.facebook.com/docs/sharing/webmasters/
  const og = {
    type: ogType || defaultOgType,
    title: ogTitle || seo.title,
    description: ogDescription || seo.description,
    url: ogUrl || seo.url,
    image: ogImage || seo.image,
    imageType: ogImageType || defaultOgImageType,
    imageWidth: ogImageWidth || defaultOgImageWidth,
    imageHeight: ogImageHeight || defaultOgImageHeight
  };

  // https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
  const twitter = {
    card: twitterCard || defaultTwitterCard,
    title: twitterTitle || seo.title,
    url: twitterUrl || seo.url,
    description: twitterDescription || seo.description,
    image: twitterImage || seo.image,
    site: twitterSite || defaultTwitterSite,
    creator: twitterCreator || defaultTwitterCreator
  };

  return (
    <>
      <meta name="theme-color" content={seo.themeColor} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:type" content={og.type} />
      <meta property="og:title" content={og.title} />
      <meta property="og:description" content={og.description} />
      <meta property="og:url" content={og.url} />
      <meta property="og:image" content={og.image} />
      <meta property="og:image:type" content={og.type} />
      <meta property="og:image:width" content={og.imageWidth} />
      <meta property="og:image:height" content={og.imageHeight} />
      <meta name="twitter:card" content={twitter.card} />
      <meta name="twitter:title" content={twitter.title} />
      <meta name="twitter:url" content={twitter.url} />
      <meta name="twitter:description" content={twitter.description} />
      <meta name="twitter:image" content={twitter.image} />
      <meta name="twitter:site" content={twitter.site} />
      <meta name="twitter:creator" content={twitter.creator} />
      {children}
    </>
  );
}

export { SEO };
