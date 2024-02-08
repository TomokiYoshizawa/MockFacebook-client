import React from "react";
import Share from "../Share/Share";
import Post from "../Post/Post";

import "./Timeline.scss";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__wrapper">
        <Share />
        <Post />
      </div>
    </div>
  );
}

export default Timeline;
