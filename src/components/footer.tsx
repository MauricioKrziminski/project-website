import { BsWhatsapp, BsInstagram, BsLinkedin } from 'react-icons/bs'

export function Footer() {
  return (
    <footer className="bg-zinc-700 p-6 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 sm:flex-row sm:px-8 lg:px-56">
        <div className="mb-4 flex flex-row items-start space-x-6 sm:mb-0 lg:mb-0">
          <a target="_blank" href="#" className="hover:text-blue-700">
            <BsWhatsapp size={24} />
          </a>
          <a target="_blank" href="#" className="hover:text-blue-700">
            <BsLinkedin size={24} />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/laec.uniritter/"
            className="hover:text-blue-700"
          >
            <BsInstagram size={24} />
          </a>
          <span className="text-lg lg:mb-0">
            © {new Date().getFullYear()} Liga Acadêmica de Enfermagem em
            Cardiologia
          </span>
        </div>
        <div className="flex items-center gap-6 lg:mt-0">
          <span>
            Desenvolvido por{'  '}
            <a
              href="https://www.linkedin.com/in/mauricio-krziminski/"
              target="_blank"
              className="underline"
            >
              Mauricio Krziminski
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}
