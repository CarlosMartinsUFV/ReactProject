import React from "react";
import Login from "./Components/Login/Login";
import Home from "./Home.jsx";
import Detalhes from "./Detalhes.jsx";

import { UserStorage } from "./UserContext.jsx";
import ProtectedRoute from "./Components/Helper/ProtectRoute";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./Components/Users/User.jsx";

const App = () => {
  return (
    <>
      {" "}
      <div>
        <BrowserRouter>
          <UserStorage>
            <Routes>
              <Route path="/*" element={<Login />}></Route>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="/detalhes"
                element={
                  <ProtectedRoute>
                    <Detalhes />
                  </ProtectedRoute>
                }
              ></Route>

              <Route path="/conta" element={<User />}></Route>
            </Routes>
          </UserStorage>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
