import React from "react";
import { Button, CardDeck, Card } from "react-bootstrap";
import "../index.css";
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
        <Card className="selectCard">
          {/* <Card.Img variant="top" src="../media/ironman.png" /> */}
          <Card.Img variant="top" src={ironmanImg} />
          <Card.Body>
            <Card.Title>Iron Man</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Button variant="danger">Click for details</Button>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={wolverineImg} />
          <Card.Body>
            <Card.Title>Wolverine</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Button variant="danger">Click for details</Button>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={cyclopsImg} />
          <Card.Body>
            <Card.Title>Cyclops</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Button variant="danger">Click for details</Button>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={thorImg} />
          <Card.Body>
            <Card.Title>Thor</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Button variant="danger">Click for details</Button>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={antmanImg} />
          <Card.Body>
            <Card.Title>Ant-Man</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Button variant="danger">Click for details</Button>

          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={spidermanImg} />
          <Card.Body>
            <Card.Title>Spider-Man</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Button variant="danger">Click for details</Button>

          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}
