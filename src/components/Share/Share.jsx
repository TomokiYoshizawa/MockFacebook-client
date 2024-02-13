/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { React, useContext, useRef, useState } from "react";
import { AuthContext } from "../../state/AuthContext";
import axios from "axios";

import ImageIcon from "@mui/icons-material/Image";
import GifIcon from "@mui/icons-material/Gif";
import FaceIcon from "@mui/icons-material/Face";
import AnalyticsIcon from "@mui/icons-material/Analytics";

import "./Share.scss";

function Share() {
  const PUBLIC_FOLDER = import.meta.env.VITE_SERVER_PUBLIC_FOLDER;
  const SERVER_URL = import.meta.env.VITE_SERVER_URL;

  const { user } = useContext(AuthContext);
  const description = useRef();

  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      description: description.current.value,
    };

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;

      try {
        //use upload API to upload the file
        await axios.post(`${SERVER_URL}/upload`, data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post(`${SERVER_URL}/posts`, newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="share">
      <div className="share__wrapper">
        <div className="share__top">
          <img
            src={
              user.profilePicture
                ? PUBLIC_FOLDER + `/person/${user.profilePicture}`
                : PUBLIC_FOLDER + "/person/noAvatar.png"
            }
            alt="profile"
            className="share__profile-img"
          />
          <input
            type="text"
            className="share__input"
            placeholder="what's up?"
            ref={description}
          />
        </div>
        <hr className="share__hr" />
        <form className="share__button-container" onSubmit={handleSubmit}>
          <div className="share__options">
            <label className="share__option" htmlFor="file">
              <ImageIcon className="share__icon" htmlColor="blue" />
              <span className="share__text">Picture</span>
              <input
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                className="share__img-input"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="share__option">
              <GifIcon className="share__icon" htmlColor="hotpink" />
              <span className="share__text">Gif</span>
            </div>
            <div className="share__option">
              <FaceIcon className="share__icon" htmlColor="green" />
              <span className="share__text">Feel</span>
            </div>
            <div className="share__option">
              <AnalyticsIcon className="share__icon" htmlColor="red" />
              <span className="share__text">Vote</span>
            </div>
          </div>
          <button className="share__button" type="submit">
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Share;
