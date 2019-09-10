import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { browserHistory } from "react-router";
import { Link } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { AboutMarvel } from "./components/aboutMarvel";
import { SelectHeroPage } from "./components/select";
import HeroPage from "./components/hero";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

//Assembling index component. This is the first component that is rendered when the app
// is launched.

function Index() {
  return (
    <div className="bg">
      <h1 className="welcome">Welcome to the Marvel Superhero App</h1>
      <p className="welcome">
        An app to access information on your favourite superheroes from the
        Marvel Comic Universe
      </p>
      <Link to={"/SelectHero"}>
        <Button id="continue" label="Begin" size="lg">
          Click to Begin
        </Button>
      </Link>
    </div>
  );
}

// This is the main app. Render, show or hide pages in here.
function App() {
  return (
    <Router history={browserHistory}>
      <Route exact path={"/"} component={Index} />
      <Route path={"/SelectHero"} component={SelectHeroPage} />
      <Route path={"/AboutMarvel"} component={AboutMarvel} />
      <Route path={"/Hero"} component={HeroPage} />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
