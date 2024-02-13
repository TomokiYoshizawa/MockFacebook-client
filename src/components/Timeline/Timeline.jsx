/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { React, useState, useEffect, useContext } from "react";

import { AuthContext } from "../../state/AuthContext";
import axios from "axios";

import Share from "../Share/Share";
import Post from "../Post/Post";

import "./Timeline.scss";

function Timeline({ username }) {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getTimeLinePosts = async () => {
      const response = username
        ? await axios.get(`${SERVER_URL}/posts/profile/${username}`)
        : await axios.get(`${SERVER_URL}/posts/timeline/${user._id}`);
      setPosts(
        response.data.sort((post1, post2) => {
          return new Date(post2.createdAt) - new Date(post1.createdAt);
        })
      );
    };
    getTimeLinePosts();
  }, [username, user._id]);

  return (
    <div className="timeline">
      <div className="timeline__wrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
