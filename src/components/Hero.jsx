import profile from "../assets/profile.jpeg";

function Hero() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center px-10">
      
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* TEXT SECTION */}
        <div className="text-center md:text-left max-w-xl">
          
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Hi, I'm <span className="text-gray-300">Deepashree</span> 👋
          </h1>

          <p className="text-lg text-gray-400 mb-6">
            AI / ML Enthusiast 🚀 | Java Full Stack Developer 💻  
            Passionate about building intelligent and scalable applications.
          </p>

          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            
            {/* View Projects */}
            <a
              href="#projects"
              className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition duration-300"
            >
              View Projects
            </a>

            {/* Contact */}
            <a
              href="#contact"
              className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
            >
              Contact Me
            </a>

            {/* Resume Download */}
            <a
              href="/Deepashree_AI_ML_Resume.pdf"
              download
              className="bg-gray-700 px-6 py-2 rounded-full hover:bg-gray-600 transition duration-300"
            >
              Download Resume 📄
            </a>

          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="relative">
          <img
            src={profile}
            alt="profile"
            className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-white shadow-xl hover:scale-105 transition duration-300"
          />
        </div>

      </div>
    </div>
  );
}

export default Hero;