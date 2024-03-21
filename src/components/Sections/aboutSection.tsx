/* eslint-disable react/no-unescaped-entities */
export function AboutSection() {
  return (
    <div className="mx-auto mt-0 flex min-h-[500px] justify-center bg-gray-900 p-6 shadow-md">
      <div className="flex flex-col items-center justify-center space-y-8 md:flex-col lg:flex-col xl:flex-row xl:space-x-14 xl:px-10 2xl:w-5/6 2xl:flex-row 2xl:space-x-14">
        <div className="w-[350px] md:w-[90%] lg:h-96 lg:w-5/6">
          <video
            className="h-[300px] w-full rounded-md shadow-xl lg:h-full"
            src="/assets/video.mp4"
            title="video"
            controls
            autoPlay={true}
            loop
            muted
            playsInline
          ></video>
        </div>

        <div className="w-[350px] md:w-[90%] lg:w-5/6">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Porque escolher nossa liga?
          </h2>
          <p className="mb-4 text-white">
            A Liga Acadêmica de Enfermagem em Cardiologia é uma entidade
            comprometida com o desenvolvimento integral dos estudantes de
            enfermagem na área cardiológica. Além de promover atividades de
            ensino, pesquisa e extensão voltadas para o cuidado ao paciente
            cardíaco, também incentivamos a participação em congressos,
            simpósios e eventos científicos relacionados à cardiologia. Buscamos
            engajar os membros em projetos sociais que impactam positivamente a
            comunidade, além de outras iniciativas acadêmicas e sociais que
            enriquecem a formação profissional e pessoal dos participantes.
          </p>
        </div>
      </div>
    </div>
  )
}
