/* eslint-disable no-unused-vars */

import { React, useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../../state/AuthContext";

import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Topbar.scss";

function Topbar() {
  const { user } = useContext(AuthContext);
  const PUBLIC_FOLDER = import.meta.env.VITE_SERVER_PUBLIC_FOLDER;
  return (
    <div className="topbar">
      <div className="topbar__container">
        <div className="topbar__box-left">
          <Link to="/" className="topbar__link">
            <span className="topbar__logo">MockFacebook</span>
          </Link>
        </div>
        <div className="topbar__box-center">
          <div className="topbar__box-searchbar">
            <SearchIcon className="topbar__search-icon " />
            <input
              type="text"
              className="topbar__search-input"
              placeholder="what are you looking for"
            />
          </div>
        </div>
        <div className="topbar__box-right">
          <div className="topbar__icon-box">
            <div className="topbar__icon-item">
              <ChatIcon className="topbar__icon-logo" />
              <span className="topbar__icon-badge">1</span>
            </div>
            <div className="topbar__icon-item">
              <NotificationsIcon className="topbar__icon-logo" />
              <span className="topbar__icon-badge">2</span>
            </div>
            <Link to={`/profile/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? PUBLIC_FOLDER + `/person/${user.profilePicture}`
                    : PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt="profile-image"
                className="topbar__profile-image"
              />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
