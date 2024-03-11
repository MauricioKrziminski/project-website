'use client'
import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-scroll'
import { AiFillHome } from 'react-icons/ai'
import { FaUserAlt, FaBars } from 'react-icons/fa'
import { RiServiceFill } from 'react-icons/ri'
import { IoMdContacts } from 'react-icons/io'
import { CgClose } from 'react-icons/cg'
import { motion } from 'framer-motion'

type IconRefs = {
  [key: string]: React.MutableRefObject<HTMLLIElement | null>
}

export function Header() {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const iconRefs: IconRefs = {
    home: useRef<HTMLLIElement | null>(null),
    about: useRef<HTMLLIElement | null>(null),
    services: useRef<HTMLLIElement | null>(null),
    contact: useRef<HTMLLIElement | null>(null),
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact']
      const scrollTop = window.pageYOffset + window.innerHeight / 3

      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollTop >= offsetTop && scrollTop < offsetBottom) {
            setActiveSection(section)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getIconClassName = (section: string) =>
    `cursor-pointer ${activeSection === section ? 'text-violet-500' : 'text-gray-900 hover:text-violet-500'}`

  const getIndicatorPosition = () => {
    const currentIcon = iconRefs[activeSection]?.current
    if (currentIcon) {
      const extraWidth = 15
      return {
        left: currentIcon.offsetLeft - extraWidth / 2,
        width: currentIcon.offsetWidth + extraWidth,
      }
    }
    return { left: 0, width: 0 }
  }

  const { left, width } = getIndicatorPosition()

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-gray-200 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between p-6 lg:p-6">
        <div className="bg-wave-gradient whitespace-nowrap bg-clip-text text-lg font-extrabold text-transparent lg:text-2xl">
          O SITE PARA VOCÊ
        </div>
        <div className="ml-40 lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CgClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav
          className={`absolute right-0 top-full h-screen w-3/5 bg-white/90 lg:relative lg:block lg:h-0 lg:w-0 lg:bg-transparent lg:shadow-none ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <ul className="mt-36 flex h-full flex-col items-center justify-start space-y-6 lg:mt-0 lg:flex lg:flex-row lg:justify-end lg:space-x-6 lg:space-y-0">
            <motion.div
              className="absolute bottom-[-18px] h-1 rounded-sm bg-violet-500"
              initial={false}
              animate={{ left, width }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            <li ref={iconRefs.home}>
              <Link
                to="home"
                smooth={true}
                duration={100}
                className={getIconClassName('home')}
              >
                <AiFillHome className="hidden lg:inline" size={26} />
                <span className="inline text-xl lg:hidden">Home</span>
              </Link>
            </li>
            <li ref={iconRefs.about}>
              <Link
                to="about"
                smooth={true}
                duration={100}
                className={getIconClassName('about')}
              >
                <FaUserAlt className="hidden lg:inline" size={26} />
                <span className="inline text-xl lg:hidden">About</span>
              </Link>
            </li>
            <li ref={iconRefs.services}>
              <Link
                to="services"
                smooth={true}
                duration={100}
                className={getIconClassName('services')}
              >
                <RiServiceFill className="hidden text-xl lg:inline" size={26} />
                <span className="inline text-xl lg:hidden">Services</span>
              </Link>
            </li>
            <li ref={iconRefs.contact}>
              <Link
                to="contact"
                smooth={true}
                duration={100}
                className={getIconClassName('contact')}
              >
                <IoMdContacts className="hidden text-xl lg:inline" size={26} />
                <span className="inline text-xl lg:hidden">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex-grow-0 opacity-0">Logo</div>
      </div>
    </header>
  )
}
