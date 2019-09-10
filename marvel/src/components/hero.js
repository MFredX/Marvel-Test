import React, { useState } from "react";
import { getInnerHeroId } from "./select";
import { Card } from "react-bootstrap";

export function HeroPage() {
  // const [results, setResults] = useState(null);
  let ID = getInnerHeroId();
  // let results = await doAPICall(ID);
  // console.log(results);
  return (
    <div>
      To be or to not to be?
      <h1>Yooo</h1>
      {/* <div>{ID}</div> */}
      {/* {results} */}
    </div>
  );
}

function doAPICall(ID) {
  console.log(ID);
  const APIKEY = "5d4243b89054e60caa0868ff3d83f094";
  const TS = `timestamp`;
  const hash = `72d83c2609f0ed1bbbeac9d8d81bd98c`;

  const url = `https://gateway.marvel.com:443/v1/public/characters/${ID}?apikey=${APIKEY}&ts=${TS}&hash=${hash}`;

  return new Promise(resolve => {
    fetch(url)
      .then(res => res.json())
      .then(json => resolve(json.data));
  });
}

function createHeroPage(res) {
  let name = res.results[0].name;
  let description = res.results[0].description;
  let imageURL =
    res.results[0].thumbnail.path + res.results[0].thumbnail.extension;
  return (
    <div>
      <Card className="bg-dark text-white">
        <Card.Img src="holder.js/100px270" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}
