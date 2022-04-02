import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    loginContainer: {
      margin: "auto",
      width: "400px",
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#ffffff",
      borderRadius: "3px",
      padding: "25px 40px",
      boxShadow: "rgb(0 0 0 / 10%) 0 0 10px",
    },
    loginInput: {
      height: "35px",
      margin: "12px",
    },
    loginSpan: {
      margin: "auto",
      marginBottom: "20px",
      color: "#4d4d4d",
      fontWeight: "bold",
    },
    loginButton: {
      width: "200px",
      height: "35px",
      margin: "auto",
      marginTop: "20px",
      cursor: "pointer",
      backgroundColor: "transparent",
      border: "1px solid black",
      fontSize: "1rem",
      borderRadius: " 0.25rem",
    },
    logoCompContainer: {
      margin: "auto",
      width: "130px",
      marginTop: "60px",
      marginBottom: "40px",
    },
    img1: {
      width: "350px",
      height: "340px",
      marginTop: "230px",
      marginLeft: "30px",
    },
    img2: {
      width: "350px",
      height: "340px",
      marginTop: "230px",
      marginRight: "30px",
    },
    wrapper: {
      display: "flex",
      justifyContent: "space-between",
    },
  },
  { name: "signIn" }
);
export { useStyles };
