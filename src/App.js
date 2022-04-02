import React from "react";
import { Route, Routes } from "react-router-dom";
import { ContextProvider } from "./state";

import "./App.css";
import SignIn from "./pages/SignIn";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import SingleBoard from "./pages/SingleBoard";

function App() {
  
  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="board-item" element={<SingleBoard />} />
        </Routes>
        {/* {state.isModalOpen && <Modal {...state.modalInfo} />} */}
      </ContextProvider>
    </div>
  );
}

export default App;
