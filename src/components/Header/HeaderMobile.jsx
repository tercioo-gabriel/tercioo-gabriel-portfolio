import { RiCloseLargeFill } from "react-icons/ri";

const HeaderMobile = () => {

  return(
      <div className="w-full top-2 sm:hidden">
        <div className="">
          <ul className="flex flex-col bg-cyan-1100">
            <li className="flex justify-between px-4 py-4 bg-cyan-1100 border-y border-opacity-50 border-zinc-700 text-opacity-80 cursor-pointer"><a className="bg-cyan-1100" href="">_início</a>
              <div>
                <RiCloseLargeFill onClick={closeElement} className="absolute right-3 top-3 text-zinc-900 text-4xl cell:text-5xl" />
              
              </div>
            </li>
            <li className="px-4 py-4 bg-cyan-1100 border-b border-opacity-50 border-zinc-700 text-opacity-80 cursor-pointer"><a href=""></a>_sobre-mim</li>
            <li className="px-4 py-4 bg-cyan-1100 border-b border-opacity-50 border-zinc-700 text-opacity-80 cursor-pointer"><a href=""></a>_projetos</li>
            <li className="px-4 py-4 bg-cyan-1100 border-b border-opacity-50 border-zinc-700 text-opacity-80 cursor-pointer"><a href=""></a>_contato</li>
          </ul>
        </div>
      </div>
  )
}

export default HeaderMobile;