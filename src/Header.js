import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "./images/logo.png";

const Header = () => (
  <header>
    <nav>
    <img src={logo} alt="test"/>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
