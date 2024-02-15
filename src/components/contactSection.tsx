import { BsWhatsapp, BsInstagram } from 'react-icons/bs'

export function ContactSection() {
  return (
    <div className="min-h-[500px] bg-blue-600 py-12">
      <div className="mx-auto flex max-w-4xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-bold text-white">Contate-nos</h2>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-white">
              Siga-nos nas redes sociais e entre em contato conosco para mais
              informações.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://wa.me/yourwhatsappnumber"
                className="text-green-500 hover:text-green-600"
              >
                <BsWhatsapp size={24} />
              </a>
              <a
                href="https://instagram.com/yourusername"
                className="text-pink-500 hover:text-pink-600"
              >
                <BsInstagram size={24} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-white">
              Mande sua mensagem
            </h3>
            <form action="#" method="POST" className="grid grid-cols-1 gap-4">
              <input
                type="text"
                placeholder="Seu Nome"
                className="rounded-lg px-4 py-2"
              />
              <input
                type="email"
                placeholder="Seu Email"
                className="rounded-lg px-4 py-2"
              />
              <textarea
                rows={4}
                placeholder="Sua Mensagem"
                className="rounded-lg px-4 py-2"
              ></textarea>
              <button
                type="submit"
                className="rounded-lg bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
