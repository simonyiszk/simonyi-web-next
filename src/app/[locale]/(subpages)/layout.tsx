import { getTranslations, setRequestLocale } from 'next-intl/server'
import { PageProps, ParamsType } from '~/@types'
import { Footer } from '~/components/footer'
import { HeaderSubpage } from '~/components/header/header-subpage'
import { query } from '~/utils/contentful/contentful-query'

async function getData({ locale }: ParamsType) {
  const footer = await query.footer(locale)

  return { footer }
}

export default async function SubpageLayout(props: PageProps) {
  const params = await props.params

  setRequestLocale(params.locale)
  const { footer } = await getData(params)
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'pages.subpages.header',
  })

  return (
    <div className="flex min-h-safe_screen flex-col justify-between gap-16">
      <HeaderSubpage
        homepage={t('homepage')}
        aboutUs={t('aboutUs')}
        blog={t('blog')}
      />
      {props.children}
      <Footer data={footer} />
    </div>
  )
}
