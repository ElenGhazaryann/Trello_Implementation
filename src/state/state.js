import React, { useEffect } from "react";

const ACTION_TYPES = {
  LOGIN_USER: "LOGIN_USER",
  ADD_BOARD: "ADD_BOARD",
  FILTER_BOARDS_BY_STATUS: "FILTER_BOARDS_BY_STATUS",
  DELETE_TASK: "DELETE_TASK",
  ADD_TASK: "ADD_TASK",
  TOGGLE_MODAL: "TOGGLE_MODAL",
};

// ACTION_TYPES.TOGGLE_MODAL
const defaultState = {
  userName: "Elen",
  isModalOpen: false,
  modalInfo: { title: "", status: "", description: "", priority: "" },
  boards: [
    {
      boardName: "Learn JS",
      boardId: Math.random(),
      tasks: [
        {
          title: "read info",
          id: Math.random(),
          status: "todo",
          priority: "high",
          description: "read and do all tasks from mdn",
        },
        {
          title: "read mdn",
          id: Math.random(),
          status: "todo",
          priority: "low",
          description: "read and do all tasks from mdn",
        },
        {
          title: "do all tasks",
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
          console.log(action.status);
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
        modalInfo: {
          title: action.title,
          status: action.status,
          priority: action.priority,
          description: action.description,
        },
        isModalOpen: !state.isModalOpen,
      };
    }
  }
}

export { reducer, defaultState, ACTION_TYPES };
