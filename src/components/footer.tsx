import { BsWhatsapp, BsInstagram, BsLinkedin } from 'react-icons/bs'

export function Footer() {
  return (
    <footer className="bg-zinc-700 p-6 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 sm:px-8 lg:flex-row 2xl:ml-6">
        <div>
          <p className="mb-2 text-lg lg:whitespace-nowrap">
            © {new Date().getFullYear()} Liga Acadêmica de Enfermagem em
            Cardiologia
          </p>
          <p className="text-center">
            Desenvolvido por{' '}
            <a
              href="https://www.mauriciokrziminski.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Mauricio Krziminski
            </a>
          </p>
        </div>
        <div className="flex flex-col items-end 2xl:mr-16">
          <span className="mb-2 mr-4 text-lg">Siga-nos</span>
          <div className="flex space-x-4">
            <a
              target="_blank"
              href="#"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <BsWhatsapp size={24} />
            </a>
            <a
              target="_blank"
              href="#"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <BsLinkedin size={24} />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/laec.uniritter/"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <BsInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
