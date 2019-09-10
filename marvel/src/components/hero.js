import React from "react";
import { getInnerHeroId } from "./select";
import axios from "axios";
export function HeroPage() {
  let ID = getInnerHeroId();
  console.log(ID);
  const APIKEY = "5d4243b89054e60caa0868ff3d83f094";
  const TS = `timestamp`;
  const hash = `72d83c2609f0ed1bbbeac9d8d81bd98c`;

  const url = `https://gateway.marvel.com:443/v1/public/characters/${ID}?apikey=${APIKEY}&ts=${TS}&hash=${hash}`;

  // https://gateway.marvel.com:443/v1/public/characters/1009368?apikey=5d4243b89054e60caa0868ff3d83f094
  fetch(url)
    .then(res => res.json())
    .then(res => res.data)
    .then(res => console.log(res.results[0].name));

  return (
    <div>
      To be or to not to be?
      <h1>Yooo</h1>
      <div>{ID}</div>
    </div>
  );
}
