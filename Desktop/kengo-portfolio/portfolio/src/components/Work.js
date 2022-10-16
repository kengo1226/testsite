import React from "react";
import "./work.css";

import WorkImg from "../images/work-img1.png";

function Work() {
  return (
    <>
      <div className="works-header">
        <h3>Works</h3>
      </div>
      <div className="works-container">
        <h2>Works</h2>
        <div className="works-content">
          <div className="contents">
            <h4>I am creating a front end project</h4>
            <p>
              I mainly use Javascript to create web applications and websites. I
              upload our creations on a regular basis. I would like many people
              to see my work.
            </p>
            <a className="btn-blue" href="">
              Read More
            </a>
          </div>
          <img src={WorkImg} alt="work-img" />
        </div>
      </div>
    </>
  );
}

export default Work;
