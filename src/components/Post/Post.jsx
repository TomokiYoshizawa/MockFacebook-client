/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";

import MoreVert from "@mui/icons-material/MoreVert";

// import { Users } from "../../dummyData";

import "./Post.scss";

function Post({ post }) {
  const PUBLIC_FOLDER = import.meta.env.VITE_APP_PUBLIC_FOLDER;
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`${SERVER_URL}/users/${post.userId}`);
      console.log(response);
      setUser(response.data);
    };
    getUser();
  }, []);

  const handleLike = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__top-left">
            <img
              src={user.profilePicture}
              alt="profile"
              className="post__profile-img"
            />
            <span className="post__username">{user.username}</span>
            <span className="post__date">{post.date}</span>
          </div>
          <div className="post__top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post__center">
          <span className="post__text">{post.description}</span>
          <img
            src={PUBLIC_FOLDER + post.photo}
            alt="post"
            className="post__img"
          />
        </div>
        <div className="post__bottom">
          <div className="post__bottom-left">
            <img
              src={`${PUBLIC_FOLDER}/logos/heart.png`}
              alt="like"
              className="post__icon"
              onClick={handleLike}
            />
            <span className="post__like-counter">{like} likes</span>{" "}
          </div>

          <div className="post__bottom-right">
            <span className="post__like-text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
