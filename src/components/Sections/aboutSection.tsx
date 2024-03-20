/* eslint-disable react/no-unescaped-entities */
export function AboutSection() {
  return (
    <div className="mx-auto mt-0 flex min-h-[500px] justify-center bg-gray-900 p-6 shadow-md">
      <div className="flex flex-col items-center justify-center space-y-8 md:flex-col lg:flex-col xl:flex-row xl:space-x-14 xl:px-10 2xl:w-5/6 2xl:flex-row 2xl:space-x-14">
        <div className="w-[350px] md:w-[90%] lg:h-96 lg:w-5/6">
          <iframe
            className="h-[300px] w-full rounded-md shadow-xl lg:h-full"
            src="https://www.youtube.com/embed/TEnNwIRQUGI"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-[350px] md:w-[90%] lg:w-5/6">
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
