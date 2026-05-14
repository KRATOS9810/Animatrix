import axios from "axios";
import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
function TitleUpload() {
  const fileRef = useRef();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");

  async function submitData() {
    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("year", year);
    formdata.append("cover", file);

    try {
      await axios.post(
        "https://animatrix-ay9w.onrender.com/uploadtitle",
        formdata,
      );

      setDescription("");
      setYear("");
      setTitle("");
      setFile(null);
      fileRef.current.value = "";
      toast.success("Uploaded");

      console.log("uploaded");
    } catch (error) {
      toast.error("Error occured");
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 py-10">
      <div className="bg-gray-800 p-5 sm:p-6 rounded-2xl shadow-lg w-full max-w-md border border-gray-700">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
          Upload Title
        </h2>

        <input
          type="file"
          ref={fileRef}
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full mb-4 text-sm text-gray-300
      file:mr-3 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:bg-blue-600 file:text-white
      hover:file:bg-blue-700 cursor-pointer"
        />

        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-3 p-3 rounded-lg bg-gray-700 text-white
      placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500
      text-sm sm:text-base"
        />

        <input
          type="text"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mb-3 p-3 rounded-lg bg-gray-700 text-white
      placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500
      text-sm sm:text-base"
        />

        <input
          type="text"
          value={year}
          placeholder="Year"
          onChange={(e) => setYear(e.target.value)}
          className="w-full mb-5 p-3 rounded-lg bg-gray-700 text-white
      placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500
      text-sm sm:text-base"
        />

        <button
          onClick={submitData}
          className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold
      hover:bg-blue-700 active:scale-95 transition-all duration-200
      text-sm sm:text-base"
        >
          Upload
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}

export default TitleUpload;
