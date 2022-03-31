import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "./styless.css";
import { useNavigate } from "react-router-dom";
import { DispatchContext } from "../../App";
import Logo from "../../components/Logo";
import Photo2 from "./../../assets/signin3.jpg";
import Photo3 from "./../../assets/signin2.png";

function SignIn({}) {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);

  const logIn = () => {
    //todo dispatchov poxancel userName
    navigate("/home");
  };
  return (
    <div className="wrapper">
      <img className="img1" src={Photo3} />

      <div>
        <div className="logoCompContainer">
          <Logo />
        </div>
        <form className="loginContainer">
          <span>Log in to Trello</span>

          <input
            className="loginInput"
            type="text"
            placeholder="Enter your name"
          />
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password"
          />
          
          <button onClick={() => logIn()} className="loginButton">
            Log In
          </button>
        </form>
      </div>
      <img className="img2" src={Photo2} />
    </div>
  );
}

export default SignIn;
