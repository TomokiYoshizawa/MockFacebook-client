import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Topbar.scss";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar__container">
        <div className="topbar__box-left">
          <span className="topbar__logo">MockFacebook</span>
        </div>
        <div className="topbar__box-center">
          <div className="topbar__searchbar">
            <SearchIcon className="topbar__search-icon " />
            <input
              type="text"
              className="topbar__search-input"
              placeholder="what are you looking for"
            />
          </div>
        </div>
        <div className="topbar__box-right">
          <div className="topbar__icon-item">
            <ChatIcon className="topbar__icon-logo" />
            <span className="topbar__icon-number">1</span>
          </div>
          <div className="topbar__icon-item">
            <NotificationsIcon className="topbar__icon-logo" />
            <span className="topbar__icon-number">2 test</span>
          </div>
        </div>
        <img
          src="../../../public/assets/person/Tomoki's-profile.jpg"
          alt="profile-image"
          className="topbar__profile-image"
        />
      </div>
    </div>
  );
}

export default Topbar;
