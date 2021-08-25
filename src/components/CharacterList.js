import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import "../styles/CharacterCards.css";

function CharacterList() {
  const [CharacterList, GetCharacterList] = useState([]);
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        console.log(response.data.results);
        GetCharacterList(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="character-list">
      {CharacterList.map(({ name, image, gender, id, species }) => {
        return (
          <CharacterCard
            key={id}
            name={name}
            gender={gender}
            species={species}
            image={image}
          />
        );
      })}
    </section>
  );
}

export default CharacterList;
