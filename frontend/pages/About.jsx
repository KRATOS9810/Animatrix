const About = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About AnimeMatrix
          </h1>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            AnimeMatrix is a modern anime media platform built for storing,
            managing, and streaming anime content with a clean UI and fast
            performance. The project focuses on smooth media handling, scalable
            backend architecture, and an enjoyable viewing experience.
          </p>
        </div>

        <div className="bg-[#161616] border border-gray-800 rounded-3xl p-10 shadow-2xl">
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-5">👨‍💻 Created By</h2>

            <p className="text-gray-300 text-lg leading-8">
              AnimeMatrix was developed by{" "}
              <span className="text-white font-semibold">Deepak</span>, a
              passionate full-stack developer who enjoys building modern web
              applications, experimenting with media systems, and creating
              projects inspired by anime and entertainment platforms.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-5">🎯 Project Vision</h2>

            <p className="text-gray-300 text-lg leading-8">
              The goal of AnimeMatrix is to provide a centralized platform where
              anime-related media can be uploaded, stored, and managed
              efficiently while maintaining a sleek and responsive user
              experience. The project also serves as a real-world full-stack
              learning experience involving media hosting, APIs, authentication,
              and cloud integration.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">⚡ Tech Stack</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
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
                  className="bg-[#202020] border border-gray-700 rounded-2xl p-5 text-center hover:scale-105 transition duration-300"
                >
                  <p className="font-medium">{tech}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-5">✨ Core Features</h2>

            <div className="grid md:grid-cols-2 gap-6">
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
                  className="bg-[#1d1d1d] border border-gray-800 rounded-2xl p-5"
                >
                  <p className="text-gray-300 text-lg">✔ {feature}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-lg">
              Built with code, creativity, and anime energy ⚡
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
