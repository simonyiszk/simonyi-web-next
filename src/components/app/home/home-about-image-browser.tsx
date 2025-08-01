'use client'
import Image from 'next/image'
import { useState } from 'react'
import { default as Lightbox } from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import Captions from 'yet-another-react-lightbox/plugins/captions'
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen'
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import Video from 'yet-another-react-lightbox/plugins/video'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/plugins/captions.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import { LightboxImage } from '~/@types'

export function HomeAboutImageBrowser({
  lightboxImages,
}: {
  lightboxImages: LightboxImage[]
}) {
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const openLightbox = (index = 0) => {
    setIndex(index)
    setIsOpen(true)
  }

  const closeLightbox = () => {
    setIsOpen(false)
  }

  return (
    <div className="-mx-8 flex justify-start gap-[10px] overflow-x-scroll md:mx-0 md:flex-wrap md:justify-center md:overflow-x-hidden lg:justify-end">
      {lightboxImages.slice(0, 9).map((image, index) => (
        <div
          key={index}
          className="relative h-[100px] w-[177.05px] shrink-0 bg-black hover:cursor-pointer"
          onClick={() => openLightbox(index)}>
          <Image
            src={image.picture.url}
            alt={image.picture.alt}
            fill
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            sizes="177.05px"
          />
        </div>
      ))}
      <Lightbox
        open={isOpen}
        slides={lightboxImages.map((image) => {
          return {
            src: image.picture.url,
            alt: image.picture.alt,
            title: image.title,
            description: image.description,
            width: image.picture.width,
            height: image.picture.height,
          }
        })}
        index={index}
        close={() => closeLightbox()}
        plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
      />
    </div>
  )
}
