import React from "react";
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
            <input
              type="text"
              className="topbar__search-input"
              placeholder="what are you looking for"
            />
          </div>
        </div>
        <div className="topbar__box-right">
          <div className="topbar__icon-item">1</div>
          <div className="topbar__icon-item">2</div>
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
