import "./Navbar.css";
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/uploadtitle">Upload Title</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
