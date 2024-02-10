import { react } from "react";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="app">
      {/* <HomePage /> */}
      {/* <ProfilePage /> */}
      {/* <LoginPage /> */}
      <RegisterPage />
    </div>
  );
}

export default App;
