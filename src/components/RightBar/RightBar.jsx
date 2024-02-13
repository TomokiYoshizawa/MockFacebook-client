/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Users } from "../../dummyData";
import Online from "../Online/Online.jsx";

import "./RightBar.scss";

function RightBar({ user }) {
  const PUBLIC_FOLDER = import.meta.env.VITE_SERVER_PUBLIC_FOLDER;

  const HomeRightbar = () => {
    return (
      <div className="rightbar">
        <div className="rightbar__wrapper">
          <div className="rightbar__event-container">
            <img
              src={`${PUBLIC_FOLDER}/logos/star.png`}
              alt="img"
              className="rightbar__event-logo"
            />
            <span className="rightbar__event-text">
              <b>Exclusive event for followers</b>
            </span>
          </div>
          <img
            src={`${PUBLIC_FOLDER}/ad.jpeg`}
            alt="img"
            className="rightbar__event-img"
          />
          <h4 className="rightbar__title">Friends</h4>
        </div>
        <Online Users={Users} />
        <p className="rightbar__promotion-title">Promotion</p>
        <img
          src={`${PUBLIC_FOLDER}/promotion/promotion1.jpeg`}
          alt="img"
          className="rightbar__promotion-img"
        />
        <p className="rightbar__promotion-text">Shopping</p>
        <img
          src={`${PUBLIC_FOLDER}/promotion/promotion2.jpeg`}
          alt="img"
          className="rightbar__promotion-img"
        />
        <p className="rightbar__promotion-text">Automobile</p>
        <img
          src={`${PUBLIC_FOLDER}/promotion/promotion3.jpeg`}
          alt="img"
          className="rightbar__promotion-img"
        />
        <p className="rightbar__promotion-text">Test 3</p>
      </div>
    );
  };

  const ProfileRightbar = () => {
    return (
      <div>
        <h4 className="rightbar__title">User Information</h4>
        <div className="rightbar__box-info">
          <div className="rightbar__info-item">
            <span className="rightbar__info-key">Location</span>
            <span className="rightbar__info-key">Vancouver</span>
          </div>
          <h4 className="rightbar__title">your followers</h4>
          <div className="rightbar__box-followings">
            <div className="rightbar__following">
              <img
                src="../../../public/assets/person/1.jpeg"
                alt="user-img"
                className="rightbar__following-img"
              />
              <span className="rightbar__following-name">Shin Code</span>
            </div>
            <div className="rightbar__following">
              <img
                src="../../../public/assets/person/2.jpeg"
                alt="user-img"
                className="rightbar__following-img"
              />
              <span className="rightbar__following-name">Kevin</span>
            </div>
            <div className="rightbar__following">
              <img
                src="../../../public/assets/person/3.jpeg"
                alt="user-img"
                className="rightbar__following-img"
              />
              <span className="rightbar__following-name">John</span>
            </div>
            <div className="rightbar__following">
              <img
                src="../../../public/assets/person/4.jpeg"
                alt="user-img"
                className="rightbar__following-img"
              />
              <span className="rightbar__following-name">Rachel</span>
            </div>
            <div className="rightbar__following">
              <img
                src="../../../public/assets/person/5.jpeg"
                alt="user-img"
                className="rightbar__following-img"
              />
              <span className="rightbar__following-name">Nina</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return <>{user ? <ProfileRightbar /> : <HomeRightbar />}</>;
}

export default RightBar;
