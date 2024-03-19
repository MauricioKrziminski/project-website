import { ImageCarousel } from '../imageCarousel'

export function HomeSection() {
  return (
    <div className="mx-auto mb-0 mt-12 flex flex-col justify-center bg-[url('https://i.imgur.com/BOZDAF9.jpg')] bg-cover bg-no-repeat py-6 lg:py-12">
      <ImageCarousel />
      <h2 className="mb-4 ml-6 mt-16 p-4 text-2xl font-semibold text-white">
        Explorando o Universo do Desenvolvimento
      </h2>
      <p className="mb-4 ml-6 p-4 text-white">
        Este site é uma demonstração do que podemos fazer juntos. Explore e
        imagine as possibilidades para o seu próprio site.
      </p>
      <span>
        <a
          href="https://pay.kiwify.com.br/xJ644KN"
          target="blank"
          className="ml-10 flex items-center justify-start text-white"
        >
          clique
        </a>
      </span>
    </div>
  )
}
