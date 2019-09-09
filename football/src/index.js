import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { AboutFootballPage } from "./components/aboutfootball";
import { SelectTeamPage } from "./components/select";
import { AboutMePage } from "./components/aboutme";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

//Assembling index component. This is the first component that is rendered when the app
// is launched.

function Index() {
  return (
    <div class="bg">
      <h1 class="welcome">Welcome to the Football Mashup App</h1>
      <p class="welcome">
        A dashboard to access trending news, stats, fixtures and results of your
        favourite EPL team
      </p>
      <Link to={"/SelectTeam"}>
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
    <Router>
      <Route exact path={"/"} component={Index} />
      <Route path={"/SelectTeam"} component={SelectTeamPage} />
      <Route path={"/AboutFootball"} component={AboutFootballPage} />
      <Route path={"/AboutMe"} component={AboutMePage} />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
