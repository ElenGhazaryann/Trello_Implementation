import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "./styless.css";
import mainBck from "../../assets/mainBck.png";

function Main() {
  return (
    <div className="mainContainer">
      <div className="mainText">
        <h1>Trello helps teams move work forward.</h1>
        <p>
          Collaborate, manage projects, and reach new productivity peaks. From
          high rises to the home office, the way your team works is
          unique—accomplish it all with Trello.
        </p>
        <div>
          <form>
            <input className="mainInput" placeholder="Email" type="text" />
            <Button className="inputButton" variant="contained">Sign yo-it's free!</Button>
          </form>
        </div>
      </div>

      <div className="mainImageContainer">
        <img className="mainImage" src={mainBck} />
      </div>
    </div>
  );
}

export default Main;
