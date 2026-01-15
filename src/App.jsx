import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/homepage/Navbar"
import Home from "./Components/homepage/Home"
import Projects from "./Components/projects/Projects"
import AboutMe from "./Components/AboutMe"
import Contact from "./Components/contact"


const App = () => {
  return (
    <div>
      <Home/>
      <AboutMe/>
      <Projects/>
      <Contact/>
      
    </div>
  )
}

export default App
