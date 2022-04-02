import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    boardItem: {
      padding: "10px",
      width: "280px",
      backgroundColor: "#ffffff",
      borderRadius: "9px",
      boxShadow: "rgb(0 0 0 / 40%) 0 0 10px",
    },
    boardItemH4: {
      marginLeft: "20px",
    },
    boardItemP: {
      fontSize: "15px",
    },
    openBoardBtn: {
      height: "35px",
      margin: "auto",
      width: "120px",
      cursor: "pointer",
      backgroundColor: "transparent",
      border: "1px solid black",
      fontSize: "1rem",
      borderRadius: " 0.25rem",
    },
    openBoardBtnContainer: {
      display: "flex",
    },
    boardImg: {
      width: "90%",
      marginLeft: "13px",
    },
  },
  { name: "boards" }
);

export { useStyles };
