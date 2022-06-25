import { Component } from "react";
import Social from "./socialIcons";
import playicon from "../images/playicon.png";
import Navv from "./Nav";
import Footer from "./footer";
class AboutNext extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="about-next" id="aboutNext">
          <div className="about-header">
            <h1 style={{ color: "#F2BE22" }}>
              Getting tickets to the big show
            </h1>
            <p style={{ color: "#F2BE22" }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.{" "}
            </p>
          </div>
        </div>
        <div className="aboutNext-content">
          <h1 style={{ color: " #F2BE22" }}>Trydo</h1>
          <div className="line"></div>
          <p style={{ fontSize: "20px", fontWeight: "500" }}>
            There are many variations of passages of Lorem Ipsum available, but{" "}
          </p>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "500",
              marginBottom: "25px",
            }}
          >
            the majority have suffered alteration in some form.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commod viverra maecenas
            accumsan lacus vel facilisis. ut labore et dolore magna aliqua.{" "}
          </p>
          <div className="container-fluid" style={{ marginTop: "50px" }}>
            <div className="row">
              <div className="col">
                <p style={{ color: "#F2BE22" }}>Branch</p>
                <h2> Ability</h2>
              </div>
              <div className="col">
                <p style={{ color: "#F2BE22" }}>Project Types</p>
                <h2>Website</h2>
              </div>
              <div className="col">
                <p style={{ color: "#F2BE22" }}>Program</p>
                <h2>View Project</h2>
              </div>
            </div>
          </div>
          <div className="align-icon">
            {" "}
            <Social />
          </div>
        </div>
        <div className="About-videos">
          <button
            id="btn-videos"
            style={{
              width: "60px",
              borderRadius: "50%",
              border: " solid white ",
            }}
          >
            {" "}
            <a href="https://youtu.be/ZOoVOfieAF8">
              {" "}
              <img
                src={playicon}
                className="play-icon"
                style={{ width: "100%", borderRadius: "45%" }}
              />
            </a>
          </button>
        </div>
        <div
          className="container "
          style={{ marginTop: "80px", marginBottom: "80px" }}
        >
          <div className="about2-head">
            <p>Related Work</p>
            <h1>Our More Projects</h1>
          </div>
          <div className="row">
            <div className="col  about-img1">
              <h1>Digital Analysis</h1>
              <p>Technique</p>
            </div>
            <div className="col about-img2">
              <h1>Plan Management</h1>
              <p>PLANNING</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutNext;
