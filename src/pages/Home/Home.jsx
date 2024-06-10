import SendsHome from "./SendsHome";

const Home = () =>{

  const frontEnd = "> Desenvolvedor Front-end";

  return(
    <div className="flex h-screen items-center justify-center px-4 sm:px-6">
      <div className="flex md:items-center md:gap-12 lg:gap-24 xl:gap-36">
        <div className="flex flex-col justify-between max-w-6xl min-h-72 gap-14 lg:gap-0">
          <div>
            <p>Olá mundo. Eu sou</p>
            <h1 className="text-5xl lg:text-6xl">Tércio Gabriel</h1>
            <h4 className="text-indigo-500 text-2xl lg:text-3xl">{` ${">"} Desenvolvedor Front-end`}</h4>
          </div>

          <div className="text-sm lg:text-base flex flex-col gap-3">
            <span className="opacity-60">
              <p>// confira também meu Currículo</p>
              <p>// disponível abaixo para download</p>
            </span>
            <span className="flex flex-col xs:flex-row xs:gap-3">
              <div className="flex gap-3">
                <p className="text-indigo-500">const</p>
                <p className="text-teal-400">curriculo</p>
                =
              </div>
              <a className="text-string hover:text-orange-500 text-wrap" download="curriculo-tercio-gabriel.pdf" href="/curriculo-tercio-gabriel.pdf">"https://tercioo-gabriel.com/download-curriculo"</a>
              </span>
          </div>
        </div>

        <div>
          <SendsHome />
        </div>

      </div>
    </div>
  )
}
export default Home;