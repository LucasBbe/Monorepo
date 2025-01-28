import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
type User = {
  id: number;
  email: string;
  is_admin: boolean;
};

import "./App.css";

function App() {
  const [user, setUser] = useState(null as User | null);
  return (
    <>
      <header>
        <Link to="/">
          <h1 className="logo">Wild Series</h1>
        </Link>
      </header>

      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/programs">Programs</NavLink>
          </li>
        </ul>
      </nav>

      <main className="text-box">
        <Outlet context={{ user, setUser }} />
      </main>

      <footer>
        Développé par la&nbsp;
        <a
          href="https://www.wildcodeschool.com/"
          className="wcs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wild Code School
        </a>
      </footer>
    </>
  );
}

export default App;
