import { useState } from "react";
import MemeData from "./MemeData";

const Meme = () => {
  //   const [memeImg, setMemeImg] = useState("http://i.imgflip.com/1bij.jpg");

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = useState(MemeData);

  function getMemeImage() {
    const memeArray = allMemeImages.data.memes;
    const randumNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randumNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
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
      <img className="meme-img" src={meme.randomImage} alt="meme image" />
    </main>
  );
};

export default Meme;
