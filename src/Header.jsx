import React from "react";
import Kappa from "./assets/kappa.png";

const Header = () => {
  return (
    <header>
      <img className="header-img" src={Kappa} alt="Kappa face meme" />
      <h2 className="header-title">Meme Generator</h2>
      <h4 className="header-text">Best memes just for you!</h4>
    </header>
  );
};

export default Header;
