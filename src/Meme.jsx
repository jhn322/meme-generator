import React from "react";

const Meme = () => {
  return (
    <main>
      <form className="meme-form">
        <input className="meme-input" type="text" placeholder="Top text" />
        <input className="meme-input" type="text" placeholder="Bottom text" />
        <button className="meme-button">Generate new meme</button>
      </form>
    </main>
  );
};

export default Meme;
