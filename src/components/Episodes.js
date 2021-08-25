import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Episode.css";
import EpisodeCard from "./EpisodeCard";

function Episodes() {
  const [Episodes, GetEpisodes] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((response) => {
        console.log(response.data.results);
        GetEpisodes(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="episodes">
      <h2>Episode List</h2>
      {Episodes.map(({ id, name, air_date, episode, url }) => {
        return (
          <EpisodeCard
            key={id}
            name={name}
            air_date={air_date}
            episode={episode}
            url={url}
          />
        );
      })}
    </section>
  );
}

export default Episodes;
