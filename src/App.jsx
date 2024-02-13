/* eslint-disable no-unused-vars */
import { react, useContext } from "react";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { AuthContextProvider } from "./state/AuthContext";
import AuthReducer from "./state/AuthReducer";
import { AuthContext } from "./state/AuthContext";

import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      {/* //   <AuthContextProvider> */}
      <Routes>
        {/* <div className="app"> */}
        <Route path="/" element={user ? <HomePage /> : <RegisterPage />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <RegisterPage />}
        />
        <Route path="/profile/:username" element={<ProfilePage />} />
        {/* </div> */}
      </Routes>
      {/* //   </AuthContextProvider> */}
    </BrowserRouter>
  );
}

export default App;
