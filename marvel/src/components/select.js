import React from "react";
import { Button, CardDeck, Card } from "react-bootstrap";
import styles from "../index.css";
import ironmanImg from "../media/ironman.png";
import wolverineImg from "../media/wolverine.png";
import antmanImg from "../media/antman.png";
import thorImg from "../media/thor.png";
import spidermanImg from "../media/spiderman.png";
import cyclopsImg from "../media/cyclops.png";

export function SelectHeroPage() {
  return (
    <div>
      <h1>Select Your Hero Here</h1>
      <CardDeck>
        <Card>
          {/* className={styles.selectCard} */}
          {/* <Card.Img variant="top" src="../media/ironman.png" /> */}
          <Card.Img variant="top" src={ironmanImg} />
          <Card.Body>
            <Card.Title>Iron Man</Card.Title>
            <Card.Text>“I am Iron Man!”</Card.Text>
          </Card.Body>
          <Button variant="danger">Click for details</Button>
        </Card>
        <Card>
          <Card.Img variant="top" src={wolverineImg} />
          <Card.Body>
            <Card.Title>Wolverine</Card.Title>
            <Card.Text>“I'm Canadian!”</Card.Text>
          </Card.Body>
          <Button variant="danger">Click for details</Button>
        </Card>
        <Card>
          <Card.Img variant="top" src={cyclopsImg} />
          <Card.Body>
            <Card.Title>Cyclops</Card.Title>
            <Card.Text>
              “ Hey, it's okay... I'm Cyclops. I've been on TV.”
            </Card.Text>
          </Card.Body>
          <Button variant="danger">Click for details</Button>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={thorImg} />
          <Card.Body>
            <Card.Title>Thor</Card.Title>
            <Card.Text>“I notice you've copied my beard.”</Card.Text>
          </Card.Body>
          <Button variant="danger">Click for details</Button>
        </Card>
        <Card>
          <Card.Img variant="top" src={antmanImg} />
          <Card.Body>
            <Card.Title>Ant-Man</Card.Title>
            <Card.Text>"Pick someone your own size!". </Card.Text>
          </Card.Body>
          <Button variant="danger">Click for details</Button>
        </Card>
        <Card>
          <Card.Img variant="top" src={spidermanImg} />
          <Card.Body>
            <Card.Title>Spider-Man</Card.Title>
            <Card.Text>"It's your friendly neighborhood Spider-Man"</Card.Text>
          </Card.Body>
          <Button variant="danger">Click for details</Button>
        </Card>
      </CardDeck>
    </div>
  );
}
