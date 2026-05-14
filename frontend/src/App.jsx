import { useState } from "react";

import AnimePage from "../pages/AnimePage";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Upload from "../pages/Upload";
import TitleUpload from "../pages/TitleUpload";
import "./App.css";
import About from "../pages/About";

import Navbar from "../components/Navbar";

function App() {
  const [searchEpisode, setSearchEpisode] = useState("");
  const [title, setTitle] = useState("");
  return (
    <>
      <Navbar setSearchEpisode={setSearchEpisode}></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <Home getfilTitle={searchEpisode} setTitle={setTitle}></Home>
          }
        />
        <Route path="/upload/:id" element={<Upload></Upload>}></Route>
        <Route
          path="/animepage/:id"
          element={<AnimePage getTitle={title}></AnimePage>}
        />
        <Route path="/uploadtitle" element={<TitleUpload />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
