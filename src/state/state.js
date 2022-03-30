import React from "react";

const ACTION_TYPES = {
  LOGIN_USER: "LOGIN_USER",
  ADD_BOARD: "ADD_BOARD",
  FILTER_BOARDS_BY_STATUS: "FILTER_BOARDS_BY_STATUS",
};
const defaultState = {
  userName: "Elen",
  boards: [
    {
      boardName: "Learn JS",
      boardId: Math.random(),
      tasks: [
        {
          title: "read info",
          id: Math.random(),
          status: "todo", // ["todo", "doing", "done"],
          priority: "high", //[("high", "low", "medium")],
          description: "read and do all tasks from mdn",
        },
        {
          title: "read mdn",
          id: Math.random(),
          status: "todo", // ["todo", "doing", "done"],
          priority: "low", //[("high", "low", "medium")],
          description: "read and do all tasks from mdn",
        },
        {
          title: "do all tasks",
          id: Math.random(),
          status: "doing", //["todo", "doing", "done"],
          priority: "low", // ["high", "low", "medium"],
          description: "do all tasks and write readme ",
        },
      ],
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.LOGIN_USER: {
      console.log("i will never work");
    }
    case ACTION_TYPES.ADD_BOARD: {
      return {
        ...state,
        boards: [
          ...state.boards,
          { boardName: action.boardName, boardId: action.boardId, tasks: [] },
        ],
      };
    }
  }
}

export { reducer, defaultState, ACTION_TYPES };

/*export const reducedStates = (boardTitle, boards) => {
  return boards
    .filter((item) => item.boardName === boardTitle)[0]
    .tasks.reduce(
      (acc, currentVal) => {
        if (currentVal.status === "todo") {
          acc.todo.push(currentVal);
        } else if (currentVal.status === "doing") {
          acc.doing.push(currentVal);
        } else if (currentVal.status === "done") {
          acc.done.push(currentVal);
        }
        return acc;
      },
      {
        todo: [],
        doing: [],
        done: [],
      }
    );
}; */
