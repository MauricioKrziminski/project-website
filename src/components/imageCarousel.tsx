/* eslint-disable @next/next/no-img-element */
'use client'
import { useState, useEffect, useCallback } from 'react'
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosPause,
  IoIosPlay,
} from 'react-icons/io'
import { SiSpotify, SiYoutube, SiInstagram } from 'react-icons/si'

export function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const images = [
    {
      src: 'https://i.imgur.com/DoiaaFe.png',
      mobileSrc: 'https://i.imgur.com/81MQOAx.png',
      buttonText: 'Clique aqui para comprar',
      link: 'https://pay.kiwify.com.br/xJ644KN',
    },
    {
      src: 'https://i.imgur.com/lYF5Y22.png',
      mobileSrc: 'https://i.imgur.com/jnGMS5Z.png',
      buttonText: 'Clique aqui para comprar',
      link: 'https://hotmart.com/pt-br/marketplace/produtos/e-book-saude-do-adulto-em-mapas-mentais/O73040457I?ref=J73057102B',
    },
    {
      src: 'https://i.imgur.com/vHRlDNB.png',
      mobileSrc: 'https://i.imgur.com/4ynsU5d.png',
    },
  ]

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length,
    )
  }, [images.length])

  useEffect(() => {
    let interval: number | undefined
    if (!isPaused) {
      interval = window.setInterval(nextSlide, 5000)
    }
    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  const slideStyle = {
    transform: `translateX(-${currentSlide * 100}%)`,
    transition: 'transform 0.5s ease-in-out',
  }

  return (
    <div className="flex justify-center">
      <div className="relative flex w-full overflow-hidden rounded-lg md:w-[90%] lg:w-5/6">
        <div
          className="flex h-60 w-full md:h-[200px] lg:h-64 xl:h-96"
          style={slideStyle}
        >
          {images.map((image, index) => (
            <div key={index} className="relative h-full w-full flex-shrink-0">
              <img
                src={image.src}
                className={`h-full w-full object-cover lg:block ${image.mobileSrc ? 'hidden md:block' : ''}`}
                alt={`Slide ${index}`}
              />
              {image.mobileSrc && (
                <img
                  src={image.mobileSrc}
                  className="h-full w-full object-cover md:hidden"
                  alt={`Mobile Slide ${index}`}
                />
              )}
              {image.buttonText && currentSlide === index && (
                <a
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-[35%] left-[30%] h-[10%] w-[50%] -translate-x-1/2 transform bg-transparent text-transparent md:h-[15%] md:w-[30%] lg:bottom-[20%] lg:h-[21%] custom-lg:left-[32%] custom-lg:w-[53%] custom-xl:left-[35%] custom-xl:w-[43%]"
                >
                  {image.buttonText}
                </a>
              )}
              {currentSlide === 2 && index === 2 && (
                <div className="absolute bottom-28 left-3/4 ml-3 flex -translate-x-1/2 space-x-6 md:bottom-20 md:left-2/3 md:space-x-6 lg:bottom-24 lg:left-2/3 lg:space-x-8 xl:bottom-36 xl:left-2/3 xl:space-x-12 2xl:left-2/3 2xl:space-x-16">
                  <a
                    href="https://spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiSpotify className="text-4xl text-green-300 md:text-5xl lg:text-7xl xl:text-8xl" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiYoutube className="text-4xl text-red-600 md:text-5xl lg:text-7xl xl:text-8xl" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiInstagram className="text-4xl text-blue-700 md:text-5xl lg:text-7xl xl:text-8xl" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center space-x-6">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full lg:h-3 lg:w-3 ${index === currentSlide ? 'bg-white' : 'bg-black'}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-opacity-50"
            aria-label={isPaused ? 'Play' : 'Pause'}
          >
            {isPaused ? (
              <IoIosPlay className="text-3xl text-white" />
            ) : (
              <IoIosPause className="text-3xl text-white" />
            )}
          </button>
        </div>
        <button
          onClick={prevSlide}
          className="group absolute bottom-5 left-14 flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-500 focus:outline-none md:start-0 md:top-1/2 md:h-8 md:w-8 md:-translate-y-1/2"
        >
          <IoIosArrowBack className="text-2xl text-white" />
          <span className="sr-only">Previous</span>
        </button>
        <button
          onClick={nextSlide}
          className="group absolute bottom-5 right-14 flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-500 focus:outline-none md:end-0 md:top-1/2 md:h-8 md:w-8 md:-translate-y-1/2"
        >
          <IoIosArrowForward className="text-2xl text-white" />
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  )
}
