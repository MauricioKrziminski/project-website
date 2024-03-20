import { ImageCarousel } from '../imageCarousel'

export function HomeSection() {
  return (
    <div className="mt-12 flex flex-col justify-center bg-[url('https://i.imgur.com/QlCR9go.png')] bg-cover bg-no-repeat py-6 lg:py-12">
      <ImageCarousel />
      <h2 className="mb-4 mt-10 p-4 text-center text-2xl font-semibold text-white">
        Nosso propósito
      </h2>
      <div className="flex w-full justify-center px-4 lg:px-0">
        <div className="rounded-lg bg-gray-800 bg-opacity-60 text-center md:w-4/5 lg:w-[70%]">
          <p className="mb-4 p-4 text-lg text-white">
            A LAEC, criada em 6 de fevereiro de 2022, é uma associação sem fins
            lucrativos ligada ao UniRitter. Nossa missão é estudar, pesquisar e
            promover conhecimentos em Cardiologia, sem ligação religiosa ou
            partidária. Queremos ajudar na formação acadêmica e profissional dos
            alunos, contribuindo para o desenvolvimento nessa área.
          </p>
        </div>
      </div>
    </div>
  )
}
