import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    mainContainer: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: "50px",
      backgroundColor: "#eae6ff",
    },
    mainImage: {
      width: "450px",
      maxHeight: "550px",
    },
    mainImageContainer: {
      height: "445px",
    },
    mainText: {
      padding: "50px",
      margin: "10px",
    },
    mainH1: {
      marginTop: "60px",
      marginBottom: "10px",
    },
    mainInput: {
      width: "350px",
      marginRight: "21px",
      height: "auto",
      padding: "0.375rem 0.75rem",
      fontSize: "1.25rem",
      lineHeight: "1.5",
      color: "#495057",
      backgroundColor: "#fff",
      backgroundClip: "padding-box",
      border: "1px solid #ced4da",
      borderRadius: "6px",
    },
  },
  { name: "main" }
);

export { useStyles };
