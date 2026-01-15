import Navbar from './Navbar'

const Home = () => {
  return (
    <div className="w-full bg-[#121F28] h-screen">
      <Navbar />

      <div id="home" className="text-white flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-20 py-10 gap-10">
        
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold mb-3">Hello</h1>
          <h1 className="text-2xl md:text-3xl">I’m Numan</h1>
          <h1 className="text-4xl md:text-5xl font-bold mt-1">Frontend Developer</h1>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
            <button className="bg-orange-600 rounded font-semibold px-5 py-2">My Resume</button>
            <a href="https://github.com/captainuman" target="_blank" rel="noopener noreferrer"
              className="border-2 border-orange-600 rounded font-semibold px-5 py-2">
              GitHub</a>
            <button className="border-2 border-orange-600 rounded font-semibold px-5 py-2">
              LinkedIn</button>
          </div>
        </div>

        <div className="flex justify-center">
          <img  src="images/numanpic.png" alt="Numan" className="w-48 sm:w-60 md:w-72 lg:w-80 rounded-full opacity-90 shadow-[0_0_90px_rgba(120,30,50,0.6)]" />
        </div>
      </div>  
    </div>
  )
}

export default Home
