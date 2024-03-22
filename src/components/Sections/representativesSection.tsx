'use client'
import { useRef } from 'react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

/* eslint-disable @next/next/no-img-element */
export function RepresentativesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (scrollOffset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + scrollOffset,
        behavior: 'smooth',
      })
    }
  }
  return (
    <div className="min-h-[600px] bg-[url('https://i.imgur.com/QlCR9go.png')] bg-cover bg-no-repeat py-12">
      <div className="mx-auto mt-8 flex max-w-4xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-extrabold text-white">
          Nossos Representantes
        </h2>
        <div
          className="flex gap-6 overflow-x-auto lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3"
          ref={scrollRef}
        >
          <div className="sm:min-w-[calc(33.333% - 1.5rem)] min-w-[90%] rounded-lg bg-gray-50 p-6 shadow-lg md:h-full md:min-w-[50%]">
            <h3 className="mb-4 text-xl font-semibold lg:mb-11">
              Presidente Fundador
            </h3>
            <img
              src="https://i.imgur.com/8shyjJi.jpg"
              alt=""
              className="w-full rounded-lg object-cover lg:h-48 lg:object-cover"
            />
            <p className="mb-4 mt-2 text-center text-gray-700">
              Jean Silva de Paula
            </p>
            <p className="text-center italic">
              Responsável por atividades técnicas e elaboração de conteúdos.
            </p>
            <div className="mr-2 mt-4 flex justify-end space-x-3">
              <a
                target="_blank"
                href="https://www.instagram.com/jeaann.dp/"
                className="text-end hover:text-gray-700"
              >
                <BsInstagram size={18} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/jean-silva-de-paula-1bb2241bb/"
                className="hover:text-gray-700"
              >
                <BsLinkedin size={18} />
              </a>
            </div>
          </div>

          <div className="sm:min-w-[calc(33.333% - 1.5rem)] min-w-[90%] rounded-lg bg-gray-50 p-6 shadow-lg md:h-full md:min-w-[50%]">
            <h3 className="mb-4 text-xl font-semibold lg:mb-11">
              Professor Fundador
            </h3>
            <img
              src="https://i.imgur.com/omRnwdA.jpg"
              alt=""
              className="w-full rounded-lg object-cover lg:h-48 lg:object-cover"
            />
            <p className="mb-4 mt-2 text-center text-gray-700">
              Nichollas Costa
            </p>
            <p className="text-center italic">
              Responsável por atividades acadêmicas e orientação de projetos.
            </p>
            <div className="mr-2 mt-4 flex justify-end space-x-3">
              <a
                target="_blank"
                href="https://www.instagram.com/professornichollas/"
                className="text-end hover:text-gray-700"
              >
                <BsInstagram size={18} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/nichollas-costa-rosa-790304204/"
                className="hover:text-gray-700"
              >
                <BsLinkedin size={18} />
              </a>
            </div>
          </div>

          <div className="sm:min-w-[calc(33.333% - 1.5rem)] min-w-[90%] rounded-lg bg-gray-50 p-6 shadow-lg md:h-full md:min-w-[50%]">
            <h3 className="mb-4 text-xl font-semibold">
              Vice-Presidente de Finanças
            </h3>
            <img
              src="https://i.imgur.com/zAXMeMJ.jpg"
              alt=""
              className="w-full rounded-lg object-cover lg:h-48 lg:object-cover"
            />
            <p className="mb-4 mt-2 text-center text-gray-700">
              Isadora Moreira
            </p>
            <p className="text-center italic">
              Responsável pelas finanças e produtos da liga.
            </p>
            <div className="mr-2 mt-4 flex justify-end space-x-3">
              <a
                target="_blank"
                href="https://www.instagram.com/iisamoreiraa_/"
                className="text-end hover:text-gray-700"
              >
                <BsInstagram size={18} />
              </a>
              <a target="_blank" href="#" className="hover:text-gray-700">
                <BsLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center space-x-4 lg:hidden">
          <button
            onClick={() => scroll(-300)}
            className="rounded-md bg-gray-200 p-1 hover:bg-black hover:text-white"
          >
            <IoIosArrowBack className="text-2xl" />
          </button>
          <button
            onClick={() => scroll(300)}
            className="rounded-md bg-gray-200 p-1 hover:bg-black hover:text-white"
          >
            <IoIosArrowForward className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  )
}
