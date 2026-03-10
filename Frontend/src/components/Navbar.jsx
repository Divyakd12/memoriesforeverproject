



import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Navbar() {

  const user = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <h2 className="name">Memories Forever ❤️</h2>

      <div className="nav-links">

        <Link to="/" className="">Home</Link>

        {!user && (
          <>
            <Link to="/login" className="">Login</Link>
            <Link to="/register"className="">Register</Link>
            <Link to="/about"className="">About</Link>

          </>
        )}

        {user && (
          <>
          
            <Link to="/dashboard">Dashboard</Link>

            <Link to="/add">Add Entry</Link>
            {/* <Link to="/memories">Memories</Link> */}
            <ThemeToggle/>
            <button onClick={logout}>Logout</button>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;