'use client'
import { useState } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

export function MaterialsSection() {
  const [isOpenDesktop, setIsOpenDesktop] = useState(false)
  const [isOpenTablet, setIsOpenTablet] = useState(false)
  const [isOpenMobile, setIsOpenMobile] = useState(false)

  return (
    <div className="flex min-h-[550px] items-center justify-center bg-gray-900">
      <div className="mx-auto flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">Nossos Materiais</h2>
        <div className="mt-10 flex items-center justify-center">
          <div className="clip-path-custom max-w-sm rounded-lg bg-white p-6 shadow-md">
            <h3 className="text-center text-2xl font-bold text-gray-900">
              Fundo de tela
            </h3>
            <p className="mt-4 text-center text-gray-600">
              Confira nossa seleção exclusiva de wallpapers para personalizar
              seu dispositivo.
            </p>
            <div className="clip-path-custom mt-6 flex flex-col items-center">
              <div className="mb-2">
                <button
                  onClick={() => setIsOpenDesktop(!isOpenDesktop)}
                  className="clip-path-custom-buttons flex items-center justify-center rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                >
                  Download Wallpaper Desktop
                  {isOpenDesktop ? (
                    <IoIosArrowUp className="ml-2" />
                  ) : (
                    <IoIosArrowDown className="ml-2" />
                  )}
                </button>
                {isOpenDesktop && (
                  <div className="mt-1 w-72 rounded-md bg-blue-500 py-2 shadow-lg">
                    <a
                      href="https://drive.google.com/uc?export=download&id=1Pak9uAupWub9OhAVXrcD-2zoG1Pvo-SW"
                      className="block px-4 py-2 text-sm text-white hover:bg-blue-400"
                    >
                      FullHD
                    </a>
                    <a
                      href="https://drive.google.com/uc?export=download&id=1Pak9uAupWub9OhAVXrcD-2zoG1Pvo-SW"
                      className="block px-4 py-2 text-sm text-white hover:bg-blue-400"
                    >
                      HD
                    </a>
                    <a
                      href="https://drive.google.com/uc?export=download&id=1_S_0f-f_ix3PLtAbC92WVi3qbq2JMTKB"
                      className="block px-4 py-2 text-sm text-white hover:bg-blue-400"
                    >
                      NoteBook
                    </a>
                  </div>
                )}
              </div>

              <div className="mb-2">
                <button
                  onClick={() => setIsOpenTablet(!isOpenTablet)}
                  className="clip-path-custom-buttons flex items-center justify-center rounded bg-blue-500 px-6 py-2 font-bold text-white hover:bg-blue-700"
                >
                  Download Wallpaper Tablet
                  {isOpenDesktop ? (
                    <IoIosArrowUp className="ml-2" />
                  ) : (
                    <IoIosArrowDown className="ml-2" />
                  )}
                </button>
                {isOpenTablet && (
                  <div className="mt-1 w-72 rounded-md bg-blue-500 py-2 shadow-lg">
                    <a
                      href="https://drive.google.com/uc?export=download&id=16BYz_6Be8q3eHZ8HgYqor1y3O6TEwfr7"
                      className="block px-4 py-2 text-sm text-white hover:bg-blue-400"
                    >
                      Tablet IPad/Samsung
                    </a>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setIsOpenMobile(!isOpenMobile)}
                  className="clip-path-custom-buttons flex items-center justify-center rounded bg-blue-500 px-6 py-2 font-bold text-white hover:bg-blue-700"
                >
                  Download Wallpaper Mobile
                  {isOpenDesktop ? (
                    <IoIosArrowUp className="ml-2" />
                  ) : (
                    <IoIosArrowDown className="ml-2" />
                  )}
                </button>
                {isOpenMobile && (
                  <div className="mt-1 w-72 rounded-md bg-blue-500 py-2 shadow-lg">
                    <a
                      href="https://drive.google.com/uc?export=download&id=1BP6OZxHSJ54NNrsVdVxeBmJgFZGi4LHT"
                      className="block px-4 py-2 text-sm text-white hover:bg-blue-400"
                    >
                      Android
                    </a>
                    <a
                      href="https://drive.google.com/uc?export=download&id=1lxlnId6yL3LRpB-JEgOjUQCxuPotgAmi"
                      className="block px-4 py-2 text-sm text-white hover:bg-blue-400"
                    >
                      Iphone
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .clip-path-custom {
          clip-path: polygon(
            10% 0%,
            100% 0%,
            100% 90%,
            90% 100%,
            0% 100%,
            0% 13%
          );
        }
        .clip-path-custom-buttons {
          clip-path: polygon(
            5% 0%,
            100% 0%,
            100% 80%,
            95% 100%,
            0% 100%,
            0% 20%
          );
        }
      `}</style>
    </div>
  )
}
