/* eslint-disable @next/next/no-img-element */
'use client'
import { useState, useEffect, useCallback } from 'react'
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosPause,
  IoIosPlay,
} from 'react-icons/io'

export function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const images = [
    {
      src: 'https://i.imgur.com/zmdtJZ4.png',
      mobileSrc: 'https://i.imgur.com/81MQOAx.png',
      buttonText: 'Clique aqui para comprar',
      link: 'https://pay.kiwify.com.br/xJ644KN',
    },
    {
      src: 'https://www.10wallpaper.com/wallpaper/3840x2400/1804/Mountain_Lake_Nature_4k_HD_Landscape_3840x2400.jpg',
    },
    {
      src: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg',
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
      <div className="relative flex w-full overflow-hidden rounded-lg lg:w-4/5">
        <div
          className="flex h-60 w-full md:h-[500px] lg:h-96"
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
                  className="absolute bottom-[35%] left-[30%] h-[10%] w-[50%] -translate-x-1/2 transform bg-transparent text-transparent md:h-[15%] md:w-[30%] lg:bottom-[23%] lg:h-[20%] custom-lg:left-[32%] custom-lg:w-[53%] custom-xl:left-[35%] custom-xl:w-[45%]"
                >
                  {image.buttonText}
                </a>
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
