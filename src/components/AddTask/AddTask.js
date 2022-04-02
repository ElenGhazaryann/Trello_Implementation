import React, { useContext } from "react";
import { DispatchContext, StateContext, state } from "../../App";
import { ACTION_TYPES, defaultState } from "../../state";
import Modal from "../Modal/Modal";
import { useStyles } from "./styles";

function AddTask({ task, board }) {
  const { title, id, description, status, priority } = task;
  const styles = useStyles();
  const dispatch = useContext(DispatchContext);
  // const state = useContext(StateContext);
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
    console.log(defaultState.isModalOpen);
  };
  return (
    <>
      <div className={styles.singleTaskContainer}>
        <div className={styles.titleName} onClick={() => openModal()}>{title}</div>
        <div className={styles.buttonsContainer}>
          <span className={styles.singleBtn1}>{priority}</span>
          <button className={styles.singleBtn1}>{status}</button>

          <button className={styles.singleBtn} onClick={() => deleteTask()}>
            x
          </button>
        </div>
      </div>
    </>
  );
}

export default AddTask;
