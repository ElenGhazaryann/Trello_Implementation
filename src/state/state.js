import React, { useEffect } from "react";

const ACTION_TYPES = {
  LOGIN_USER: "LOGIN_USER",
  ADD_BOARD: "ADD_BOARD",
  FILTER_BOARDS_BY_STATUS: "FILTER_BOARDS_BY_STATUS",
  DELETE_TASK: "DELETE_TASK",
  ADD_TASK: "ADD_TASK",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  EDIT_TASK: "EDIT_TASK",
};

// ACTION_TYPES.EDIT_TASK
const defaultState = {
  userName: "Elen",
  isModalOpen: false,
  // modalInfo: { title: "", status: "", description: "", priority: "" },
  modalInfo: { task: "", boardId: "" },
  boards: [
    {
      boardName: "Learn JS",
      boardId: Math.random(),
      tasks: [
        {
          title: "Read info",
          id: Math.random(),
          status: "todo",
          priority: "high",
          description: "read and do all tasks from mdn",
        },
        {
          title: "Read mdn",
          id: Math.random(),
          status: "todo",
          priority: "low",
          description: "read and do all tasks from mdn",
        },
        {
          title: "Do all tasks",
          id: Math.random(),
          status: "doing",
          priority: "low",
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
    case ACTION_TYPES.DELETE_TASK: {
      const newBoards = state.boards.map((item) => {
        if (item.boardId === action.boardId) {
          return {
            ...item,
            tasks: item.tasks.filter((item) => item.id !== action.id),
          };
        } else {
          return item;
        }
      });
      return { ...state, boards: newBoards };
    }
    case ACTION_TYPES.ADD_TASK: {
      const newBoards = state.boards.map((item) => {
        if (item.boardId === action.boardId) {
          return {
            ...item,
            tasks: [
              ...item.tasks,
              {
                title: action.task,
                id: Math.random(),
                status: action.status,
                priority: action.priority,
                description: "chka",
              },
            ],
          };
        } else {
          return item;
        }
      });
      return { ...state, boards: newBoards };
    }
    case ACTION_TYPES.TOGGLE_MODAL: {
      return {
        ...state,
        modalInfo: { task: action.task, boardId: action.boardId },
        isModalOpen: !state.isModalOpen,
      };
    }
    case ACTION_TYPES.EDIT_TASK: {
      const newBoards = state.boards.map((item) => {
        if (item.boardId === action.boardId) {
          item.tasks.map((item) => {
            if (item.id === action.id) {
              console.log(item);
              // return {
              //   priority: action.priority,
              //   status: action.status,
              //   ...item,
              // };
              item.priority = action.priority;
              item.status = action.status;
              return item;
            } else {
              return item;
            }
          });
        } else {
          return item;
        }
        return item;
      });
      console.log(newBoards);
      return { ...state, boards: newBoards };
    }
  }
}

export { reducer, defaultState, ACTION_TYPES };
