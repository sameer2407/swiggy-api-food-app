import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Sameer</h1>
        <div className="flex justify-center space-x-4 text-blue-600">
          <a
            href="mailto:satyamjadaun2001@gmail.com"
            className="hover:underline"
          >
            satyamjadaun2001@gmail.com
          </a>
          <a href="tel:9319316601" className="hover:underline">
            9319316601
          </a>
          <a
            href="https://www.linkedin.com/in/sameer-jadaun-13379a241/"
            className="hover:underline"
          >
            LinkedIn
          </a>
          <a href="https://github.com/sameer2407" className="hover:underline">
            GitHub
          </a>
        </div>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-1 mb-4">
          Education
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-medium">B.TECH (RTU)</h3>
          <p>
            Poornima Institute of Engineering and Technology, Jaipur | 8.67 CGPA
            | 2020 – present
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium">XII (CBSE)</h3>
          <p>
            Government Co-ed Senior Secondary School Sector 22 Dwarka, Delhi |
            75.5% | 2018 – 2019
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium">X (CBSE)</h3>
          <p>
            Government Co-ed Senior Secondary School Sector 22 Dwarka, Delhi |
            8.2 CGPA | 2016 – 2017
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-1 mb-4">
          Skills
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Frontend Development: HTML, CSS, JavaScript, React.js</li>
          <li>
            Machine Learning: Data pre-processing, model training, and
            evaluation
          </li>
          <li>
            Internet of Things: Embedded Systems, Micro-controllers, Arduino,
            Raspberry Pi, various sensors, IFTTT, ThingSpeak
          </li>
          <li>Other Technical Skills: C++, Python, Linux, Git, Vercel, Vite</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-1 mb-4">
          Projects
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-medium">Netflix UI Clone</h3>
          <p>
            Developed a Netflix user interface clone using React.js,
            incorporating movie listings, category filtering, and responsive
            design for diverse screen sizes.
          </p>
          <a
            href="https://netflix-clone-rouge-seven.vercel.app/"
            className="text-blue-600 hover:underline"
          >
            View Project
          </a>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium">Weather App</h3>
          <p>
            Created a weather app using React.js, integrating OpenWeather and
            wft-geo-db APIs. It offers real-time updates and city suggestions
            based on user input, displaying temperature, humidity, and wind
            speed.
          </p>
          <a
            href="https://weather-web-app-beige.vercel.app/"
            className="text-blue-600 hover:underline"
          >
            View Project
          </a>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium">Word Guessing Game</h3>
          <p>
            Created a word guessing game using HTML, CSS, and Vanilla
            JavaScript.
          </p>
          <a
            href="https://word-guess-game-rho.vercel.app/"
            className="text-blue-600 hover:underline"
          >
            View Project
          </a>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium">Air Quality Prediction</h3>
          <p>
            Developed ML-integrated web interface predicting Air Quality using
            Machine Learning models, Flask, HTML, CSS.
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-medium">Trespassing Detection System</h3>
          <p>
            Created a system that clicks a picture automatically and sends it to
            my email if there is any human trespassing in my workspace using
            Raspberry Pi, Pi camera module, PIR sensor, and Python.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-1 mb-4">
          Professional Experience
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-medium">Data Science Intern</h3>
          <p>Celebal Technologies | Jaipur | May 2023 – July 2023</p>
          <p>
            Completed a 2-month data science internship at Celebal Technologies,
            gaining practical experience and skills in the field of data
            science.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b-2 border-blue-600 pb-1 mb-4">
          Interests
        </h2>
        <p>Eastern Philosophy | Traveling | Nature | Cricket</p>
      </section>
    </div>
  );
};

export default About;
