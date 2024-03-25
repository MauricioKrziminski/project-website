'use client'
import { useState, useEffect, useRef } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'

export function MaterialsSection() {
  const [isOpenDesktop, setIsOpenDesktop] = useState(false)
  const [isOpenTablet, setIsOpenTablet] = useState(false)
  const [isOpenMobile, setIsOpenMobile] = useState(false)

  const refDesktopDropdown = useRef<HTMLDivElement>(null)
  const refTabletDropdown = useRef<HTMLDivElement>(null)
  const refMobileDropdown = useRef<HTMLDivElement>(null)
  const refDesktopButton = useRef<HTMLButtonElement>(null)
  const refTabletButton = useRef<HTMLButtonElement>(null)
  const refMobileButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement

      const clickedOnDropdownButton =
        refDesktopButton.current?.contains(target) ||
        refTabletButton.current?.contains(target) ||
        refMobileButton.current?.contains(target)

      if (clickedOnDropdownButton) return

      if (!refDesktopDropdown.current?.contains(target)) {
        setIsOpenDesktop(false)
      }
      if (!refTabletDropdown.current?.contains(target)) {
        setIsOpenTablet(false)
      }
      if (!refMobileDropdown.current?.contains(target)) {
        setIsOpenMobile(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

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
              <div className="mb-2" ref={refDesktopDropdown}>
                <button
                  ref={refDesktopButton}
                  onClick={() => setIsOpenDesktop(!isOpenDesktop)}
                  className="clip-path-custom-buttons flex items-center justify-center rounded bg-[#8d3f60] px-4 py-2 font-bold text-white hover:bg-[#ad4f76]"
                >
                  Download Wallpaper Desktop
                  {isOpenDesktop ? (
                    <IoIosArrowUp className="ml-2" />
                  ) : (
                    <IoIosArrowDown className="ml-2" />
                  )}
                </button>
                {isOpenDesktop && (
                  <div className="mt-1 w-72 rounded-md bg-[#8d3f60]/80 py-2 shadow-lg">
                    <a
                      href="https://drive.google.com/uc?export=download&id=1Pak9uAupWub9OhAVXrcD-2zoG1Pvo-SW"
                      className="block px-4 py-2 text-sm text-white hover:bg-[#ad4f76]"
                    >
                      FullHD
                    </a>
                    <a
                      href="https://drive.google.com/uc?export=download&id=1Pak9uAupWub9OhAVXrcD-2zoG1Pvo-SW"
                      className="block px-4 py-2 text-sm text-white hover:bg-[#ad4f76]"
                    >
                      HD
                    </a>
                    <a
                      href="https://drive.google.com/uc?export=download&id=1_S_0f-f_ix3PLtAbC92WVi3qbq2JMTKB"
                      className="block px-4 py-2 text-sm text-white hover:bg-[#ad4f76]"
                    >
                      NoteBook
                    </a>
                  </div>
                )}
              </div>

              <div className="mb-2" ref={refTabletDropdown}>
                <button
                  ref={refTabletButton}
                  onClick={() => setIsOpenTablet(!isOpenTablet)}
                  className="clip-path-custom-buttons flex items-center justify-center rounded bg-[#8d3f60] px-6 py-2 font-bold text-white hover:bg-[#ad4f76]"
                >
                  Download Wallpaper Tablet
                  {isOpenTablet ? (
                    <IoIosArrowUp className="ml-2" />
                  ) : (
                    <IoIosArrowDown className="ml-2" />
                  )}
                </button>
                {isOpenTablet && (
                  <div className="mt-1 w-72 rounded-md bg-[#8d3f60]/80 py-2 shadow-lg">
                    <a
                      href="https://drive.google.com/uc?export=download&id=16BYz_6Be8q3eHZ8HgYqor1y3O6TEwfr7"
                      className="block px-4 py-2 text-sm text-white hover:bg-[#ad4f76]"
                    >
                      Tablet IPad/Samsung
                    </a>
                  </div>
                )}
              </div>

              <div ref={refMobileDropdown}>
                <button
                  ref={refMobileButton}
                  onClick={() => setIsOpenMobile(!isOpenMobile)}
                  className="clip-path-custom-buttons flex items-center justify-center rounded bg-[#8d3f60] px-6 py-2 font-bold text-white hover:bg-[#ad4f76]"
                >
                  Download Wallpaper Mobile
                  {isOpenMobile ? (
                    <IoIosArrowUp className="ml-2" />
                  ) : (
                    <IoIosArrowDown className="ml-2" />
                  )}
                </button>
                {isOpenMobile && (
                  <div className="mt-1 w-72 rounded-md bg-[#8d3f60]/80 py-2 shadow-lg">
                    <a
                      href="https://drive.google.com/uc?export=download&id=1BP6OZxHSJ54NNrsVdVxeBmJgFZGi4LHT"
                      className="block px-4 py-2 text-sm text-white hover:bg-[#ad4f76]"
                    >
                      Android
                    </a>
                    <a
                      href="https://drive.google.com/uc?export=download&id=1lxlnId6yL3LRpB-JEgOjUQCxuPotgAmi"
                      className="block px-4 py-2 text-sm text-white hover:bg-[#ad4f76]"
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
