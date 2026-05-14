import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home({ getfilTitle, setTitle }) {
  const navigate = useNavigate();

  const [videos, setVidoes] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://animatrix-ay9w.onrender.com/gettitles?search=${getfilTitle}`,
      )
      .then((response) => {
        setVidoes(response.data);
        console.log(response.data);
      });
  }, [getfilTitle]);

  return (
    <div className="min-h-screen bg-gray-950 px-6 py-10">
      <h1 className="text-4xl font-bold text-white text-center mb-10 mt-20 flex justify-center">
        Animatrix
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-8">
        {videos.map((video) => (
          <div
            key={video._id}
            className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg overflow-hidden p-4"
          >
            <h2 className="text-xl font-semibold text-white mb-2 truncate">
              {video.title}
            </h2>
            <p className="text-gray-400 mb-4">Episode {video.episodeNumber}</p>
            <div className="overflow-hidden rounded-xl">
              <img
                onClick={() => {
                  navigate(`/animepage/${video._id}`);
                  setTitle(video.title);
                }}
                className="w-full bg-black transition-transform duration-300 hover:scale-110 cursor-pointer"
                src={`${video.coverImage}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
