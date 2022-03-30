import React from "react";
import AddTasks from "../AddTasks/AddTasks";
import "./styles.css";

function ListTasks({ boards, board }) {
  console.log(board);
  return (
    <>
      <div className="taskColumn">
        <button>Add task</button>
      </div>
    </>
  );
}

export default ListTasks;

/*
function ListTasks({ heading, tasks }) {
  return (
    <div className="taskColumn">
      <p> {heading}</p>
      {tasks.map((item, index) => (
        <div key={index}>
          <AddTasks {...item} />
        </div>
      ))}
      <button>Add task</button>
    </div>
  );
} */

/*function ListTasks({ filteredByStatus }) {
  console.log(filteredByStatus);
  return (
    <>
      <div className="taskColumn">
        <p>Todo</p>
        {filteredByStatus.todo.map((item, index) => (
          <AddTasks key={index} {...item} />
        ))}
        <button>Add task</button>
      </div>
      <div className="taskColumn">
        <p>Doing</p>
        {filteredByStatus.doing.map((item, index) => (
          <AddTasks key={index} {...item} />
        ))}
        <button>Add task</button>
      </div>
      <div className="taskColumn">
        <p>Done</p>
        {filteredByStatus.done.map((item, index) => (
          <AddTasks key={index} {...item} />
        ))}
        <button>Add task</button>
      </div>
    </>
  );
} */
