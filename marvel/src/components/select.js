import React, { useState } from "react";
import { Button, CardDeck, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";
import ironmanImg from "../media/ironman.png";
import wolverineImg from "../media/wolverine.png";
import antmanImg from "../media/antman.png";
import thorImg from "../media/thor.png";
import spidermanImg from "../media/spiderman.png";
import cyclopsImg from "../media/cyclops.png";

let innerHeroID = "";
export function getInnerHeroId(props) {
  return innerHeroID;
}

export function SelectHeroPage() {
  return (
    // <div className="selectpage">
    <div className="selectpage">
      <h1 className="selectHero">Select Your Hero Here</h1>
      <CardDeck className="selectCard">
        <Card className="selectCardone">
          <Card.Img variant="top" src={ironmanImg} />
          <Card.Body>
            <Card.Title>Iron Man</Card.Title>
            <Card.Text>“I am Iron Man!”</Card.Text>
          </Card.Body>
          <Button
            className="selectbutton"
            variant="danger"
            value="1009368"
            onClick={e => {
              // setheroID(e.currentTarget.value);
              // alert(e.currentTarget.value);
              innerHeroID = e.currentTarget.value;
            }}
          >
            <Link to={"/Hero"}>Click for details</Link>
          </Button>
        </Card>
        <Card>
          <Card.Img variant="top" src={wolverineImg} />
          <Card.Body>
            <Card.Title>Wolverine</Card.Title>
            <Card.Text>“I'm Canadian!”</Card.Text>
          </Card.Body>
          {/* <Link to={"/Hero"}> */}
          <Button
            className="selectbutton"
            variant="danger"
            value="1009718"
            onClick={e => {
              innerHeroID = e.currentTarget.value;
            }}
          >
            <Link to={"/Hero"}>Click for details</Link>
          </Button>
        </Card>
        <Card>
          <Card.Img variant="top" src={cyclopsImg} />
          <Card.Body>
            <Card.Title>Cyclops</Card.Title>
            <Card.Text>
              “ Hey, it's okay... I'm Cyclops. I've been on TV.”
            </Card.Text>
          </Card.Body>
          <Button
            className="selectbutton"
            variant="danger"
            value="1009257"
            onClick={e => {
              innerHeroID = e.currentTarget.value;
            }}
          >
            <Link to={"/Hero"}>Click for details</Link>
          </Button>
        </Card>
        <Card>
          <Card.Img variant="top" src={thorImg} />
          <Card.Body>
            <Card.Title>Thor</Card.Title>
            <Card.Text>“I notice you've copied my beard.”</Card.Text>
          </Card.Body>
          <Button
            className="selectbutton"
            variant="danger"
            value="1009664"
            onClick={e => {
              innerHeroID = e.currentTarget.value;
            }}
          >
            <Link to={"/Hero"}>Click for details</Link>
          </Button>
        </Card>
        <Card>
          <Card.Img variant="top" src={antmanImg} />
          <Card.Body>
            <Card.Title>Ant-Man</Card.Title>
            <Card.Text>"Pick someone your own size!". </Card.Text>
          </Card.Body>
          <Button
            className="selectbutton"
            variant="danger"
            value="1010802"
            onClick={e => {
              innerHeroID = e.currentTarget.value;
            }}
          >
            <Link to={"/Hero"}>Click for details</Link>
          </Button>
        </Card>
        <Card>
          <Card.Img variant="top" src={spidermanImg} />
          <Card.Body>
            <Card.Title>Spider-Man</Card.Title>
            <Card.Text>"It's your friendly neighborhood Spider-Man"</Card.Text>
          </Card.Body>
          <Button
            className="selectbutton"
            variant="danger"
            value="1009610"
            onClick={e => {
              innerHeroID = e.currentTarget.value;
            }}
          >
            <Link to={"/Hero"}>Click for details</Link>
          </Button>
        </Card>
      </CardDeck>
    </div>
  );
}
