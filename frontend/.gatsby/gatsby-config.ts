import dotenv from 'dotenv'
import path from 'path'
import { environment } from '../src/utils/configurations'

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`
})

const siteMetadata = {
  siteUrl: 'https://simonyi.bme.hu/',
  translations: ['hu', 'en'],
  lang: 'hu',
  title: 'Simonyi Károly Szakkollégium',
  titleTemplate: '%s | Simonyi Károly Szakkollégium',
  description:
    `A Simonyi Károly Szakkollégium egy hallgatói szakmai szervezet, amely a BME Villamosmérnöki és Informatikai Karán működik. ` +
    `A szakkollégium 2003-ban vette fel Simonyi Károly, a Kar rajongva tisztelt professzora nevét. A Simonyi Károly Szakkollégium célja, ` +
    `hogy elsősorban a szakkollégium tagjai, lehetőség szerint a Villamosmérnöki és Informatikai Kar minden hallgatója számára ` +
    `lehetőséget biztosítson az egyetemi képzést kiegészítő ismeretek elsajátítására. Ennek érdekében tanfolyamokat, bemutatókat, ` +
    `konferenciákat és más szakmai rendezvényeket szervez, lehetőségéhez mérten infrastruktúrával támogatja a hallgatók önálló szakmai ` +
    `munkáit. Ezenkívül a szakkollégium céljai közé tartozik, hogy a tagjai által elért eredményeket minél szélesebb körben publikálja, ` +
    `a magyar felsőoktatás más egységeivel és a szakemberekkel megismertesse a szakkollégiumban folyó munkát.`,
  author: 'https://github.com/simonyiszk',
  image: '/default-og.png',
  favicon: `/favicon.png`,
  keywords: ['community', 'simonyi', 'kir-dev', 'schdesign', 'ha5kfu', 'acstudio', 'spot', 'legokor', 'sem', 'schonherz', 'bsstudio'],
  robots: 'index, follow',
  social: {
    twitter: `https://twitter.com/${environment.socials.twitterUsername}`,
    twitterUsername: environment.socials.twitterUsername,
    github: environment.socials.githubOrgUrl,
    facebook: environment.socials.facebookUrl,
    instagram: environment.socials.instagramUrl,
    linkedin: environment.socials.linkedinUrl,
    youtube: environment.socials.youtubeUrl
  }
}

export default {
  siteMetadata,
  plugins: [
    /** Chakra UI */
    `@chakra-ui/gatsby-plugin`,

    /** Image processing */
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`webp`],
          placeholder: `blurred`,
          quality: 75
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,

    /** Strapi setup */
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.STRAPI_API_URL || 'http://localhost:1337',
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: 'article',
            queryParams: {
              publicationState: process.env.GATSBY_IS_PREVIEW === 'true' ? 'preview' : 'live',
              populate: {
                cover: '*',
                blocks: {
                  populate: '*'
                }
              }
            }
          },
          {
            singularName: 'author'
          },
          {
            singularName: 'category'
          }
        ],
        singleTypes: [
          {
            singularName: 'about',
            queryParams: {
              populate: {
                blocks: {
                  populate: '*'
                }
              }
            }
          },
          {
            singularName: 'global',
            queryParams: {
              populate: {
                favicon: '*',
                defaultSeo: {
                  populate: '*'
                }
              }
            }
          }
        ]
      }
    },

    /** Sources */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'images',
        path: `${path.join(__dirname, '../src/content/images')}`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${path.join(__dirname, '../src/pages')}`
      }
    },

    /** Transformer: remark */
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `md-headinglink`,
              isIconAfterHeader: true,
              elements: [`h1`, `h2`, `h3`, `h4`]
            }
          },
          `gatsby-remark-external-links`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: {
                default: 'Quiet Light',
                parentSelector: {
                  'body[class=chakra-ui-dark]': 'Default Dark+'
                }
              }
            }
          },
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                'heading[depth=1]': 'md-h1',
                'heading[depth=2]': 'md-h2',
                'heading[depth=3]': 'md-h3',
                'heading[depth=4]': 'md-h4',
                'heading[depth=5]': 'md-h5',
                'heading[depth=6]': 'md-h6',
                paragraph: 'md-p',
                'list[ordered=false]': 'md-ul',
                'list[ordered=true]': 'md-ol',
                blockquote: 'md-blockquote',
                listItem: 'md-li',
                link: 'md-a',
                tableCell: 'md-td',
                thematicBreak: 'md-hr',
                table: 'md-table',
                inlineCode: 'md-code'
              }
            }
          }
        ]
      }
    },

    /** MDX support */
    `gatsby-plugin-mdx`,

    /** TS stuff */
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `React`,
        allExtensions: true
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-tsconfig-paths`,

    /** PWA */
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteMetadata.siteUrl
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: siteMetadata.title,
        start_url: `/`,
        background_color: `#111827`,
        theme_color: `#63BC47`,
        display: `minimal-ui`,
        icon: `static/favicon.png`
      }
    },

    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatAsDateString: false // boolean, defaults to true - if false API will return unformatted string from new Date()
        // locale: 'hu', // string, defaults to null, which date-and-time defaults as "en" - whether to localize the date or not, can use any available date-and-time localization
      }
    },

    /** Google tag manager */
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PZ3C4QH',

        /// Include GTM in development.
        ///
        /// Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        /// datalayer to be set before GTM is loaded
        /// should be an object or a function that is executed in the browser
        ///
        /// Defaults to null
        defaultDataLayer: { platform: 'gatsby' },

        /// Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        /// Name of the event that is triggered
        /// on every Gatsby route change.
        ///
        /// Defaults to gatsby-route-change
        // routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",

        /// Defaults to false
        enableWebVitalsTracking: true
      }
    }
  ]
}
