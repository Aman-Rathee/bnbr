
export interface NavItem {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: any
  label?: string
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface SidebarNavItem extends NavItemWithChildren { }

export interface DocsConfig {
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Follow for updates",
      items: [
        {
          title: "X - @AmnRathee",
          href: "https://x.com/AmnRathee",
          items: [],
        },
      ]
    },
    {
      title: "Components",
      items: [
        {
          title: "ButtonAnimatedBorder",
          href: "/components/ButtonAnimatedBorder",
          items: [],
        },
      ],
    },
  ]
}
