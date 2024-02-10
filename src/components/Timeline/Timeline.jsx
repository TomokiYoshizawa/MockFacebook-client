import React from "react";
import Share from "../Share/Share";
import Post from "../Post/Post";
import { Posts } from "../../dummyData";

import "./Timeline.scss";

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__wrapper">
        <Share />
        {Posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
