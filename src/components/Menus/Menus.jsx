import Home from "@mui/icons-material/Home";

import { Link } from "react-router-dom";

import Search from "@mui/icons-material/Search";
import Notification from "@mui/icons-material/Notifications";
import MessageRounded from "@mui/icons-material/MessageRounded";
import Bookmark from "@mui/icons-material/Bookmark";
import Person from "@mui/icons-material/Person";
import Settings from "@mui/icons-material/Settings";

import "./Menus.scss";
function Menus() {
  return (
    <div className="menu">
      <div className="menu__wrapper">
        <ul className="menu__list">
          <li className="menu__item">
            <Home className="menu__icon" />
            <Link to="/" className="menu__link">
              <span className="menu__text">Home</span>
            </Link>
          </li>
          <li className="menu__item">
            <Search className="menu__icon" />
            <span className="menu__text">Search</span>
          </li>
          <li className="menu__item">
            <Notification className="menu__icon" />
            <span className="menu__text">Notifications</span>
          </li>
          <li className="menu__item">
            <MessageRounded className="menu__icon" />
            <span className="menu__text">Message</span>
          </li>
          <li className="menu__item">
            <Bookmark className="menu__icon" />
            <span className="menu__text">Bookmark</span>
          </li>
          <li className="menu__item">
            <Person className="menu__icon" />
            <Link to="/profile/username" className="menu__link">
              <span className="menu__text">Profile</span>
            </Link>
          </li>
          <li className="menu__item">
            <Settings className="menu__icon" />
            <span className="menu__text">Setting</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menus;
