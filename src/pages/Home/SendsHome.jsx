import { FaCaretRight, FaCaretLeft, FaCaretUp, FaCaretDown } from "react-icons/fa6";

const SendsHome = () => {
  const customBorderRadius = {
    borderRadius: '30% 70% 32% 68% / 43% 50% 50% 57%',
  };

  return (
  <div className="hidden relative md:block md:w-64 lg:w-80">

  
    <div className="relative z-20 pt-5 rounded-t-md bg-transparent border-t border-l border-r border-opacity-50 border-zinc-400">
      <img className="px-2 lg:px-0 lg:mx-auto lg:w-3/4 bg-transparent drop-shadow-indigo" src="./assets/imgs/routes-2.png" alt="routes-image" />
    </div>

    <div className="relative z-20 px-5 flex flex-col items-center justify-around text-2xl lg:text-3xl pb-5 rounded-b-md bg-transparent border-b border-l border-r border-opacity-50 border-zinc-400">
  
      <div className="flex flex-col items-center bg-transparent">
        
        <span className="bg-zinc-300 px-3 py-1.5 rounded-sm">
          <FaCaretUp className="fill-zinc-50 bg-zinc-300" />
        </span>

        <div className="flex p-3 gap-2 lg:gap-4 bg-transparent">
          <span className="bg-zinc-300 px-3 py-1.5 rounded-sm animate-pulse-slow">
            <FaCaretLeft className="fill-indigo-500 bg-zinc-300" />
          </span>
          <span className="bg-zinc-300 px-3 py-1.5 rounded-sm">
            <FaCaretDown className="fill-zinc-50 bg-zinc-300" />
          </span>
          <span className="bg-zinc-300 px-3 py-1.5 rounded-sm animate-pulse-slow">
            <FaCaretRight className="fill-indigo-500 bg-zinc-300" />
          </span>
        </div>
      </div>

      <p className="mt-5 lg:pl-2 lg:mt-10 text-opacity-60 text-sm lg:text-base bg-transparent">{`/* utilize as setas ${"<- e ->"} para navegar entre as páginas */`}</p>
        
    </div>

    <div className="absolute inset-0 z-0 opacity-30 xl:scale-[1.15] 2xl:scale-125">
      <div style={customBorderRadius} className="absolute w-56 h-56 -top-5 -left-10 bg-teal-400 blur-3xl opacity-30" />
      <div style={customBorderRadius} className="absolute w-72 h-72 top-0 right-0 bg-teal-400 blur-3xl opacity-30" />
      <div style={customBorderRadius} className="absolute w-72 h-72 -bottom-24 right-0 bg-teal-400 blur-3xl opacity-50" />
    </div>
  </div>
  )
}

export default SendsHome;
