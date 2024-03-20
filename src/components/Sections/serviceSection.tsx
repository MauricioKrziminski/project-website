import { BsInstagram, BsLinkedin } from 'react-icons/bs'

/* eslint-disable @next/next/no-img-element */
export function ServicesSection() {
  return (
    <div className="min-h-[600px] bg-[url('https://i.imgur.com/BOZDAF9.jpg')] bg-cover bg-no-repeat py-12">
      <div className="mx-auto mt-8 flex max-w-4xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-extrabold text-white">
          Nossos Representantes
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-gray-50 p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">Presidente Fundador</h3>
            <img
              src="https://i.imgur.com/0asTlVT.jpg"
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

          <div className="rounded-lg bg-gray-50 p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">Professor Fundador</h3>
            <img
              src="https://i.imgur.com/5lmrpvQ.jpg"
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

          <div className="rounded-lg bg-gray-50 p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">Bolão Moedas</h3>
            <img
              src="https://i.imgur.com/OGOkskX.jpg"
              alt=""
              className="w-full rounded-lg object-cover lg:h-48 lg:object-cover"
            />
            <p className="mb-4 mt-2 text-center text-gray-700">
              Lorenzo Correa
            </p>
            <p className="text-center italic">
              Pega dinheiro dos outros e pede empréstimo pros brother.
            </p>
            <div className="mr-2 mt-4 flex justify-end space-x-3">
              <a
                target="_blank"
                href="https://www.instagram.com/lorenzo.cs1/"
                className="text-end hover:text-gray-700"
              >
                <BsInstagram size={18} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/lorenzo-corr%C3%AAa/"
                className="hover:text-gray-700"
              >
                <BsLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
