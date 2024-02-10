/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react"; // useStateのインポートを追加

import MoreVert from "@mui/icons-material/MoreVert";

import { Users } from "../../dummyData";

import "./Post.scss";

function Post({ post }) {
  const [like, setLike] = useState(post.like); // 変数名を setLike に変更（慣習に従う）
  const [isLiked, setIsLiked] = useState(false);

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
              src={
                Users.filter((user) => user.id === post.id)[0].profilePicture
              }
              alt="profile"
              className="post__profile-img"
            />
            <span className="post__username">
              {Users.filter((user) => user.id === post.id)[0].username}
            </span>
            <span className="post__date">{post.date}</span>
          </div>
          <div className="post__top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post__center">
          <span className="post__text">{post.description}</span>
          <img src={post.photo} alt="post" className="post__img" />
        </div>
        <div className="post__bottom">
          <div className="post__bottom-left">
            <img
              src="../../../public/assets/logos/heart.png"
              alt="like"
              className="post__icon"
              onClick={handleLike} // アロー関数を直接渡す必要はない
            />
            <span className="post__like-counter">{like} likes</span>{" "}
            {/* "likes"を追加 */}
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
