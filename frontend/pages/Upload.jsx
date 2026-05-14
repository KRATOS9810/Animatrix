import axios from "axios";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Upload() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [episodeNumber, setEpisodeNumber] = useState("");
  const fileRef = useRef();
  const { id } = useParams();

  async function handleUpload() {
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
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-xl p-6 space-y-5">
        <h1 className="text-3xl font-bold text-white text-center">Upload</h1>

        <input
          type="file"
          ref={fileRef}
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4
      file:rounded-lg file:border-0 file:text-sm file:font-semibold
      file:bg-blue-600 file:text-white hover:file:bg-blue-700
      cursor-pointer"
        />

        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white
      border border-gray-700 focus:outline-none focus:ring-2
      focus:ring-blue-500 placeholder-gray-400"
        />

        <input
          type="text"
          value={episodeNumber}
          placeholder="Episode Number"
          onChange={(e) => setEpisodeNumber(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white
      border border-gray-700 focus:outline-none focus:ring-2
      focus:ring-blue-500 placeholder-gray-400"
        />

        <button
          onClick={handleUpload}
          className="w-full bg-blue-600 hover:bg-blue-700
      text-white font-semibold py-3 rounded-xl transition duration-200"
        >
          Upload
        </button>

        <ToastContainer />
      </div>
    </div>
  );
}

export default Upload;
