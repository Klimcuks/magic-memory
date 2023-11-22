import React from "react";
import "./SingleCard.css";

const SingleCard = ({ card, handleChoice}) => {
  
  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div className="card">
      <img src={card.src} alt="card front"></img>
      <img src="./img/cover.png" alt="card back" onClick={handleClick}></img>
    </div>
  );
};

export default SingleCard;
