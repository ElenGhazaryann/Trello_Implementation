import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    boardName: {},
    allColumnsContainer: {
      display: "flex",
      marginTop: "70px",
      justifyContent: "space-around",
    },
    columnItem: {
      width: " 400px",
      minHeight: "200px",
      border: "1px solid #cccbda",
      // border: "1px solid red",
      position: "relative",
      backgroundColor: "#f6f5ff",
      borderRadius: "9px",
      boxShadow: "rgb(0 0 0 / 40%) 0 0 10px",
      flexDirection: "column",
      justifyContent: "space-between",

      
    },
  },
  { name: "singleBoard" }
);

export { useStyles };
