import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        Nauman<span>Dev</span>
      </a>

      <ul className={menu ? 'nav-links active' : 'nav-links'}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a className="hire-btn" href="#contact">
        CONTACT ME
      </a>

      <button className="menu-btn" onClick={() => setMenu(!menu)} type="button" aria-label="Toggle menu">
        ☰
      </button>
    </nav>
  );
}

export default Navbar;
