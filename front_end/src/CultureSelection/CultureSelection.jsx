import React, { useState } from "react";
import "./CultureSelection.css";
import ArrowPic from "../attachments/arrow-pic.png";


const cultures = [
  "Asian",
  "British",
  "Canadian",
  "Chinese",
  "Classic",
  "Egyptian",
  "English",
  "French",
  "German",
  "Indian",
  "Irish",
  "Italian",
  "Japanese",
  "Latin American",
  "Polish",
  "Russian",
  "Scandinavian",
  "Spanish",
  "Swedish",
  "Turkish"
];

const CultureSelection = () => {
  const [clicked, setClicked] = useState(Array(12).fill(false));

  const handleClick = (index) => {
    setClicked((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="culture-selection-container">
      <div className="go-back-container">
        <img src={ArrowPic} alt="Arrow logo" className="arrow-pic" />
        <p className="go-back-p">Go back</p>
      </div>
      <h2 className="culture-selection-title">
        Select the culture that interests you
      </h2>
      <div className="culture-options-container">
        {cultures.map((culture, index) => (
          <button
            key={culture}
            className={
              clicked[index]
                ? "culture-options-clicked-btn"
                : "culture-options-default-btn"
            }
            onClick={() => handleClick(index)}
          >
            {culture}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CultureSelection;
