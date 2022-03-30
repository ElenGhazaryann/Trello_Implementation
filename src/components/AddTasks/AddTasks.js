import React from "react";
import "./styles.css";
function AddTasks({ title, id, description, status, priority }) {
  // console.log(title, id, description, status, priority);
  return (
    <div className="singleTaskContainer">
      {title}
      <div className="buttonsContainer">
        <button>{priority}</button>
        <button>Status</button>
        <button>x</button>
      </div>
    </div>
  );
}

export default AddTasks;
