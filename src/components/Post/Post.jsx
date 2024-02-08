import React from "react";

import MoreVert from "@mui/icons-material/MoreVert";

import "./Post.scss";

function Post() {
  return (
    <div className="post">
      <div className="post__wrapper">
        <div className="post__top">
          <div className="post__top-left">
            <img
              src="../../../public/assets/person/Tomoki's-profile.jpg"
              alt="profile"
              className="post__profile-img"
            />
            <span className="post__username">Tomoki</span>
            <span className="post__date">5 mins ago</span>
          </div>
          <div className="post__top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post__center">
          <span className="post__text">test post</span>
          <img
            src="../../../public/assets/post/1.jpeg"
            alt="post"
            className="post__img"
          />
        </div>
        <div className="post__bottom">
          <div className="post__bottom-left">
            <img
              src="../../../public/assets/logos/heart.png"
              alt="like"
              className="post__icon"
            />
            <span className="post__like-counter">5 likes</span>
          </div>

          <div className="post__bottom-right">
            <span className="post__like-text">3:comment</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
