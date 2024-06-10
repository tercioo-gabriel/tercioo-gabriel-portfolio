import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const [activeNavIndex, setActiveNavIndex] = useState(1);
  
  const handleNavClick = (index) => {
      setActiveNavIndex(index);
    };

  useEffect(() =>{
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link,index) => {
      if (index === activeNavIndex - 1) {
        link.classList.add('border-b-2', 'border-b-yellow-500', 'text-zinc-200');
      } else {
        link.classList.add('text-gray-link');
        link.classList.remove('border-b-2', 'border-yellow-500', 'text-zinc-200');
      } 
    });
  }, [activeNavIndex]);

  return(
      <div>
        <div className="hidden fixed w-full justify-between border-b border-gray-border sm:flex">
          <ul className="flex">
            <span className="px-4 py-4 md:pr-24 lg:pr-28 flex items-center gap-1"><img src="../../../assets/imgs/info-icon.png" alt="Info-icon"/>
            tercioo-gabriel
            </span> 
            <Link 
            onClick={() => handleNavClick(1)} 
            to="/" 
            className="nav-link border-l border-gray-border px-2 py-4 cursor-pointer transition-all lg:px-5 hover:text-zinc-200">_início</Link>

            <Link 
            onClick={() => handleNavClick(2)} 
            to="/about" 
            className="nav-link border-l border-gray-border px-2 py-4 cursor-pointer transition-all lg:px-5 hover:text-zinc-200">_sobre-mim</Link>

            <Link onClick={() => handleNavClick(3)} 
            to="/projects" 
            className="nav-link border-x border-gray-border px-2 py-4 cursor-pointer transition-all lg:px-5 hover:text-zinc-200">_projetos</Link>
          </ul>

          <Link onClick={() => handleNavClick(4)} 
          to="/contact" 
          className="nav-link border-l border-gray-border px-2 py-4 cursor-pointer transition-all lg:px-5 hover:text-zinc-200">_contato</Link>
        </div>
      </div>
  )
}

export default Header;