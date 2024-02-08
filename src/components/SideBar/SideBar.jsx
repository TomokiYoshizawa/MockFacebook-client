/* eslint-disable no-unused-vars */
import React from "react";
import Menus from "../Menus/Menus";
import FriendList from "../FriendList/FriendList";

import "./SideBar.scss";
function SideBar() {
  return (
    <div className="sidebar">
      <Menus />
      <hr className="sidebar__hr" />
      <FriendList />
    </div>
  );
}

export default SideBar;
