import React from "react";
import { useStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import { useCustomContext } from "../../state";

import Logo from "../../components/Logo";
import Photo2 from "./../../assets/signin3.jpg";
import Photo3 from "./../../assets/signin2.png";

function SignIn({}) {
  const styles = useStyles();
  const navigate = useNavigate();
  // const dispatch = useContext(DispatchContext);
  const { dispatch } = useCustomContext();

  const logIn = () => {
    //todo dispatchov poxancel userName
    navigate("/home");
  };
  return (
    <div className={styles.wrapper}>
      <img className={styles.img1} src={Photo3} />

      <div>
        <div className={styles.logoCompContainer}>
          <Logo />
        </div>
        <form className={styles.loginContainer}>
          <span className={styles.loginSpan}>Log in to Trello</span>

          <input
            className={styles.loginInput}
            type="text"
            placeholder="Enter your name"
          />
          <input
            className={styles.loginInput}
            type="password"
            placeholder="Enter your password"
          />

          <button onClick={() => logIn()} className={styles.loginButton}>
            Log In
          </button>
        </form>
      </div>
      <img className={styles.img2} src={Photo2} />
    </div>
  );
}

export default SignIn;
