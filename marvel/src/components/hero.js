import React from "react";
import { getInnerHeroId } from "./select";
import { Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.css";

class HeroPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let ID = getInnerHeroId();
    const APIKEY = "5d4243b89054e60caa0868ff3d83f094";
    const TS = `timestamp`;
    const hash = `72d83c2609f0ed1bbbeac9d8d81bd98c`;
    const url = `https://gateway.marvel.com:443/v1/public/characters/${ID}?apikey=${APIKEY}&ts=${TS}&hash=${hash}`;
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(res => res.data)
      .then(json => {
        this.setState({
          marveldata: json
        });
      });
  }
  render() {
    if (!this.state.marveldata)
      return (
        <div className="SpannerDiv">
          <Spinner
            animation="border"
            role="status"
            variant="danger"
            className="SpannerDiv"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );

    return (
      <div>
        {console.log(this.state.marveldata.results[0].name)}
        <Card className="bg-dark text-white">
          <Card.Img
            src={
              this.state.marveldata.results[0].thumbnail.path +
              `.` +
              this.state.marveldata.results[0].thumbnail.extension
            }
            alt="Card image"
            // className="imgOverLay"
          />
          <Card.ImgOverlay>
            <Card.Title>
              <h1>{this.state.marveldata.results[0].name}</h1>
            </Card.Title>
            <Card.Text>
              {this.state.marveldata.results[0].description}
            </Card.Text>
            <Card.Text>
              <b>Comics that the character is present in:</b>
            </Card.Text>
            <Card.Text>
              {this.state.marveldata.results[0].comics.items.map((data, i) => (
                <li>{data.name}</li>
              ))}
            </Card.Text>
            <Card.Text>
              <b>Series that the character is part of:</b>
            </Card.Text>
            <Card.Text>
              {this.state.marveldata.results[0].series.items.map((data, i) => (
                <li>{data.name}</li>
              ))}
              <Link to={"/SelectHero"}>Select another hero</Link>
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}

export default HeroPage;
