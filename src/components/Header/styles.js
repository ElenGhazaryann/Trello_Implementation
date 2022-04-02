import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    headerContainer: {
      margin: "auto",
      padding: "20px",
      paddingTop: "16px",
      display: "flex",
      justifyContent: "space-between",
      backgroundColor: "#eae6ff",
    },
    login: {
      marginTop: "2px",
      display: "flex",
    },
  },
  { name: "header" }
);

export { useStyles };
