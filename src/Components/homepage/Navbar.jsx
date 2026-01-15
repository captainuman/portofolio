import { useState } from "react"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-[#121F28] text-white px-6 md:px-20 py-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl">NUMAN</h1>

        <div className="hidden md:flex gap-12 font-semibold">
          <a href="#home" className="hover:text-orange-500 transition">Home</a>
          <a href="#about" className="hover:text-orange-500 transition">About</a>
          <a href="#projects" className="hover:text-orange-500 transition">Projects</a>
          <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
        </div>

        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-6 flex flex-col gap-6 text-center font-semibold">
          <a onClick={() => setOpen(false)} href="#home">Home</a>
          <a onClick={() => setOpen(false)} href="#about">About</a>
          <a onClick={() => setOpen(false)} href="#projects">Projects</a>
          <a onClick={() => setOpen(false)} href="#contact">Contact</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
