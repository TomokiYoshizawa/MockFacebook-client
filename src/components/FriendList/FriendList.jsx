import React from "react";
import "./FriendList.scss";

function FriendList() {
  return (
    <div className="friend-list">
      <ul className="friend-list__list">
        <li className="friend-list__item">
          <img
            src="../../../public/assets/person/1.jpeg"
            alt="picture"
            className="friend-list__profile-pic"
          />
          <span className="friend-list__name">name</span>
        </li>
      </ul>
    </div>
  );
}

export default FriendList;
