import React from "react";
import { Link } from "react-router-dom";
//import "./NavBar.css"

const NavBar = () => {
  return <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/todo">To do</Link></li>
      <li><Link to="/weather">Weather forecast</Link></li>
    </ul>
  </nav>;
};

export default NavBar;
