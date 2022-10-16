import React from "react";
import "./skill.css";

// import icon images
import HtmlIcon from "../images/icons/html.svg";
import CssIcon from "../images/icons/css.svg";
import JsIcon from "../images/icons/javascript.svg";
import ReactIcon from "../images/icons/react.svg";
import VueIcon from "../images/icons/vue.svg";
import JqueryIcon from "../images/icons/jquery.svg";
import GatsbyIcon from "../images/icons/gatsby.svg";
import WpIcon from "../images/icons/wordpress.svg";
import FirebaseIcon from "../images/icons/firebase.svg";
import PsIcon from "../images/icons/photoshop.svg";
import XdIcon from "../images/icons/xd.svg";
import FigmaIcon from "../images/icons/figma.svg";

function Skill() {
  return (
    <>
      <div className="skill-header">
        <h3>Skills</h3>
      </div>
      <section id="skill">
        <div className="skill-container container">
          <h2>Skills</h2>
          <div className="skill-content">
            <div className="contents">
              <div className="icons">
                <div className="icon">
                  <p>HTML</p>
                  <img src={HtmlIcon} alt="" />
                </div>
                <div className="icon">
                  <p>CSS</p>
                  <img src={CssIcon} alt="" />
                </div>
                <div className="icon">
                  <p>JavaScript</p>
                  <img src={JsIcon} alt="" />
                </div>
                <div className="icon">
                  <p>React</p>
                  <img src={ReactIcon} alt="" />
                </div>
                <div className="icon">
                  <p>Vue</p>
                  <img src={VueIcon} alt="" />
                </div>
                <div className="icon">
                  <p>jQuery</p>
                  <img src={JqueryIcon} alt="" />
                </div>
                <div className="icon">
                  <p>Gtasby</p>
                  <img src={GatsbyIcon} alt="" />
                </div>
                <div className="icon">
                  <p>WordPress</p>
                  <img src={WpIcon} alt="" />
                </div>
                <div className="icon">
                  <p>Firebase</p>
                  <img src={FirebaseIcon} alt="" />
                </div>
                <div className="icon">
                  <p>PhotoShop</p>
                  <img src={PsIcon} alt="" />
                </div>
                <div className="icon">
                  <p>XD</p>
                  <img src={XdIcon} alt="" />
                </div>
                <div className="icon">
                  <p>Figma</p>
                  <img src={FigmaIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skill;
