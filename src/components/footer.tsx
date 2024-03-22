/* eslint-disable @next/next/no-img-element */
import {
  BsSpotify,
  BsWhatsapp,
  BsInstagram,
  BsYoutube,
  BsTwitter,
} from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

export function Footer() {
  return (
    <footer className="bg-white p-6 text-white">
      <div className="flex flex-col items-center justify-center space-y-1 px-4 sm:px-8 md:flex-col lg:flex-row lg:space-x-16 xl:flex-row 2xl:mx-16 2xl:justify-between">
        <div className="mb-8 mr-6 flex items-center justify-start">
          <img
            src="https://i.imgur.com/vXFgf59.png"
            alt="Logo"
            className="w-15 h-20 lg:mr-6 xl:h-[120px]"
          />
          <img
            src="https://i.imgur.com/o9pbYku.png"
            alt="Logo"
            className="w-15 mt-1 h-16 lg:mr-1 xl:h-[70px]"
          />
          <img
            src="https://i.imgur.com/RGN01cM.png"
            alt="Logo"
            className="w-15 h-16 lg:mr-4 xl:h-[70px]"
          />
        </div>
        <div className="flex justify-center">
          <div className="mb-10 flex flex-col items-start">
            <p className="mb-4 text-center text-xl text-gray-600">
              Contate-nos
            </p>
            {/* <p className="text-start text-gray-600">
              Matriz | Pedro Adams Filho, 5857 - Centro, NH - RS
            </p>
            <p className="text-start text-gray-600">
              Filial | Rubem Berta, 38 - Vila Nova, NH - RS
            </p> */}
            <p className="mb-2 flex flex-row text-start text-gray-600">
              <BsWhatsapp size={20} className="mr-2" />
              (51) x xxxx-xxxx
            </p>
            <a
              href="mailto:ligadecardiouniritter@gmail.com"
              className="flex flex-row text-start text-gray-600 underline"
            >
              <MdEmail size={22} className="mr-2" />
              ligadecardiouniritter@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-end">
          <span className="mb-2 text-xl text-gray-600">Siga-nos</span>
          <div className="flex space-x-4 md:mb-0 lg:mb-16">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600"
            >
              <BsSpotify size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600"
            >
              <BsInstagram size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600"
            >
              <BsYoutube size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600"
            >
              <BsTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <span className="flex flex-col items-center text-center text-gray-600 lg:whitespace-nowrap">
          Copyright © {new Date().getFullYear()} Liga Acadêmica de Enfermagem
          em Cardiologia. Todos os direitos reservados.
          <span className="text-base">
            Desenvolvido por {'  '}
            <a
              href="https://www.mauriciokrziminski.com.br/"
              target="_blank"
              className="whitespace-nowrap text-base underline"
            >
              Mauricio Krziminski
            </a>
          </span>
        </span>
      </div>
    </footer>
  )
}
