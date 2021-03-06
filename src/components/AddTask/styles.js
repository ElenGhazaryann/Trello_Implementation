import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    red: {
      position: "relative",
    },
    singleTaskContainer: {
      background: "rgba(181, 178, 203, 0.4)",
      display: "flex",
      paddingLeft: "7px",
      paddingRight: "7px",
      justifyContent: "space-between",
      border: "1px solid rgba(0, 0, 0, 0.1)",
      borderRadius: ".25rem",
      boxShadow: "rgba(0, 0, 0, 0.1) 0 1px 3px 0",
      margin: "5px",
    },
    titleName: {
      cursor: "pointer",
    },
    buttonsContainer: {
      width: "150px",
      display: "flex",
      justifyContent: "space-between",
    },
    singleBtn: {
      height: "25px",
      marginTop: "2px",
      backgroundColor: "#FFFFFF",
      border: "1px solid rgba(0, 0, 0, 0.1)",
      borderRadius: ".25rem",
      boxShadow: "rgba(0, 0, 0, 0.02) 0 1px 3px 0",
      color: "rgba(0, 0, 0, 0.85)",
      cursor: "pointer",
      display: "inline-flex",
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: " 1.25",
      margin: "0",
    },
    singleBtn1: {
      width: "58px",
      height: "25px",
      marginTop: "2px",
      backgroundColor: "#FFFFFF",
      border: "1px solid rgba(0, 0, 0, 0.1)",
      borderRadius: ".25rem",
      boxShadow: "rgba(0, 0, 0, 0.02) 0 1px 3px 0",
      color: "rgba(0, 0, 0, 0.85)",
      display: "flex",
      justifyContent: "center",
      fontSize: "16px",
      lineHeight: " 1.25",
      margin: "auto",
    },
  },
  { name: "addTask" }
);

export { useStyles };

/* 


<!-- HTML !-->
<button class="button-6" role="button">Button 6</button>

.button-6 {
  align-items: center;
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
}

.button-6:hover,
.button-6:focus {
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
  color: rgba(0, 0, 0, 0.65);
}

.button-6:hover {
  transform: translateY(-1px);
}

.button-6:active {
  background-color: #F0F0F1;
  border-color: rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
  color: rgba(0, 0, 0, 0.65);
  transform: translateY(0);
} */
