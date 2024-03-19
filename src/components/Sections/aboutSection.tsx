/* eslint-disable react/no-unescaped-entities */
export function AboutSection() {
  return (
    <div className="mx-auto mt-0 flex min-h-[500px] justify-center bg-gray-900 p-6 shadow-md">
      <div className="flex flex-col items-center justify-center space-y-8 md:flex-row md:space-x-12 md:space-y-0">
        <div className="w-[400px] md:max-w-2xl lg:h-96 lg:w-1/2">
          <iframe
            className="h-[300px] w-full rounded-md shadow-xl lg:h-full"
            src="https://www.youtube.com/embed/TEnNwIRQUGI"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full px-4 md:w-1/2">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Por Que Escolher Nosso Serviço?
          </h2>
          <p className="mb-4 text-white">
            Com um olhar atento para design e uma paixão por tecnologia, ofereço
            soluções web personalizadas que destacam sua marca no ambiente
            digital. Meu processo começa com a compreensão de suas necessidades,
            seguindo para o desenvolvimento de uma solução única que comunica
            sua mensagem de forma eficaz.
          </p>
          <p className="mb-4 text-white">
            Cada projeto é uma nova história, e estou aqui para garantir que a
            sua seja contada da melhor maneira possível. Utilizando as últimas
            tecnologias e práticas de desenvolvimento, asseguro que seu site
            seja não apenas visualmente atraente, mas também funcional, seguro e
            otimizado para motores de busca.
          </p>
        </div>
      </div>
    </div>
  )
}
