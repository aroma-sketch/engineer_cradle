import React from "react";
import "./header.css";
import Logo_lg from "../../assets/Logo_lg.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img className="header-logo-image" src={Logo_lg} alt="img"></img>
      </div>
      <nav className="nav">
        <Link to="/list">contactsList</Link>
      </nav>
    </div>
  );
};

export default Header;
