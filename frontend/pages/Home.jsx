import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home({ getfilTitle, setTitle }) {
  const navigate = useNavigate();

  const [videos, setVidoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://animatrix-ay9w.onrender.com/gettitles?search=${getfilTitle}`,
      )
      .then((response) => {
        setVidoes(response.data);
        setLoading(false);
      });
  }, [getfilTitle]);

  return (
    <div className="min-h-screen bg-gray-950 px-3 sm:px-6 py-6 sm:py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8 sm:mb-10 mt-35 flex justify-center">
        Animatrix
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
        {videos.map((video) => (
          <div
            key={video._id}
            className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg overflow-hidden p-3 sm:p-4 hover:scale-[1.02] transition duration-300"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                onClick={() => {
                  navigate(`/animepage/${video._id}`);
                  setTitle(video.title);
                }}
                className="w-full aspect-[3/4] object-cover bg-black transition-transform duration-300 hover:scale-110 cursor-pointer"
                src={video.coverImage}
                alt={video.title}
              />
            </div>

            <div className="mt-3">
              <h2 className="text-sm sm:text-lg font-semibold text-white truncate">
                {video.title}
              </h2>

              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                {video.year}
              </p>
            </div>
          </div>
        ))}
      </div>

      {loading && (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-gray-700 border-t-white rounded-full animate-spin mb-6"></div>

          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2 text-center">
            Loading Anime Titles...
          </h2>

          <p className="text-gray-400 text-sm sm:text-base text-center max-w-md px-4">
            Fetching titles from the database. Please wait while the anime
            universe powers up ⚡
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
