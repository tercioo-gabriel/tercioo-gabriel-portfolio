import { useState } from "react";
import Bio from "./Bio";
import Experiencia from "./Experiencia";
import Educacao from './Educacao';

const AboutMe = () => {

  const [activeComponent, setActiveComponent] = useState('bio')
  

  return(
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="sm:h-full w-full border-b sm:min-w-[209px] md:min-w-[289px] lg:min-w-[305px] sm:max-w-[209px] md:max-w-[289px] lg:max-w-[305px] text-wrap text-sm md:text-base sm:border-r sm:border-b-0 border-gray-border">
        <span className="flex items-center sm:items-start md:items-center mt-14 px-4 py-2 sm:py-3 border-gray-border border-b">
          <img className="pr-2 w-5" src="../../../assets/imgs/triang.svg" alt="Triangulo-icon"/>
          <h6>informações-pessoais</h6>
        </span>
        <div className="mt-3">
          <span //BIO
          onClick={() => setActiveComponent('bio')} 
          className="flex items-center sm:items-start md:items-center px-3 py-1.5 gap-1 cursor-pointer" >
            <img className="pr-2" src="../../../assets/imgs/send.png" alt="Send-icon"/>
            <img src="../../../assets/imgs/folder.svg" alt="Folder-icon"/>
            <h6 className={`${activeComponent === 'bio' ? 'text-zinc-200' : 'text-gray-link'}`}>bio</h6>
          </span>

          <span //EXPERIÊNCIA
          onClick={() => setActiveComponent('xp')}
          className="flex items-center sm:items-start md:items-center px-3 py-1.5 gap-1 cursor-pointer">
            <img className="pr-2" src="../../../assets/imgs/send.png" alt="Send-icon"/>
            <img src="../../../assets/imgs/folder.svg" alt="Folder-icon"/>
            <h6 className={`${activeComponent === 'xp' ? 'text-zinc-200' : 'text-gray-link'}`}>experiência</h6>
          </span>

          <span //EDUCAÇÃO
          onClick={() => setActiveComponent('educacao')}
          className="flex items-center sm:items-start md:items-center px-3 py-1.5 gap-1 cursor-pointer">
            <img className="pr-2" src="../../../assets/imgs/send.png" alt="Send-icon"/>
            <img src="../../../assets/imgs/folder.svg" alt="Folder-icon"/>
            <h6 className={`${activeComponent === 'educacao' ? 'text-zinc-200' : 'text-gray-link'}`}>educação</h6>
            
          </span>
        </div>
      </div>
      <div>
        {activeComponent === 'bio' && <Bio />}
        {activeComponent === 'xp' && <Experiencia />}
        {activeComponent === 'educacao' && <Educacao />}
      </div>
    </div>
  )
}

export default AboutMe;