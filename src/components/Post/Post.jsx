/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { React, useState, useEffect, useContext } from "react";
import { AuthContext } from "../../state/AuthContext";

import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

import MoreVert from "@mui/icons-material/MoreVert";

import "./Post.scss";

function Post({ post }) {
  const PUBLIC_FOLDER = import.meta.env.VITE_SERVER_PUBLIC_FOLDER;
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        `${SERVER_URL}/users?userId=${post.userId}`
      );

      setUser(response.data);
    };
    getUser();
  }, [post.userId, SERVER_URL]);

  const handleLike = async () => {
    try {
      axios.put(`${SERVER_URL}/posts/${post._id}/like`, {
        userId: currentUser._id,
      });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__top-left">
            <Link to={`/profile/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? PUBLIC_FOLDER + `/person/${user.profilePicture}`
                    : PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt="profile"
                className="post__profile-img"
              />
            </Link>
            <span className="post__username">{user.username}</span>
            <span className="post__date">{format(post.createdAt)}</span>
          </div>
          <div className="post__top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post__center">
          <span className="post__text">{post.description}</span>
          <img
            src={PUBLIC_FOLDER + post.img}
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
