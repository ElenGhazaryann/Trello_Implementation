import React, { useContext, useEffect } from "react";
import ListTasks from "../../components/ListTasks";
import "./styles.css";
import { BoardsContext, DispatchContext } from "../../App";
import { useLocation } from "react-router-dom";
import { ACTION_TYPES } from "../../state/state";

function SingleBoard() {
  const dispatch = useContext(DispatchContext);
  const boards = useContext(BoardsContext);
  const { boardTitle, boardId } = useLocation().state;



  const singleBoard = boards.filter((item) => item.boardId === boardId);
  console.log(singleBoard);

  return (
    <div>
      <h3>{boardTitle}</h3>
      <div className="allTasksContainer">
        {boards.filter((item) => {
          if (item.boardId === boardId) {
            // <ListTasks board={item} boards={boards} boardTitle={boardTitle} />;
          }
        })}

        <ListTasks boards={boards} boardTitle={boardTitle}  singl/>
      </div>
    </div>
  );
}

export default SingleBoard;

/*// const filteredByStatus = dispatch({
  //   type: ACTION_TYPES.FILTER_BOARDS_BY_STATUS,
  //   boardTitle: boardTitle,
  // });
  

  // const filteredBoard = boards.filter((item) => item.boardName === boardTitle);

  // const filteredByStatus = filteredBoard[0].tasks.reduce(
  //   (acc, currentVal) => {
  //     if (currentVal.status === "todo") {
  //       acc.todo.push(currentVal);
  //     } else if (currentVal.status === "doing") {
  //       acc.doing.push(currentVal);
  //     } else if (currentVal.status === "done") {
  //       acc.done.push(currentVal);
  //     }
  //     return acc;
  //   },
  //   {
  //     todo: [],
  //     doing: [],
  //     done: [],
  //   }
  // ); */
