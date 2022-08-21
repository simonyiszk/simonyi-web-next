import { NavItem } from '~types/navItem'

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Blog',
    href: '/blog',
    children: [
      {
        label: 'Legújabb posztok',
        href: '/blog'
      },
      {
        label: 'Archívum',
        href: '/archive'
      }
    ]
  },
  {
    label: 'Rólunk',
    href: '/about'
  },
  {
    label: 'Vízió',
    href: '/vision'
  },
  {
    label: 'Tanfolyam',
    href: '/courses'
  }
]
