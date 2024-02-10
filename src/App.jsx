import { react } from "react";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="app">
      {/* <HomePage /> */}
      {/* <ProfilePage /> */}
      <LoginPage />
    </div>
  );
}

export default App;
