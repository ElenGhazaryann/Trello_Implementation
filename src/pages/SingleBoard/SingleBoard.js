import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import "./styles.css";

import StatusColumns from "../../components/StatusColumns";
import { BoardsContext, DispatchContext } from "../../App";

function SingleBoard() {
  // const dispatch = useContext(DispatchContext);
  const boards = useContext(BoardsContext);
  const { boardTitle, boardId } = useLocation().state;

  const board = boards.filter((item) => item.boardId === boardId);
  return (
    <div>
      <h3>{boardTitle}</h3>
      {boards.map((item, index) => {
        if (item.boardId === boardId) {
          return (
            <div className="allColumnsContainer" key={index}>
              <div className="columnItem">
                <StatusColumns board={item} columnName="Todo" status="todo" />
              </div>
              <div className="columnItem">
                <StatusColumns board={item} columnName="Doing" status="doing" />
              </div>
              <div className="columnItem">
                <StatusColumns board={item} columnName="Done" status="done" />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default SingleBoard;
