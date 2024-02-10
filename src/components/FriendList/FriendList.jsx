/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./FriendList.scss";

function FriendList({ Users }) {
  return (
    <div className="friend-list">
      <ul className="friend-list__list">
        {Users.map((user) => (
          <li key={user.id} className="friend-list__item">
            <img
              src={user.profilePicture}
              alt="profile"
              className="friend-list__profile-pic"
            />
            <span className="friend-list__name">{user.username}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FriendList;
