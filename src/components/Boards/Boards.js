import React, { useContext } from "react";
// import "./styles.css";
import { useNavigate } from "react-router-dom";
import { BoardsContext, DispatchContext } from "./../../App";
import { ACTION_TYPES } from "../../state";
import boardImg from "./../../assets/boardImg.webp";
import { useStyles } from "./styles";

function Boards({ title, boardId }) {
  const styles = useStyles();
  // const dispatch = useContext(DispatchContext);
  // const boards = useContext(BoardsContext);
  const navigate = useNavigate();
  return (
    <div className={styles.boardItem}>
      <img className={styles.boardImg} src={boardImg} />
      <h4 className={styles.boardItemH4}>{title}</h4>
      <p className={styles.boardItemP}>
        This board contains tasks about <b>{title}</b>. You can add tasks,
        delete or change them.
      </p>
      <div className={styles.openBoardBtnContainer}>
        <button
          className={styles.openBoardBtn}
          onClick={() => {
            navigate("/board-item", {
              state: { boardTitle: title, boardId: boardId },
            });
          }}
        >
          Open board
        </button>
      </div>
    </div>
  );
}

export default Boards;
