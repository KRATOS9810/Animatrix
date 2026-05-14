import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar({ setSearchEpisode }) {
  return (
    <>
      <nav className="navbar">
        <li className="nav-links">
          <a href="/">Animatrix</a>
        </li>
        <input
          className="bg-white rounded-2xl w-60 h-7 flex text-center"
          placeholder="Search here"
          onChange={(e) => {
            setSearchEpisode(e.target.value);
          }}
        ></input>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/uploadtitle">Upload Title</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
