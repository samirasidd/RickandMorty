import React from "react";

function CharacterCard({ name, image, gender, species }) {
  return (
    <div className="character">
      <div className="item">
        <h2>{name}</h2>
        <h3>{gender}</h3>
        <h3>{species}</h3>
      </div>
      <img src={image} alt="" />
    </div>
  );
}

export default CharacterCard;
