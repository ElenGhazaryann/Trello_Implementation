import React, { useContext } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { BoardsContext, DispatchContext } from "./../../App";
import { ACTION_TYPES } from "../../state/state";
import boardImg from "./../../assets/boardImg.webp";

function Boards({ title, boardId }) {
  // const dispatch = useContext(DispatchContext);
  // const boards = useContext(BoardsContext);
  const navigate = useNavigate();
  return (
    <div className="boardItem">
      <img className="boardImg" src={boardImg} />
      <h4>{title}</h4>
      <p>
        This board contains tasks about <b>{title}</b>. You can add tasks,
        delete or change them.
      </p>
      <div className="openBoardBtn">
        <button
          className="openBoardBtn"
          onClick={() => {
            navigate("/board-item", {
              state: { boardTitle: title, boardId: boardId },
            });
          }}
        >
          Open board
        </button>
      </div>
    </div>
  );
}

export default Boards;
