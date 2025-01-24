import { useState } from "react";
import logo from "../../images/Logo.svg";
import "./Nav.css";
import { Hamburger } from "./Hamburger";
import { Link } from "react-router-dom";
import { useNavList } from "../../lib/navList";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { navList } = useNavList();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <Link to="/">
        <img src={logo} alt="Little Lemon Logo" />
      </Link>
      <Hamburger clickOpt={toggleMenu} />
      <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
        {navList.map((navItem) => (
          <li key={navItem.key}>
            <Link to={navItem.url}>{navItem.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { Nav };
