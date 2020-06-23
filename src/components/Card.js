import React from "react";
import CardData from "../utils/CardData";
import "./styles.css/Card.css";
function Card(title, description, image, githubLink, siteLink) {
  return (
    <div class="cardContainer">
      <h3 className="cardTitle">{CardData.title}</h3>
      <p className="cardDescription">{CardData.description}</p>
      <img src={CardData.image} alt="" className="cardImage" />
    </div>
  );
}

export default Card;
