import { format } from "util";

function SEO({
  themeColor,
  title,
  titleTemplate,
  description,
  favicon,
  image,
  imageAlt,
  siteUrl,
  pathname,
  ogType,
  ogTitle,
  ogDescription,
  ogUrl,
  ogImage,
  ogImageAlt,
  ogImageType,
  ogImageWidth,
  ogImageHeight,
  twitterCard,
  twitterTitle,
  twitterUrl,
  twitterDescription,
  twitterImage,
  twitterImageAlt,
  twitterSite,
  twitterCreator,
  children,
}: {
  themeColor?: string;
  title?: string;
  titleTemplate?: string;
  description?: string;
  favicon?: string;
  image?: string;
  imageAlt?: string;
  siteUrl?: string;
  pathname?: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogImageType?: string;
  ogImageWidth?: string;
  ogImageHeight?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterUrl?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterImageAlt?: string;
  twitterSite?: string;
  twitterCreator?: string;
  children?: React.ReactNode;
}) {
  // Default fallback values
  const {
    defaultThemeColor,
    defaultTitle,
    defaultTitleTemplate,
    defaultDescription,
    defaultFavicon,
    defaultSiteUrl,
    defaultImage,
    defaultImageAlt,
    defaultOgType,
    defaultOgImageType,
    defaultOgImageWidth,
    defaultOgImageHeight,
    defaultTwitterCard,
    defaultTwitterSite,
    defaultTwitterCreator,
  } = {
    defaultThemeColor: "#63BC47",
    defaultTitle: "Simonyi Károly Szakkollégium",
    defaultTitleTemplate: "%s - Simonyi Károly Szakkollégium",
    defaultDescription:
      "A Simonyi Károly Szakkollégium egy hallgatói szakmai szervezet, amely a BME Villamosmérnöki és Informatikai Karán működik. Tagjai a villamosmérnöki és informatikai szakma közel teljes palettáját művelik stúdiótechnikától kezdve a webdesign és -fejlesztésen át az elektronikáig, sőt robotikáig.",
    defaultFavicon: "/favicon.svg",
    defaultSiteUrl: "https://simonyi.bme.hu",
    defaultImage: "/images/defaults/cover.png",
    defaultImageAlt: "Simonyi Károly Szakkollégium - Simonyi Károly College for Advanced Studies",
    defaultOgType: "website",
    defaultOgImageType: "image/png",
    defaultOgImageWidth: "960",
    defaultOgImageHeight: "540",
    defaultTwitterCard: "summary_large_image",
    defaultTwitterSite: "simonyiszakkoli",
    defaultTwitterCreator: "simonyiszakkoli",
  };

  // Generic SEO support
  const seo = {
    themeColor: themeColor || defaultThemeColor,
    title: title ? format(titleTemplate || defaultTitleTemplate, title) : defaultTitle,
    description: description || defaultDescription,
    favicon: favicon || defaultFavicon,
    image: `${siteUrl || defaultSiteUrl}${image || defaultImage}`,
    imageAlt: `${imageAlt || defaultImageAlt}`,
    url: `${siteUrl || defaultSiteUrl}${pathname || ""}`,
  };

  // Facebook / Open Graph
  // https://developers.facebook.com/docs/sharing/webmasters/
  const og = {
    type: ogType || defaultOgType,
    title: ogTitle || seo.title,
    description: ogDescription || seo.description,
    url: ogUrl || seo.url,
    image: ogImage || seo.image,
    imageAlt: ogImageAlt || seo.imageAlt,
    imageType: ogImageType || defaultOgImageType,
    imageWidth: ogImageWidth || defaultOgImageWidth,
    imageHeight: ogImageHeight || defaultOgImageHeight,
  };

  // Twitter
  // https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup
  const twitter = {
    card: twitterCard || defaultTwitterCard,
    title: twitterTitle || seo.title,
    url: twitterUrl || seo.url,
    description: twitterDescription || seo.description,
    image: twitterImage || seo.image,
    imageAlt: twitterImageAlt || seo.imageAlt,
    site: twitterSite || defaultTwitterSite,
    creator: twitterCreator || defaultTwitterCreator,
  };

  return (
    <>
      <meta name="theme-color" content={seo.themeColor} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="icon" href={seo.favicon} type="image/svg+xml" />
      <meta property="og:type" content={og.type} />
      <meta property="og:title" content={og.title} />
      <meta property="og:description" content={og.description} />
      <meta property="og:url" content={og.url} />
      <meta property="og:image" content={og.image} />
      <meta property="og:image:alt" content={og.imageAlt} />
      <meta property="og:image:type" content={og.type} />
      <meta property="og:image:width" content={og.imageWidth} />
      <meta property="og:image:height" content={og.imageHeight} />
      <meta name="twitter:card" content={twitter.card} />
      <meta name="twitter:title" content={twitter.title} />
      <meta name="twitter:url" content={twitter.url} />
      <meta name="twitter:description" content={twitter.description} />
      <meta name="twitter:image" content={twitter.image} />
      <meta name="twitter:image:alt" content={twitter.imageAlt} />
      <meta name="twitter:site" content={twitter.site} />
      <meta name="twitter:creator" content={twitter.creator} />
      {children}
    </>
  );
}

export { SEO };
