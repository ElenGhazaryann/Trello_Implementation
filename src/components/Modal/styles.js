import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    modalContainer: {
      border: "1px solid blue",
      position: "absolute",
      // marginLeft: "50%",
      left: "50%",
      top: '200px',
      transform: " translate(-50%, 0)",
    },
  },
  { name: "modal" }
);

export { useStyles };
