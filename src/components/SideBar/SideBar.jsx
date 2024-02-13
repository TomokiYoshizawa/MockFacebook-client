/* eslint-disable no-unused-vars */
import { React, useState, useEffect, useContext } from "react";

import axios from "axios";

import Menus from "../Menus/Menus";
import FriendList from "../FriendList/FriendList";

import { Users } from "../../dummyData";

import "./SideBar.scss";
function SideBar() {
  // const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  // const [Users, setUsers] = useState([]);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     const response = await axios.get(`${SERVER_URL}/users`);
  //     console.log(response.data);
  //     setUsers(response.data);
  //   };

  //   getUsers();
  // }, []);

  return (
    <div className="sidebar">
      <Menus />
      <hr className="sidebar__hr" />
      <FriendList Users={Users} />
    </div>
  );
}

export default SideBar;
