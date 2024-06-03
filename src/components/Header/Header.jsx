const Header = () => {
  return(
      <div>
        <div className="hidden fixed w-full justify-between border-b border-opacity-50 border-zinc-700 sm:flex">
          <ul className="flex">
            <span className="px-4 py-4 text-opacity-60 md:pr-24 lg:pr-32">tercioo-gabriel</span>
            <li className="border-l border-opacity-50 border-zinc-700 px-2 py-4 cursor-pointer text-opacity-60 hover:text-opacity-100 lg:px-5"><a href="#about">_início</a></li>
            <li className="border-l border-opacity-50 border-zinc-700 px-2 py-4 cursor-pointer text-opacity-60 hover:text-opacity-100 lg:px-5"><a href="#services">_sobre-mim</a></li>
            <li className="border-x border-opacity-50 border-zinc-700 px-2 py-4 cursor-pointer text-opacity-60 hover:text-opacity-100 lg:px-5"><a href="#contact">_projetos</a></li>
          </ul>
          <span className="border-l border-opacity-50 border-zinc-700 px-2 py-4 cursor-pointer text-opacity-60 hover:text-opacity-100 lg:px-5">_contato</span>
        </div>
      </div>
  )
}

export default Header;