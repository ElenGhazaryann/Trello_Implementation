import React from "react";
import { useStyles } from "./styles";
import { useLocation } from "react-router-dom";
import { useCustomContext } from "../../state";
import Modal from "../../components/Modal";
import StatusColumns from "../../components/StatusColumns";

function SingleBoard() {
  const styles = useStyles();
  const { state } = useCustomContext();

  const { boardTitle, boardId } = useLocation().state;

  return (
    <div className={styles.singleBoardWrapper}>
      <h3 className={styles.boardName}>{boardTitle}</h3>
      {state.boards.map((item, index) => {
        if (item.boardId === boardId) {
          return (
            <div className={styles.allColumnsContainer} key={index}>
              <div className={styles.columnItem}>
                <StatusColumns board={item} columnName="Todo" status="todo" />
              </div>
              <div className={styles.columnItem}>
                <StatusColumns board={item} columnName="Doing" status="doing" />
              </div>
              <div className={styles.columnItem}>
                <StatusColumns board={item} columnName="Done" status="done" />
              </div>
              {state.isModalOpen && (
                <Modal {...state.modalInfo} />
              )}
            </div>
          );
        }
      })}
    </div>
  );
}

export default SingleBoard;
