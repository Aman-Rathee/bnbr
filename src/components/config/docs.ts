
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
      title: "Components",
      items: [
        {
          title: "Background Gradient",
          href: "/components/bg-gradient",
          items: [],
        },
        {
          title: "Button Animated Border",
          href: "/components/button-animated-border",
          items: [],
        },
        {
          title: "Grid and Dot Backgrounds",
          href: "/components/grid-and-dot-background",
          items: [],
        },
        {
          title: "Marquee Animation",
          href: "/components/marquee-animation",
          items: [],
        },
        {
          title: "Shiny Effect",
          href: "/components/shiny-effect",
          items: [],
        },
      ],
    },
  ]
}
