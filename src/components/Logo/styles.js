import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    logoContainer: {
      display: "flex",
      justifyContent: "space-around",
      width: "150px",
    },
    logoSpan: {
      fontWeight: "bolder",
      fontSize: "40px",
      marginTop: 0,
    },
    trelloLogo: {
      width: "30px",
      height: "35px",
      marginTop: "12px",
    },
  },
  { name: "logo" }
);

export { useStyles };
