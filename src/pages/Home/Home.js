import React, { useContext, useRef } from "react";
import Boards from "../../components/Boards";
import { DispatchContext, BoardsContext } from "../../App";
import { ACTION_TYPES } from "../../state";
import { useStyles } from "./styles";

function Home() {
  const styles = useStyles();
  const boards = useContext(BoardsContext);
  const dispatch = useContext(DispatchContext);
  const ref = useRef("");
  return (
    <div className={styles.homeContainer}>
      <form
        className={styles.homeForm}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: ACTION_TYPES.ADD_BOARD,
            boardName: ref.current.value,
            boardId: Math.random(),
          });
          ref.current.value = "";
        }}
      >
        <input
          className={styles.createBoardBtn}
          ref={ref}
          placeholder="Create board"
          onChange={(e) => {
            ref.current.value = e.target.value;
          }}
        />
        <button className={styles.addBoardBtn}>Add board</button>
      </form>
      <div className={styles.boardContainer}>
        {boards.map((item, index) => (
          <Boards key={index} title={item.boardName} boardId={item.boardId} />
        ))}
      </div>
    </div>
  );
}

export default Home;
