import { FaCaretRight, FaCaretLeft, FaCaretUp, FaCaretDown } from "react-icons/fa6";


const SendsHome = () =>{

  const customBorderRadius = {
    borderRadius: '30% 70% 32% 68% / 43% 50% 50% 57%',
  };

  return(
  <div className="h-72">
    <div className="hidden relative h-full md:block md:w-60 lg:w-96 bg-transparent">

      <div className="relative z-20 px-5 flex flex-col items-center justify-around text-3xl h-full bg-transparent">

        <div className="flex flex-col items-center bg-transparent">
          <span className="bg-cyan-1200 px-3 py-2.5 rounded-sm">
            <FaCaretUp className="bg-cyan-1200 opacity-60" />
          </span>

          <div className="flex p-3 gap-4 bg-transparent">
            <span className="bg-cyan-1200 px-3 py-2.5 rounded-sm">
              <FaCaretLeft className="bg-cyan-1200 " />
            </span>
            <span className="bg-cyan-1200 px-3 py-2.5 rounded-sm">
              <FaCaretDown className="bg-cyan-1200 opacity-60" />
            </span>
            <span className="bg-cyan-1200 px-3 py-2.5 rounded-sm">
              <FaCaretRight className="bg-cyan-1200" />
            </span>
          </div>
        </div>

        <div className="flex items-center bg-transparent">
          <div className="text-opacity-60 text-base bg-transparent">{`/* utilize as setas ${"<- e ->"} para navegar entre as páginas */`}</div>
        </div>
      </div>

      

      <div className="absolute inset-0 z-10 opacity-40 xl:scale-[1.15] 2xl:scale-125">
        <div style={customBorderRadius} className="absolute w-56 h-56 -top-5 -left-10 bg-teal-400 blur-3xl" />
        <div style={customBorderRadius} className="absolute w-72 h-72 top-0 right-0 bg-teal-400 blur-3xl" />
        <div style={customBorderRadius} className="absolute w-72 h-72 -bottom-24 right-0 bg-teal-400 blur-3xl" />
      </div>

    </div>
  </div>
  )
}

export default SendsHome;