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

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="meme-form">
        {" "}
        <input
          type="text"
          placeholder="Top text"
          className="meme-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />{" "}
        <input
          type="text"
          placeholder="Bottom text"
          className="meme-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="meme-button" onClick={getMemeImage}>
          Generate new image
        </button>
      </div>
      <div className="meme">
        <img className="meme-img" src={meme.randomImage} alt="meme image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
