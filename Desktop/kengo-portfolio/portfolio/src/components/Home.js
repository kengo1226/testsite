import React from "react";
import "./home.css";

// import components

// import images
import AboutImg from "../images/about-img.jpg";
import WorkImg from "../images/work-img1.png";
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

function Home() {
  return (
    <>
      <section id="hero">
        <div className="hero-container container">
          <div className="hero-content">
            <h2>
              Welcome to <br></br> My Portfolio
            </h2>
            <h4>KENGO IWAMOTO</h4>
            <p>Dream are necessary to life.</p>
            <a className="btn-blue">Go Around</a>
          </div>
        </div>
      </section>
      <section id="about">
        <div className="about-container">
          <h2>About</h2>
          <div className="about-content">
            <img src={AboutImg} alt="about-img" />
            <div className="contents">
              <h4>Hi My name is Kengo Iwamoto. </h4>
              <p>
                Welcome to my portfolio. I am a front-end web developer based in
                Tokyo, Japan. Recently, I've been working hard to improve my
                front-end technical skills, focusing on studying React. This
                portfolio was also created as a SPA using React. My favorite
                phrase is Dream is necessary to life. Always have a dream, only
                move forward!
              </p>
              <a className="btn-blue" href="">
                About me
              </a>
            </div>
          </div>
        </div>
      </section>
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

      <section id="works">
        <div className="works-container">
          <h2>Works</h2>
          <div className="works-content">
            <div className="contents">
              <h4>I am creating a front end project</h4>
              <p>
                I mainly use Javascript to create web applications and websites.
                I upload our creations on a regular basis. I would like many
                people to see my work.
              </p>
              <a className="btn-blue" href="">
                Read More
              </a>
            </div>
            <img src={WorkImg} alt="work-img" />
          </div>
        </div>
      </section>

      <footer>
        <p>Copyrights by Kengo Iwamoto</p>
      </footer>
    </>
  );
}

export default Home;
