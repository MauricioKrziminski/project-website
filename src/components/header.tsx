'use client'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import { motion } from 'framer-motion'

export function Header() {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-gray-200 bg-white/70 shadow-sm backdrop-blur-sm transition-all duration-300">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between p-6 lg:p-6">
        <div className="bg-wave-gradient cursor-pointer whitespace-nowrap bg-clip-text text-lg font-extrabold text-transparent lg:text-2xl">
          <Link
            to="home"
            smooth={true}
            duration={100}
            onClick={handleLinkClick}
          >
            <span>LAEC</span>
          </Link>
        </div>
        <div className="ml-40 lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CgClose size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav
          className={`absolute right-0 top-full h-screen w-4/5 bg-white/90 lg:relative lg:block lg:h-0 lg:w-0 lg:bg-transparent lg:shadow-none ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <ul className="mt-36 flex h-full flex-col items-center justify-start space-y-6 lg:mt-0 lg:flex lg:flex-row lg:justify-end lg:space-x-6 lg:space-y-0">
            <motion.div
              className="absolute bottom-[-18px] h-1 rounded-sm bg-violet-500"
              initial={false}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            <li>
              <Link
                to="home"
                smooth={true}
                duration={100}
                className={getIconClassName('home')}
                onClick={handleLinkClick}
              >
                <span className="inline text-xl">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={100}
                className={getIconClassName('about')}
                onClick={handleLinkClick}
              >
                <span className="inline text-xl">About</span>
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={100}
                className={getIconClassName('services')}
                onClick={handleLinkClick}
              >
                <span className="inline text-xl">Services</span>
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={100}
                className={getIconClassName('contact')}
                onClick={handleLinkClick}
              >
                <span className="inline text-xl">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
