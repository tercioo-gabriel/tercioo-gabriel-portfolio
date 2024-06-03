import SendsHome from "./SendsHome";

const Home = () =>{

  const frontEnd = "> Desenvolvedor Front-end";

  return(
    <div className="flex h-screen items-center justify-center px-4">
      <div className="flex items-center md:gap-20 lg:gap-24 xl:gap-36">
        <div className="flex flex-col justify-between max-w-6xl min-h-72">
          <div>
            <p className="">Olá mundo. Eu sou</p>
            <h1 className="text-6xl">Tércio Gabriel</h1>
            <h4 className="text-indigo-500 text-3xl">{` ${">"} Desenvolvedor Front-end`}</h4>
          </div>

          <div>
            <span className="opacity-60">
              <p>// confira também meu Currículo</p>
              <p>// disponível abaixo para download</p>
            </span>
            <span className="flex gap-3">
              <p className="text-indigo-500">const</p>
              <p className="text-teal-400">curriculo</p>
              =
              <a className="text-orange-400 hover:text-orange-500" download="curriculo-tercio-gabriel.pdf" href="/curriculo-tercio-gabriel.pdf">"https://tercioo-gabriel.com/download-curriculo"</a>
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