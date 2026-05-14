const About = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-4 sm:px-6 py-20 sm:py-24">
      <div className="max-w-6xl mx-auto mt-20">
        <div className="text-center mb-14 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            About AnimeMatrix
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-7 sm:leading-8 px-1">
            AnimeMatrix is a modern anime media platform built for storing,
            managing, and streaming anime content with a clean UI and fast
            performance. The project focuses on smooth media handling, scalable
            backend architecture, and an enjoyable viewing experience.
          </p>
        </div>

        <div className="bg-[#161616] border border-gray-800 rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl">
          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-5">
              👨‍💻 Created By
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-7 sm:leading-8">
              AnimeMatrix was developed by{" "}
              <span className="text-white font-semibold">Deepak</span>, a
              passionate full-stack developer who enjoys building modern web
              applications, experimenting with media systems, and creating
              projects inspired by anime and entertainment platforms.
            </p>
          </section>

          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-5">
              🎯 Project Vision
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-7 sm:leading-8">
              The goal of AnimeMatrix is to provide a centralized platform where
              anime-related media can be uploaded, stored, and managed
              efficiently while maintaining a sleek and responsive user
              experience. The project also serves as a real-world full-stack
              learning experience involving media hosting, APIs, authentication,
              and cloud integration.
            </p>
          </section>

          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
              ⚡ Tech Stack
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
              {[
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Cloudinary",
                "REST API",
                "JavaScript",
                "Multer",
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-[#202020] border border-gray-700 rounded-2xl p-4 sm:p-5 text-center hover:scale-105 transition duration-300"
                >
                  <p className="font-medium text-sm sm:text-base">{tech}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-5">
              ✨ Core Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                "Anime episode uploads",
                "Cloud media storage",
                "Image hosting with Cloudinary",
                "Fast backend API handling",
                "Responsive modern interface",
                "Media organization system",
                "Streaming-ready architecture",
                "Scalable full-stack setup",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-[#1d1d1d] border border-gray-800 rounded-2xl p-4 sm:p-5"
                >
                  <p className="text-gray-300 text-sm sm:text-lg">
                    ✔ {feature}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm sm:text-lg">
              Built with code, creativity, and anime energy ⚡
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
