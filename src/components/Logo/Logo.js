import React from "react";
import logo from "../../assets/logo.svg";

import "./styles.css";

function Logo() {
  return (
    <div className="logoContainer">
      <img className="trelloLogo" src={logo} />
      <span>Trello</span>
    </div>
  );
}

export default Logo;
