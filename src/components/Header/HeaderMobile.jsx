import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiCloseLargeFill, RiMenuUnfold2Line } from "react-icons/ri";

const HeaderMobile = () => {
  const [click, setClick] = useState(true);

  const handleToggleClick = () => {
    setClick(!click);
  };

  return (
    <div className="fixed w-full sm:hidden">
      <div className="flex justify-between items-center px-3 py-2 bg-cyan-1100 border-b border-zinc-700">
        <div className="text-white text-1xl md:pr-24 lg:pr-32 flex justify-between gap-1">
          <img src="../../../assets/imgs/info-icon.png" alt="Info-icon"/>
          tercioo-gabriel
        </div>
        {click ? (
          <RiMenuUnfold2Line onClick={handleToggleClick} className="text-zinc-900 text-4xl cell:text-5xl cursor-pointer opacity-90" />
        ) : (
          
          <RiCloseLargeFill onClick={handleToggleClick} className="text-zinc-900 p-0.5 text-4xl cell:text-5xl cursor-pointer opacity-90" />
        )}
      </div>
      {!click && (
        <ul className="flex flex-col bg-cyan-1100">
          <Link to="/" className="px-4 py-4 border-y border-opacity-50 border-zinc-700 text-opacity-80 cursor-pointer">
            <a className="bg-cyan-1100" href="">_início</a>
          </Link>
          <Link to="about" className="px-4 py-4 border-b border-opacity-50 border-zinc-700 text-opacity-80 cursor-pointer">
            <a href="">_sobre-mim</a>
          </Link>
          <Link to="projects" className="px-4 py-4 border-b border-opacity-50 border-zinc-700 text-opacity-80 cursor-pointer">
            <a href="">_projetos</a>
          </Link>
          <Link to="contact" className="px-4 py-4 border-b border-opacity-50 border-zinc-700 text-opacity-80 cursor-pointer">
            <a href="">_contato</a>
          </Link>
        </ul>
      )}
    </div>
  );
};

export default HeaderMobile;
