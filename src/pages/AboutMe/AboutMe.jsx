import Bio from "./Bio";

const AboutMe = () => {
  return(
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="sm:h-full w-full border-b sm:min-w-[209px] md:min-w-[289px] lg:min-w-[305px] sm:max-w-[209px] md:max-w-[289px] lg:max-w-[305px] text-wrap text-sm md:text-base sm:border-r sm:border-b-0 border-zinc-700 border-opacity-70">
        <span className="flex items-center sm:items-start md:items-center mt-14 px-4 py-2 sm:py-3 border-zinc-700 border-b border-opacity-70">
          <img className="pr-2 w-5" src="../../../assets/imgs/triang.svg" alt="Triangulo-icon"/>
          <h6>informações-pessoais</h6>
        </span>
        <div className="mt-3">
          <span className="flex items-center sm:items-start md:items-center px-3 py-1.5 gap-1 cursor-pointer">
            <img className="pr-2" src="../../../assets/imgs/send.png" alt="Send-icon"/>
            <img src="../../../assets/imgs/folder.svg" alt="Folder-icon"/>
            <h6 className="text-opacity-60">bio</h6>
          </span>
          <span className="flex items-center sm:items-start md:items-center px-3 py-1.5 gap-1 cursor-pointer">
            <img className="pr-2" src="../../../assets/imgs/send.png" alt="Send-icon"/>
            <img src="../../../assets/imgs/folder.svg" alt="Folder-icon"/>
            <h6 className="text-opacity-60">experiência</h6>
          </span>
          <span className="flex items-center mb-2 sm:items-start md:items-center px-3 py-1.5 gap-1 cursor-pointer">
            <img className="pr-2" src="../../../assets/imgs/send.png" alt="Send-icon"/>
            <img src="../../../assets/imgs/folder.svg" alt="Folder-icon"/>
            <h6 className="text-opacity-60">educação</h6>
          </span>
        </div>
      </div>
      <Bio />
    </div>
  )
}

export default AboutMe;