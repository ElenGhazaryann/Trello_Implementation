import React from "react";
import logo from "../../assets/logo.svg";
import { useStyles } from "./styles";

function Logo() {
  const styles = useStyles();

  return (
    <div className={styles.logoContainer}>
      <img className={styles.trelloLogo} src={logo} />
      <span className={styles.logoSpan}>Trello</span>
    </div>
  );
}

export default Logo;
