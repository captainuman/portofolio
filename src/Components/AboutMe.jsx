import React from 'react'

const AboutMe = () => {
  return (
    <div id="about" className="bg-[#121F28] text-white w-full px-4 lg:px-0">
      <h1 className="text-center text-3xl lg:text-4xl font-bold">
        About Me
      </h1>

      <div className="flex flex-col lg:flex-row gap-12 mt-10">

        <div className="w-full lg:w-[1300px] py-10 lg:pl-20 flex flex-row">
          <div>
            <h2 className="text-2xl lg:text-3xl text-orange-500 font-bold"> Education </h2>
            <p className="mt-4">
              <span className="font-semibold text-lg lg:text-xl">
                Bachelor of Computer Applications (BCA)
              </span> <br />
              Government First Grade College, Tiptur <br />
              2022–2025 | CGPA (8.5) </p>

            <p className="mt-5">
              <span className="font-semibold text-lg lg:text-xl">
                PUC – PCMB
              </span> <br />
              Kalpataru Pre-University College, Tiptur <br />
              2019–2021 | Percentage (72.8%) </p>
          </div>

          <div className="lg:mt1-0">
            <h2 className="text-2xl lg:text-3xl text-orange-500 font-bold">
              Core compentencies
            </h2>
            <div className="space-y-1 lg:text-left">
              <p>Component-based UI Development</p>
              <p>Responsive Design</p>
              <p>Debugging and Problem Solving</p>
              <p>Readable, Maintainable Code</p>
            </div>
          </div>
        </div>

        <div className="py-10 lg:pr-20 flex flex-col items-center">
          <h2 className="text-2xl lg:text-3xl text-orange-500 font-bold">Frontend Developer</h2>

          <p className="py-8 text-center max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum minus magnam voluptatem, atque corporis quaerat odit illo quos quasi, maxime laudantium a! Sit nulla sequi dignissimos. Aliquam, expedita! Quasi nisi possimus odit, porro inventore laborum nesciunt quos necessitatibus ratione ipsam, nostrum blanditiis voluptas! Officia necessitatibus corporis aut, consequatur placeat quia?
          </p>

          <ul className="flex flex-wrap justify-center p-5 bg-gray-800 rounded-2xl gap-3">
            {[
              ["Python", "icons8-python-48.png"],
              ["JavaScript", "icons8-javascript-48.png"],
              ["MySQL", "icons8-mysql-24.png"],
              ["ReactJS", "icons8-react-native-24.png"],
              ["ThreeJS", "icons8-three.js-64.png"],
              ["Tailwind", "icons8-tailwind-css-48.png"],
              ["Git", "icons8-git-48.png"],
              ["REST APIs", "icons8-rest-api-64.png"],
              ["AWS (Basics)", "icons8-aws-48.png"],
            ].map(([name, icon]) => (
              <li
                key={name}
                className="bg-gray-500 rounded font-semibold w-36 py-1
                           flex items-center justify-center gap-2 text-sm"
              >
                <img className="h-5" src={`images/${icon}`} alt={name} />
                {name}
              </li>
            ))}
          </ul>

          <button className="bg-orange-500 px-6 py-2 mt-6 rounded font-bold">
            Download CV
          </button>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
