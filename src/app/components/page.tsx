import Image from 'next/image.js'
import Link from 'next/link'

const componentsDetail = [
  {
    title: "Background Gradient",
    href: "/components/bg-gradient",
    link: '/photos/bg-gradient.png',
    description: 'A smooth, customizable gradient background for adding depth and vibrancy.'
  },
  {
    title: "Button Animated Border",
    href: "/components/button-animated-border",
    link: '/photos/button-animated-border.png',
    description: 'A sleek button with an animated border effect for a modern, interactive look.'
  },
  {
    title: "Grid and Dot Backgrounds",
    href: "/components/grid-and-dot-background",
    link: '/photos/grid-and-dot-background.png',
    description: 'Unique background with a grid, dot and wave pattern, perfect for modern, clean designs.'
  },
  {
    title: "Marquee Animation",
    href: "/components/marquee-animation",
    link: '/photos/marquee-animation.png',
    description: 'Infinite scrolling animation for showcasing content in a continuous flow.'
  },
]

function Page() {

  return (
    <div className='pt-10'>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-14 md:gap-5 lg:gap-10 items-start relative">
        {componentsDetail.map((component) => (
          <Link
            key={component.title}
            href={component.href}
            className="antialiased group"
          >
            <div className="relative border rounded-lg border-border overflow-hidden group-hover:shadow-xl transition duration-200">
              <Image
                alt={component.title}
                src={component.link}
                width={720}
                height={1024}
                className="transition duration-300 blur-0 aspect-video rounded-md group-hover:scale-105"
              />
            </div>
            <p className="text-xl font-bold mt-4 mb-2 text-neutral-100 ">
              {component.title}
            </p>
            <p className="mt-2 text-sm font-normal text-neutral-300 ">
              {component.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Page

