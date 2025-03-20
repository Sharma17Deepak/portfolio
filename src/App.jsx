import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Project"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="bg-white text-black dark:bg-[#171d32] h-auto w-full overflow-hidden">
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Footer/>
    </div>
  )
}

export default App
