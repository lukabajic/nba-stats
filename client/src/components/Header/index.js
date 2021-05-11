import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Header = ({ displayName }) => (
  <header className="Header">
    <div className="Header__left">
      <Link to="/" className="Header__logo">
        <img
          src={process.env.PUBLIC_URL + "/logo.svg"}
          alt="NBA logo"
          className="Header__logo-img"
        />
      </Link>
      <h1 className="Header__text">{displayName || "Players"}</h1>
    </div>
  </header>
);

export default Header;
