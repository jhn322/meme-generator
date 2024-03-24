import React from "react";
import MemeData from "./MemeData";

const Meme = () => {
  function getMemeImage() {
    const memeArray = MemeData.data.memes;
    const randumNumber = Math.floor(Math.random() * memeArray.length);
    url = memeArray[randumNumber].url;
    console.log(url);
  }

  return (
    <main>
      <div className="meme-form">
        {" "}
        <input
          id="first input"
          className="meme-input"
          type="text"
          placeholder="Kappa"
        />{" "}
        <input
          id="second input"
          className="meme-input"
          type="text"
          placeholder="Ross"
        />
        <button id="button" onClick={getMemeImage} className="meme-button">
          Generate new meme
        </button>
      </div>
    </main>
  );
};

export default Meme;
