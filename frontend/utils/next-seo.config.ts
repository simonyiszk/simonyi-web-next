import { DefaultSeoProps } from 'next-seo'
import { environment } from './environment.config'

const title = 'Simonyi Károly Szakkollégium'
const desc =
  `A Simonyi Károly Szakkollégium egy hallgatói szakmai szervezet, amely a BME Villamosmérnöki és Informatikai Karán működik. ` +
  `A szakkollégium 2003-ban vette fel Simonyi Károly, a Kar rajongva tisztelt professzora nevét. A Simonyi Károly Szakkollégium célja, ` +
  `hogy elsősorban a szakkollégium tagjai, lehetőség szerint a Villamosmérnöki és Informatikai Kar minden hallgatója számára ` +
  `lehetőséget biztosítson az egyetemi képzést kiegészítő ismeretek elsajátítására. Ennek érdekében tanfolyamokat, bemutatókat, ` +
  `konferenciákat és más szakmai rendezvényeket szervez, lehetőségéhez mérten infrastruktúrával támogatja a hallgatók önálló szakmai ` +
  `munkáit. Ezenkívül a szakkollégium céljai közé tartozik, hogy a tagjai által elért eredményeket minél szélesebb körben publikálja, ` +
  `a magyar felsőoktatás más egységeivel és a szakemberekkel megismertesse a szakkollégiumban folyó munkát.`
const keywords = ['community', 'simonyi', 'kir-dev', 'schdesign', 'ha5kfu', 'acstudio', 'spot', 'legokor', 'sem', 'schonherz', 'bsstudio']

const SEO: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'hu_HU',
    site_name: title,
    description: desc,
    images: []
  },
  twitter: {
    handle: `@${environment.socials.twitterUsername}`,
    site: `@${environment.socials.twitterUsername}`,
    cardType: 'summary_large_image'
  },
  defaultTitle: title,
  titleTemplate: `%s | ${title}`,
  description: desc,
  additionalLinkTags: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ],
  additionalMetaTags: [
    {
      name: 'author',
      content: `https://github.com/${environment.socials.githubOrgId}`
    },
    {
      name: 'fb:pages',
      content: environment.socials.facebookPageId
    },
    {
      name: 'robots',
      content: 'index, follow'
    },
    {
      name: 'keywords',
      content: keywords.join(', ')
    }
  ]
}

export default SEO
