import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling Face",
  "😞": "Disappointed Face",
  "❤️": "Love",
  "😘": "Kiss",
  "🎂": "Birthday",
  "😉": "Winking Face"
};
var emojisKnown = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    // console.log(meaning)
    if (meaning === undefined) {
      meaning = "not found";
    }

    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Meaning</h1>
      <input onChange={emojiHandler}></input>

      <div className="font">Meaning: {meaning}</div>
      <div className="font">Emojis we know</div>
      {emojisKnown.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.1rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
