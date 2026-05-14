import axios from "axios";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Upload() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [episodeNumber, setEpisodeNumber] = useState("");
  const [uploading, setuploading] = useState(false);
  const fileRef = useRef();
  const { id } = useParams();

  async function handleUpload() {
    setuploading(true);
    const formData = new FormData();
    formData.append("video", file);
    formData.append("title", title);
    formData.append("episodeNumber", episodeNumber);

    try {
      const res = await axios.post(
        `https://animatrix-ay9w.onrender.com/upload/${id}`,
        formData,
      );
      setTitle("");
      setEpisodeNumber("");
      setFile(null);
      fileRef.current.value = "";
      setuploading(false);
      console.log("uploaded", res);

      toast.success("Uploaded succesfully");
    } catch (error) {
      console.log(error);
      toast.error("Error occured", error);
    }
  }
  useEffect(() => {
    console.log(id);
  });

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-xl p-5 sm:p-6 space-y-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center">
          Upload
        </h1>

        <input
          type="file"
          ref={fileRef}
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full text-sm text-gray-300
      file:mr-3 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-600 file:text-white
      hover:file:bg-blue-700
      cursor-pointer"
        />

        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white
      border border-gray-700 focus:outline-none focus:ring-2
      focus:ring-blue-500 placeholder-gray-400
      text-sm sm:text-base"
        />

        <input
          type="text"
          value={episodeNumber}
          placeholder="Episode Number"
          onChange={(e) => setEpisodeNumber(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white
      border border-gray-700 focus:outline-none focus:ring-2
      focus:ring-blue-500 placeholder-gray-400
      text-sm sm:text-base"
        />

        <button
          onClick={handleUpload}
          className="w-full bg-blue-600 hover:bg-blue-700
      text-white font-semibold py-3 rounded-xl
      transition duration-200 active:scale-95
      text-sm sm:text-base"
        >
          Upload
        </button>

        <ToastContainer />
      </div>

      {uploading && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-[#161616] border border-gray-800 rounded-3xl px-6 sm:px-10 py-10 sm:py-12 flex flex-col items-center shadow-2xl max-w-md w-full">
            <div className="w-14 h-14 sm:w-16 sm:h-16 border-4 border-gray-700 border-t-white rounded-full animate-spin mb-6"></div>

            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 text-center">
              Uploading Content...
            </h2>

            <p className="text-gray-400 text-sm sm:text-base text-center max-w-sm leading-6 sm:leading-7">
              Your anime media is being uploaded and processed securely. Please
              wait a moment while everything is prepared ⚡
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Upload;
