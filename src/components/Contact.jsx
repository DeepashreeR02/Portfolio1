function Contact() {
  return (
    <div id="contact" className="bg-black text-white py-20 px-10">

      <h2 className="text-4xl font-bold text-center mb-10">
        Contact Me 📬
      </h2>

      <div className="flex flex-col items-center gap-6">

        <p className="text-gray-400 text-lg text-center max-w-xl">
          I'm open to internships and full time opportunities.
          If you find me suitable, Feel free to connect with me!
        </p>

        <div className="flex gap-6 text-lg">

          <a
            href="mailto:deepashreeram12@gmail.com"
            className="hover:text-gray-400 underline"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/deepashree-r12/"
            className="hover:text-gray-400 underline"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/DeepashreeR02?tab=repositories"
            className="hover:text-gray-400 underline"
          >
            GitHub
          </a>

        </div>

      </div>
    </div>
  );
}

export default Contact;