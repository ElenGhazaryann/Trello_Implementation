import React from "react";
import { useStyles } from "./styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../Logo";

function Header() {
  const styles = useStyles();
  const navigate = useNavigate();

  return (
    <nav className={styles.headerContainer}>
      <Logo />
      <div className={styles.login}>
        <Stack spacing={2} direction="row">
          <Button onClick={() => navigate("sign-in")} variant="text">
            Log in
          </Button>
          <Button variant="contained">Sign up</Button>
        </Stack>
      </div>
    </nav>
  );
}

export default Header;
