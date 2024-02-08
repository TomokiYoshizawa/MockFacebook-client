import React from "react";
import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import FaceIcon from "@mui/icons-material/Face";
import AnalyticsIcon from "@mui/icons-material/Analytics";

import "./Share.scss";

function Share() {
  return (
    <div className="share">
      <div className="share__wrapper">
        <div className="share__top">
          <img
            src="../../../public/assets/person/Tomoki's-profile.jpg"
            alt="profile"
            className="share__profile-img"
          />
          <input
            type="text"
            className="share__input"
            placeholder="what's up?"
          />
        </div>
        <hr className="share__hr" />
        <div className="share__button-container">
          <div className="share__options">
            <div className="share__option">
              <ImageIcon className="share__icon" htmlColor="blue" />
              <span className="share__text">Picture</span>
            </div>
            <div className="share__option">
              <GifIcon className="share__icon" htmlColor="hotpink" />
              <span className="share__text">Gif</span>
            </div>
            <div className="share__option">
              <FaceIcon className="share__icon" htmlColor="green" />
              <span className="share__text">Feel</span>
            </div>
            <div className="share__option">
              <AnalyticsIcon className="share__icon" htmlColor="red" />
              <span className="share__text">Vote</span>
            </div>
          </div>
          <button className="share__button">Post</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
