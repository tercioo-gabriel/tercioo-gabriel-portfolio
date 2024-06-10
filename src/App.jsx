import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';


function App() {
  return (
  <div className='w-full h-full relative'>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
  )
}

export default App;