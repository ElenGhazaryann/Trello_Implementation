import { positions } from "@mui/system";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    addTaskBtn: {
      width: "80px",
      height: "27px",
      margin: "auto",
      cursor: "pointer",
      backgroundColor: "white",
      // border: "1px solid black",
      fontSize: "1rem",
      borderRadius: " 0.25rem",
      border: "1px solid rgba(0, 0, 0, 0.3)",
      boxShadow: "rgba(0, 0, 0, 0.1) 0 1px 3px 0",
    },
    columnName: {
      width: "55px",
      height: "40px",
      marginLeft: "10%",

      fontSize: "26px",
      fontWeight: "400",
    },
    addTaskInput: {
      height: "30px",
      width: "220px",
      marginLeft: "5px",
      borderRadius: " 0.25rem",
      border: "1px solid rgba(0, 0, 0, 0.3)",
      boxShadow: "rgba(0, 0, 0, 0.1) 0 1px 3px 0",
    },
    selectBox: {
      borderRadius: " 0.25rem",
      border: "1px solid rgba(0, 0, 0, 0.3)",
      boxShadow: "rgba(0, 0, 0, 0.1) 0 1px 3px 0",

      width: "70px",
      height: "30px",
      marginLeft: "4px",
      marginRight: "4px",
    },
  },
  { name: "statusColumns" }
);

export { useStyles };
