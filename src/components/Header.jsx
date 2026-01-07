import { NavLink } from "react-router-dom";
import "../assets/css/header.css";

export default function Header() {
  return (
    <header className="app-header">
      <nav className="header-nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <span className="header-watermark video">VIDEO</span>
              )}
              VIDEO GAMES
            </>
          )}
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {({ isActive }) => (
            <>
              {isActive && (
                <span className="header-watermark contact">CONTACT</span>
              )}
              CONTACT
            </>
          )}
        </NavLink>
      </nav>
    </header>
  );
}
