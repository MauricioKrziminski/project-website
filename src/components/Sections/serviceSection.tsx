export function ServicesSection() {
  return (
    <div className="min-h-[600px] bg-blue-950 py-12">
      <div className="mx-auto mt-8 flex max-w-4xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-extrabold text-white">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-gray-50 p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">Sites Personalizados</h3>
            <p className="mb-4 text-gray-700">
              Desenvolvimento de sites sob medida, criando uma experiência única
              online que reflete a essência de sua marca e atende às suas
              necessidades específicas.
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">Design Responsivo</h3>
            <p className="mb-4 text-gray-700">
              Criação de designs que se adaptam a qualquer dispositivo,
              garantindo que seu site ofereça uma experiência perfeita tanto em
              desktops quanto em dispositivos móveis.
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">
              Manutenção Após Entrega
            </h3>
            <p className="mb-4 text-gray-700">
              Ofereço suporte contínuo e manutenção do site após a entrega,
              garantindo que seu site permaneça atualizado, seguro e funcionando
              perfeitamente, para que você possa focar no que realmente importa:
              seu negócio.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
