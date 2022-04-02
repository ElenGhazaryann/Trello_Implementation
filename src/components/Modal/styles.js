import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    modalContainer: {
      width: "400px",
      position: "absolute",
      left: "50%",
      top: "200px",
      transform: " translate(-50%, 0)",
      background: "white",
      height: "200px",
      padding: "20px",
    },
    modalSelect: {
      borderRadius: " 0.25rem",
      border: "1px solid rgba(0, 0, 0, 0.3)",
      boxShadow: "rgba(0, 0, 0, 0.1) 0 1px 3px 0",
      height: "30px",
      marginLeft: "4px",
      marginRight: "4px",
    },
    saveChanges: {
      width: "120px",
      height: "30px",
      // width: "220px",
      marginLeft: "5px",
      background: "white",
      borderRadius: " 0.25rem",
      border: "1px solid rgba(0, 0, 0, 0.3)",
      boxShadow: "rgba(0, 0, 0, 0.1) 0 1px 3px 0",
    },
    // modalBackground: {
    //   width: "100vw",
    //   height: "40vh",
    //   background: "red",

    // },
  },
  { name: "modal" }
);

export { useStyles };
