export function ServicesSection() {
  return (
    <div className="min-h-[600px] bg-blue-950 py-12">
      <div className="mx-auto mt-8 flex max-w-4xl flex-col justify-center px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-3xl font-extrabold text-white">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg bg-gray-50 p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">Serviço #1</h3>
            <p className="mb-4 text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
              a corrupti fuga nostrum perspiciatis illo, quibusdam eius magni
              autem quam ipsam commodi deleniti assumenda deserunt ullam
              tempora, quasi illum veritatis.
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">Serviço #2</h3>
            <p className="mb-4 text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Expedita, eaque odio! Mollitia, quisquam quis. Doloremque
              explicabo ad perspiciatis aspernatur, dolores neque modi delectus
              dignissimos sit magni necessitatibus sapiente ut facere.
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-semibold">Serviço #3</h3>
            <p className="mb-4 text-gray-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Corporis, repellendus iusto. Voluptatum aspernatur culpa
              necessitatibus officiis commodi hic sed itaque omnis, reiciendis
              autem reprehenderit fugit inventore cum, non repudiandae quisquam?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
