import React from "react";

function EpisodeCard({ name, air_date, episode, url }) {
  return (
    <div className="episodes">
      <div className="item">
        <h2>{name}</h2>
        <h3>{air_date}</h3>
        <h3>{episode}</h3>
      </div>
    </div>
  );
}

export default EpisodeCard;
