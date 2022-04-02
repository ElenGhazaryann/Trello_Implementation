import React, { useRef, useState } from "react";
import { useStyles } from "./styles";
import AddTask from "../AddTask";
import { ACTION_TYPES, useCustomContext } from "../../state";

function StatusColumns({ board, columnName, status }) {
  const styles = useStyles();
  const { dispatch } = useCustomContext();

  const ref = useRef(null);
  const [selected, setSelected] = useState("");
  const addTask = () => {
    dispatch({
      type: ACTION_TYPES.ADD_TASK,
      task: ref.current.value,
      boardId: board.boardId,
      status: status,
      priority: selected,
    });
  };
  return (
    <div className={styles.columnWrapper}>
      <div className={styles.columnName}>{columnName}</div>
      {board.tasks.map(
        (item, index) =>
          item.status === status && (
            <div key={index}>
              <AddTask task={item} board={board} />
            </div>
          )
      )}
      <div className={styles.formWrapper}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTask();
            ref.current.value = "";
          }}
        >
          <input
            className={styles.addTaskInput}
            ref={ref}
            placeholder="Add new Task"
          />
          <select
            className={styles.selectBox}
            // defaultValue=""
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="" disabled>
              Priority
            </option>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
          <button className={styles.addTaskBtn}>Add task</button>
        </form>
      </div>
      
    </div>
  );
}

export default StatusColumns;
