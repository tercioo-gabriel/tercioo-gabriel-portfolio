import { Link } from 'react-router-dom';

const Header = () => {
  return(
      <div>
        <div className="hidden fixed w-full justify-between border-b border-opacity-50 border-zinc-700 sm:flex">
          <ul className="flex">
            <span className="px-4 py-4 text-opacity-60 md:pr-24 lg:pr-32">tercioo-gabriel</span>
            <Link to="/" className="border-l border-opacity-50 border-zinc-700 px-2 py-4 cursor-pointer text-opacity-60 hover:text-opacity-100 lg:px-5">_início</Link>
            <Link to="/about" className="border-l border-opacity-50 border-zinc-700 px-2 py-4 cursor-pointer text-opacity-60 hover:text-opacity-100 lg:px-5">_sobre-mim</Link>
            <Link to="/projects" className="border-x border-opacity-50 border-zinc-700 px-2 py-4 cursor-pointer text-opacity-60 hover:text-opacity-100 lg:px-5">_projetos</Link>
          </ul>
          <Link to="/contact" className="border-l border-opacity-50 border-zinc-700 px-2 py-4 cursor-pointer text-opacity-60 hover:text-opacity-100 lg:px-5">_contato</Link>
        </div>
      </div>
  )
}

export default Header;