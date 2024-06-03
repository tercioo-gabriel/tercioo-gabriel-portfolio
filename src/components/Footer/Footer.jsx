const Footer = () => {
  return(
    <div className="hidden fixed w-full bottom-0 sm:flex items-center justify-between border-t border-zinc-700 border-opacity-50 text-opacity-60">
      <div className="flex items-center">

        <p className="py-2.5 px-4 text-opacity-60 border-r border-zinc-700 border-opacity-50">me-siga:</p>

        <a target="_blank" className="py-3 px-4 opacity-60 hover:opacity-100 border-r border-zinc-700 border-opacity-50" href="https://github.com/tercioo-gabriel"><img src="../../../assets/imgs/github-red.png" alt="GitHub" style={{ width: "20px" }}/></a>

        <a target="_blank" className="py-3 px-4 opacity-60 hover:opacity-100 border-r border-zinc-700 border-opacity-50" href="https://www.linkedin.com/in/terciogabrieldejesus/"><img src="../../../assets/imgs/linkedin-red.png" alt="Linkedin" style={{ width: "20px" }}/></a>

        <a target="_blank" className="py-3 px-4 opacity-60 hover:opacity-100 border-r border-zinc-700 border-opacity-50" href="https://www.instagram.com/tercio.gabriel/"><img src="../../../assets/imgs/insta-red.png" alt="Instagram" style={{ width: "20px" }}/></a>
      </div>

      <span className="fixed sm:block right-0 opacity-40 text-xs px-4">Design site by <a target="_blank" className="text-zinc-50 hover:text-pink-600" href="https://www.figma.com/@darelova">@darelova</a></span>
    </div>
  )
}
export default Footer;