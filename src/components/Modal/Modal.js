import React, { useState, useRef } from "react";
import { useStyles } from "./styles";
import { ACTION_TYPES, useCustomContext } from "./../../state";
import useCloseModal from "./../../hooks/useCloseModal";

function Modal({ task, boardId }) {
  const { title, id, description, status, priority } = task;
  const styles = useStyles();
  const { dispatch } = useCustomContext();

  const ref = useRef(null);
  const [editedPriority, setEditedPriority] = useState();
  const [editedStatus, setEditedStatus] = useState();

  useCloseModal(ref, () => dispatch({ type: ACTION_TYPES.TOGGLE_MODAL }));

  const editTask = () => {
    dispatch({
      type: ACTION_TYPES.EDIT_TASK,
      boardId: boardId,
      status: editedStatus,
      priority: editedPriority,
      id: id,
    });
  };
  return (
    // <div className={styles.modalBackground}>
    <div ref={ref} className={styles.modalContainer}>
      <div>
        Task name - '{title}'<br />
        Task status - {status}
        <br />
        Task priority - {priority}
      </div>
      <select
        className={styles.modalSelect}
        // defaultValue=""
        value={editedPriority}
        onChange={(e) => setEditedPriority(e.target.value)}
      >
        <option value="" disabled>
          Change priority
        </option>
        <option>low</option>
        <option>medium</option>
        <option>high</option>
      </select>
      <select
        className={styles.modalSelect}
        // defaultValue=""
        value={editedStatus}
        onChange={(e) => setEditedStatus(e.target.value)}
      >
        <option value="" disabled>
          Change status
        </option>
        <option>todo</option>
        <option>doing</option>
        <option>done</option>
      </select>
      <button
        className={styles.saveChanges}
        onClick={() => {
          editTask();
          dispatch({ type: ACTION_TYPES.TOGGLE_MODAL });
        }}
      >
        Save changes
      </button>
    </div>
    // </div>
  );
}

export default Modal;
