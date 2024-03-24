import { useState } from "react";
import MemeData from "./MemeData";

const Meme = () => {
  const [memeImg, setMemeImg] = useState("");

  function getMemeImage() {
    const memeArray = MemeData.data.memes;
    const randumNumber = Math.floor(Math.random() * memeArray.length);
    setMemeImg(memeArray[randumNumber].url);
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
      <img className="meme-img" src={memeImg} alt="meme image" />
    </main>
  );
};

export default Meme;
