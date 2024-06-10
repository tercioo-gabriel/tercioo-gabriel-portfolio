const Footer = () => {
  return(
    <div className="hidden fixed w-full bottom-0 sm:flex items-center justify-between border-t border-gray-border">
      <div className="flex items-center">

        <p className="py-2.5 px-4 text-gray-link border-r border-gray-border">me-siga:</p>

        <a target="_blank" className="group py-3 px-4 transition-all border-r border-gray-border hover:border-opacity-60" href="https://github.com/tercioo-gabriel"><img className="opacity-60 group-hover:opacity-100 transition-opacity" src="../../../assets/imgs/github-red.png" alt="GitHub" style={{ width: "20px" }}/></a>

        <a target="_blank" className="group py-3 px-4 transition-all border-r border-gray-border hover:border-opacity-60" href="https://www.linkedin.com/in/terciogabrieldejesus/"><img className="opacity-60 group-hover:opacity-100 transition-opacity" src="../../../assets/imgs/linkedin-red.png" alt="Linkedin" style={{ width: "20px" }}/></a>

        <a target="_blank" className="group py-3 px-4 transition-all border-r border-gray-border hover:border-opacity-60" href="https://www.instagram.com/tercio.gabriel/"><img className="opacity-60 group-hover:opacity-100 transition-opacity" src="../../../assets/imgs/insta-red.png" alt="Instagram" style={{ width: "20px" }}/></a>
      </div>

      <span className="fixed sm:block right-0 text-zinc-500 text-xs px-4 ">Design site by <a target="_blank" className="text-zinc-500 hover:text-pink-500  transition-all" href="https://www.figma.com/@darelova">@darelova</a></span>
    </div>
  )
}
export default Footer;