import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

  const [ selected, setSelected ] = useState('');

  const handleClickMenu = () =>{
    setSelected('text-red-500')
  }

  return(
      <div>
        <div className="hidden fixed w-full justify-between border-b border-opacity-50 border-zinc-700 sm:flex">
          <ul className="flex">
            <span className="px-4 py-4 md:pr-24 lg:pr-28 flex items-center gap-1"><img src="../../../assets/imgs/info-icon.png" alt="Info-icon"/>
            tercioo-gabriel
            </span> 
            <Link onClick={handleClickMenu} to="/" className="border-l border-zinc-700 px-2 py-4 cursor-pointer opacity-60 hover:opacity-100 hover:border-opacity-60 transition-all lg:px-5 {`${selected ? 'text-blue-500' : {setSelected}}`}">_início</Link>
            <Link to="/about" className="border-l border-zinc-700 px-2 py-4 cursor-pointer opacity-60 hover:opacity-100 hover:border-opacity-60 transition-all lg:px-5">_sobre-mim</Link>
            <Link to="/projects" className="border-x border-zinc-700 px-2 py-4 cursor-pointer opacity-60 hover:opacity-100 hover:border-opacity-60 transition-all lg:px-5">_projetos</Link>
          </ul>
          <Link to="/contact" className="border-l border-zinc-700 px-2 py-4 cursor-pointer opacity-60 hover:opacity-100 hover:border-opacity-60 transition-all lg:px-5">_contato</Link>
        </div>
      </div>
  )
}

export default Header;