import React, { useReducer, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./pages/SignIn";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import SingleBoard from "./pages/SingleBoard";
import { reducer, defaultState } from "./state/state";
import Modal from "./components/Modal/Modal";

export const DispatchContext = React.createContext();
export const BoardsContext = React.createContext();
export const StateContext = React.createContext();
function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <div className="App">
      <StateContext.Provider value={state}>
        <BoardsContext.Provider value={state.boards}>
          <DispatchContext.Provider value={dispatch}>
            <Routes>
              <Route index element={<Welcome />} />
              <Route path="sign-in" element={<SignIn />} />
              <Route path="/home" element={<Home />} />
              <Route path="board-item" element={<SingleBoard />} />
            </Routes>
          </DispatchContext.Provider>
        </BoardsContext.Provider>
      </StateContext.Provider>
      {state.isModalOpen && <Modal {...state.modalInfo} />}
    </div>
  );
}

export default App;
