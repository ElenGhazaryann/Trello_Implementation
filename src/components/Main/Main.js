import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useStyles } from "./styles";

// import "./styless.css";
import mainBck from "../../assets/mainBck.png";

function Main() {
  const styles = useStyles();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainText}>
        <h1 className={styles.mainH1}>Trello helps teams move work forward.</h1>
        <p>
          Collaborate, manage projects, and reach new productivity peaks. From
          high rises to the home office, the way your team works is
          unique—accomplish it all with Trello.
        </p>
        <div>
          <form>
            <input
              className={styles.mainInput}
              placeholder="Email"
              type="text"
            />
            <Button className={styles.inputButton} variant="contained">
              Sign yo-it's free!
            </Button>
          </form>
        </div>
      </div>
      <div className={styles.mainImageContainer}>
        <img className={styles.mainImage} src={mainBck} />
      </div>
    </div>
  );
}

export default Main;
