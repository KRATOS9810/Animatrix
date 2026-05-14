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
        // first video default
      });
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-slate-950 to-indigo-950 text-white p-6">
      <div className="grid lg:grid-cols-4 gap-6 mt-10">
        {/* Video Player Section */}
        <div className="lg:col-span-3 bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800">
          <div className="px-6 py-4 border-b border-zinc-800">
            <h1 className="text-2xl font-bold">{getTitle}</h1>
            <p className="text-sm text-zinc-400 mt-1">
              Watch in HD • Stream Online
            </p>
          </div>

          <div className="p-4">
            <Plyr
              controls
              className="w-full rounded-xl"
              src={`${currentVideo?.videoUrl}`}
            />
          </div>
        </div>

        {/* Episode Sidebar */}
        <div className="bg-zinc-950 rounded-2xl shadow-2xl border border-zinc-800 p-5">
          <div className="flex items-center gap-9">
            <h2 className="text-2xl font-bold mb-5">Episodes</h2>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 m-2 rounded"
              onClick={() => {
                navigate(`/upload/${id}`);
              }}
            >
              Upload Episode
            </button>
          </div>

          <div className="space-y-3 max-h-[700px] overflow-y-auto pr-2">
            {videos.map((video, index) => (
              <button
                key={video._id}
                onClick={() => setCurrentVideo(video)}
                className="w-full text-left px-4 py-3 rounded-xl bg-zinc-900 hover:bg-orange-500 hover:text-white transition duration-300 border border-zinc-800"
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
