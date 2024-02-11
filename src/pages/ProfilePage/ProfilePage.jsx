import React from "react";
import TopBar from "../../components/Topbar/Topbar.jsx";
import SideBar from "../../components/SideBar/SideBar";
import Timeline from "../../components/Timeline/Timeline";
import RightBar from "../../components/RightBar/RightBar";

import "./ProfilePage.scss";

function ProfilePage() {
  const PUBLIC_FOLDER = import.meta.env.VITE_APP_PUBLIC_FOLDER;

  return (
    <div className="profile">
      <TopBar />
      <div className="profile__container">
        <SideBar />
        <div className="profile__container-right">
          <div className="profile container-right--top">
            <div className="profile__box-cover">
              <img
                src={`${PUBLIC_FOLDER}/post/3.jpeg`}
                alt="cover"
                className="profile__cover-img"
              />
              <img
                src="../../../public/assets/person/Tomoki's-profile.jpg"
                alt="profile-pic"
                className="profile__user-image"
              />
            </div>
            <div className="profile__box-info">
              <h4 className="profile__info-name">Tomoki Yoshizawa</h4>
              <span className="profile__info-text">full stack developer</span>
            </div>
          </div>
          <div className="profile__container-right--bottom">
            <Timeline />
            <RightBar profile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
