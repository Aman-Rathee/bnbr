import { BgGradient } from '@/registry/bnbr/ui/bg-gradient'
import Image from 'next/image.js'

function BgGradientDemo() {
  return (
    <BgGradient className=''>
      <div className="space-y-4">
        <div className="text-2xl text-black dark:text-white">
          Gradient Card
        </div>
        <Image
          src="/photos/image1.avif"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <p className="text-sm text-gray-600 dark:text-gray-300">
          This is a simple card component with a gradient background. You can easily change the colors and content to fit your needs. Use it to highlight important information or create eye-catching sections in your UI.
        </p>
      </div>
    </BgGradient >
  )
}

export default BgGradientDemo