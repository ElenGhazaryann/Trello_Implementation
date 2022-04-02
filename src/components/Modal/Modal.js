import React, { useContext, useState, useRef } from "react";
import { DispatchContext } from "../../App";
import { ACTION_TYPES } from "./../../state";
import useCloseModal from "./../../hooks/useCloseModal";
import { useStyles } from "./styles";

function Modal({ task, boardId }) {
  const styles = useStyles();
  const { title, id, description, status, priority } = task;
  const ref = useRef(null);
  const [editedPriority, setEditedPriority] = useState();
  const [editedStatus, setEditedStatus] = useState();
  const dispatch = useContext(DispatchContext);
// window.style.background =

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
    <div ref={ref} className={styles.modalContainer}>
      <div>
        {title},{status}, {priority}
      </div>
      <select
        defaultValue=""
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
        defaultValue=""
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
        onClick={() => {
          editTask();
          dispatch({ type: ACTION_TYPES.TOGGLE_MODAL });
        }}
      >
        Save changes
      </button>
    </div>
  );
}

export default Modal;
