import { useState } from "react";
const photos = [
  "images/shop/shop1.png",
  "images/shop/shop2.png",
  "images/shop/shop3.png",
  "images/shop/shop33.png",
  "images/shop/shop4.png",
  "images/shop/shop5.png",
  "images/shop/shop6.png",
  "images/shop/shop7.png",
  "images/shop/shop8.png",
  "images/shop/shop9.png",
  "images/shop/shop10.png"
]
const Projects = () => {

    const [index, setIndex] = useState(0);

    const nextPhoto = () => {
    setIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }
  return (
    <div id="projects" className="projects bg-[#121F28] w-full text-white px-4 lg:px-10">
      <h1 className="text-4xl lg:text-5xl text-center pb-16 font-semibold">Projects</h1>

      <div className="flex flex-col lg:flex-row items-center gap-10 pb-20">

        <div className="w-full lg:w-[600px]">
          <h1 className="text-[#2E466C] font-semibold">Featured project</h1>
          <h1 className="text-2xl lg:text-3xl">E-Commerce Web Application</h1>

          <div className="flex flex-wrap gap-3 mt-3">
            <span className="bg-gray-700 px-4 py-1 rounded-full font-semibold">
              React (Vite) </span>
            <span className="bg-gray-700 px-4 py-1 rounded-full font-semibold">
              REST APIs (Axios) </span>
            <span className="bg-gray-700 px-4 py-1 rounded-full font-semibold">
              Tailwind CSS </span>
          </div>

          <p className="bg-[#111A28] p-5 rounded-2xl mt-5 text-sm lg:text-base">
            React (Vite) | React Router DOM | Axios | REST APIs – Developed a
            full-featured e-commerce web application with user and admin
            dashboards, dynamic routing, and REST API integration.
          </p>

          <div className="flex flex-wrap gap-4 mt-5">
            <a href="https://github.com/captainuman/E-Commerce-app" target="_blank"
              className="border-2 border-white px-5 py-1 rounded bg-orange-800">
              View GitHub </a>
            <a href="https://cellzone-phi.vercel.app/" target="_blank"
              className="border-2 border-white px-5 py-1 rounded">
              View Project</a>
          </div>
        </div>

        <div className="w-full lg:w-[500px] border border-white rounded-xl flex justify-center p-2">
          <div className="flex flex-col items-center gap-2">
            <img src={photos[index]} alt="preview" className="h-64 rounded"/>
            <div className="flex gap-4">
                <button className="bg-blue-500 px-5 py-1 rounded-2xl" onClick={prevPhoto}>Prev</button>
                <button className="bg-blue-500 px-5 py-1 rounded-2xl" onClick={nextPhoto}>Next</button>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-600" />

      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 py-20">

        <div className="w-full lg:w-[500px] border border-white rounded-xl flex justify-center p-2">
          <div className="flex flex-col items-center gap-2">
            <img src={photos[index]} alt="preview" className="h-64 rounded"/>
            <div className="flex gap-4">
                <button className="bg-blue-500 px-5 py-1 rounded-2xl" onClick={prevPhoto}>Prev</button>
                <button className="bg-blue-500 px-5 py-1 rounded-2xl" onClick={nextPhoto}>Next</button>
            </div>
        </div>
        </div>

        <div className="w-full lg:w-[600px]">
          <h1 className="text-[#2E466C] font-semibold">Featured project</h1>
          <h1 className="text-2xl lg:text-3xl">YouTube Clone</h1>

          <div className="flex flex-wrap gap-3 mt-3">
            <span className="bg-gray-700 px-4 py-1 rounded-full font-semibold">
                React </span>
            <span className="bg-gray-700 px-4 py-1 rounded-full font-semibold">
                Material UI </span>
            <span className="bg-gray-700 px-4 py-1 rounded-full font-semibold"> Tailwind CSS </span>
          </div>

          <p className="bg-[#111A28] p-5 rounded-xl mt-5 text-sm lg:text-base">
            React | JavaScript | Tailwind CSS – Built a responsive YouTube UI
            clone with reusable components, structured layout, and clean
            navigation flow.
          </p>

          <div className="flex flex-wrap gap-4 mt-5">
            <a href="https://github.com/captainuman/Youtube-front-end-Clone" target="_blank" className="border-2 border-white bg-orange-800 px-5 py-1 rounded">View GitHub</a>
            <a href="https://youtube-front-end-clone.vercel.app/" target="_blank" className="border-2 border-white px-5 py-1 rounded"> View Project </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
