import React, { useEffect } from "react";
import { useStyles } from "./styles";
import { ACTION_TYPES, useCustomContext } from "../../state";
import Modal from "../Modal";

function AddTask({ task, board }) {
  const { title, id, description, status, priority } = task;
  const styles = useStyles();
  const { state, dispatch } = useCustomContext();

  const deleteTask = () => {
    dispatch({
      type: ACTION_TYPES.DELETE_TASK,
      id: id,
      boardId: board.boardId,
    });
  };

  const openModal = () => {
    dispatch({
      type: ACTION_TYPES.TOGGLE_MODAL,
      task: task,
      boardId: board.boardId,
    });
  };

  return (
    <div className={styles.red}>
      <div className={styles.singleTaskContainer}>
        <div className={styles.titleName} onClick={() => openModal()}>
          {title}
        </div>
        <div className={styles.buttonsContainer}>
          <span className={styles.singleBtn1}>{priority}</span>
          <button className={styles.singleBtn1}>{status}</button>

          <button className={styles.singleBtn} onClick={() => deleteTask()}>
            x
          </button>
        </div>
      </div>
      {/* {state.isModalOpen && <Modal {...task} boardId={board.boardId} />} */}
      </div>
  );
}

export default AddTask;
