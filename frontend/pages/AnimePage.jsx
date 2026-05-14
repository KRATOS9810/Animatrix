import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Plyr } from "plyr-react";
import { useNavigate } from "react-router-dom";

function AnimePage({ getTitle }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    axios
      .get(`https://animatrix-ay9w.onrender.com/episodes/${id}`)
      .then((res) => {
        setVideos(res.data);
        console.log(res.data);
        setCurrentVideo(res.data[0]);
      });
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-slate-950 to-indigo-950 text-white px-3 sm:px-6 py-4 sm:py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 mt-40 sm:mt-20 ">
        {/* Video Player Section */}
        <div className="lg:col-span-3 bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
          <div className="px-4 sm:px-6 py-4 border-b border-zinc-800">
            <h1 className="text-lg sm:text-2xl font-bold break-words">
              {getTitle}
            </h1>

            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Watch in HD • Stream Online
            </p>
          </div>

          <div className="p-2 sm:p-4 flex justify-center">
            <div className="w-full max-w-6xl">
              <Plyr
                controls
                className="rounded-xl overflow-hidden aspect-video"
                src={currentVideo?.videoUrl}
              />
            </div>
          </div>
        </div>

        <div className="bg-zinc-950 rounded-2xl shadow-2xl border border-zinc-800 p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
            <h2 className="text-xl sm:text-2xl font-bold">{}</h2>

            <button
              className="bg-blue-500 hover:bg-blue-700 transition text-white font-semibold py-2 px-3 rounded-lg text-sm"
              onClick={() => {
                navigate(`/upload/${id}`);
              }}
            >
              Upload Episode
            </button>
          </div>

          <div className="space-y-3 max-h-[500px] sm:max-h-[700px] overflow-y-auto pr-1 sm:pr-2">
            {videos.map((video, index) => (
              <button
                key={video._id}
                onClick={() => setCurrentVideo(video)}
                className="w-full text-left px-3 sm:px-4 py-3 rounded-xl bg-zinc-900 hover:bg-orange-500 hover:text-white transition duration-300 border border-zinc-800 text-sm sm:text-base break-words"
              >
                <span className="font-semibold mr-2">{index + 1}.</span>

                {video.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimePage;
