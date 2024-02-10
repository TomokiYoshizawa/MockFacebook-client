/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Users } from "../../dummyData";

import "./Online.scss";

function Online({ Users }) {
  return (
    <div className="online">
      <ul className="online__list">
        {Users.map((user) => (
          <li key={user.id} className="online__item">
            <img
              src={user.profilePicture}
              alt="picture"
              className="online__profile-pic"
            />
            <span className="online__name">{user.username}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Online;
