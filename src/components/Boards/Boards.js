import React, { useContext } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { BoardsContext, DispatchContext } from "./../../App";
import { ACTION_TYPES } from "../../state/state";

function Boards({ title, imgUrl, boardId }) {
  const dispatch = useContext(DispatchContext);
  const boards = useContext(BoardsContext);
  const navigate = useNavigate();

  return (
    <div className="boardItem">
      <img src={imgUrl} />
      <h4>{title}</h4>
      <p>
        This board contains tasks about <b>{title}</b>. You can add tasks,
        delete or change them.
      </p>
      <button
        onClick={() => {
          // console.log(ref.current);
          navigate("/board-item", {
            state: { boardTitle: title, board: boards, boardId: boardId },
          });
        }}
      >
        Open board
      </button>
    </div>
  );
}

export default Boards;
