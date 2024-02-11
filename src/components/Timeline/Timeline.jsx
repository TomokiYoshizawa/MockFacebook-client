import React, { useEffect } from "react";

import { useState } from "react";
import axios from "axios";

import Share from "../Share/Share";
import Post from "../Post/Post";
// import { Posts } from "../../dummyData";

import "./Timeline.scss";

function Timeline() {
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getTimeLinePosts = async () => {
      const response = await axios.get(
        `${SERVER_URL}/posts/timeline/65c3a704d8224a10a217c35a`
      );
      // console.log(response);
      setPosts(response.data);
    };
    getTimeLinePosts();
  }, []);

  return (
    <div className="timeline">
      <div className="timeline__wrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
