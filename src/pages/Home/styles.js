import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    homeContainer: {
      backgroundColor: "#f6f5ff",
      marginTop: "0px",
    },
    boardContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      // margin: "10px",
      marginTop: "30px",
      flexWrap: "wrap",
      gap: "10px",
    },
    homeForm: {
      width: "458px",
      margin: "auto",
      marginTop: "30px",
    },
    homeForm: {
      width: "458px",
      margin: "auto",
      marginTop: "30px",
    },
    addBoardBtn: {
      width: "120px",
      height: "35px",
      margin: "auto",
      cursor: "pointer",
      backgroundColor: "white",
      border: "1px solid black",
      fontSize: "1rem",
      borderRadius: " 0.25rem",
    },

    createBoardBtn: {
      height: "30px",
      width: "300px",
      marginRight: "10px",
      marginLeft: "10px",
    },
  },
  { name: "home" }
);

export { useStyles };
