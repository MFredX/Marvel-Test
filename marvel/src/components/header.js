// Import libraries.
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./button.js";

export function MainHeader() {
  return (
    <header id="mainHeader">
      <Link to={"/"}>
        <div id="headerLogo">QLDCDB</div>
      </Link>
      <div id="headerButtons">
        <Link to={"/login"}>
          <Button id="loginButton" label="Sign in" />
        </Link>
        <Link to={"/register"}>
          <Button id="registerButton" label="Sign up" />
        </Link>
      </div>
    </header>
  );
}
