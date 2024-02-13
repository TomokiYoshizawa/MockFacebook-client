/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import TopBar from "../../components/Topbar/Topbar.jsx";
import SideBar from "../../components/SideBar/SideBar";
import Timeline from "../../components/Timeline/Timeline";
import RightBar from "../../components/RightBar/RightBar";

import "./ProfilePage.scss";

function ProfilePage() {
  const PUBLIC_FOLDER = import.meta.env.VITE_SERVER_PUBLIC_FOLDER;
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const [user, setUser] = useState({});
  const username = useParams().username;
  console.log(username);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        `${SERVER_URL}/users?username=${username}`
      );
      // console.log(response);
      setUser(response.data);
    };
    getUser();
  }, []);

  return (
    <div className="profile">
      <TopBar />
      <div className="profile__container">
        <SideBar />
        <div className="profile__container-right">
          <div className="profile container-right--top">
            <div className="profile__box-cover">
              <img
                src={
                  user.coverPicture
                    ? PUBLIC_FOLDER + `/post/${user.coverPicture}`
                    : PUBLIC_FOLDER + "/post/defaultCoverPicture.jpeg"
                }
                alt="cover"
                className="profile__cover-img"
              />
              <img
                src={
                  user.profilePicture
                    ? PUBLIC_FOLDER + `/person/${user.profilePicture}`
                    : PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt="profile-pic"
                className="profile__user-image"
              />
            </div>
            <div className="profile__box-info">
              <h4 className="profile__info-name">{user.username}</h4>
              <span className="profile__info-text">{user.description}</span>
            </div>
          </div>
          <div className="profile__container-right--bottom">
            <Timeline username={username} />
            {/* <RightBar user={user} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
