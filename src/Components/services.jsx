import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faAutomobile,
  faBaseballBall,
  faBookAtlas,
  faBottleWater,
  faBowlingBall,
  faChartLine,
  faLayerGroup,
  faPeopleGroup,
  faRainbow,
} from "@fortawesome/free-solid-svg-icons";

import Footer from "./footer";
class Services extends Component {
  state = {};
  render() {
    return (
      <>
        <div
          className="container-fluid "
          id="services"
          style={{ margin: "100px 0 60px 0" }}
        >
          <div className="services-head  animate__animated animate__backInUp animate__slow">
            <h1 style={{ fontSize: "60px", fontWeight: "900" }}>Services</h1>
            <p style={{ fontSize: "20px" }}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
              <p>
                There are many variations of passages of Lorem Ipsum available,
              </p>
            </p>

            <a className="services-link" href="#">
              Request Custom Services ..
            </a>
            {/* <div className="line  animate__animated animate__backInUp animate__infinite  animate__slow"></div> */}
          </div>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card card-style h-100">
                <div className="card-body ">
                  <div className="card-title">
                    <FontAwesomeIcon
                      className="card-title-icon"
                      icon={faChartLine}
                    />
                    <h1 style={{ fontSize: "25px", marginBottom: "10px " }}>
                      Business Stratagy{" "}
                    </h1>
                  </div>
                  <p className="card-text">
                    I throw myself down among the tall grass by the stream as I
                    lie close to the earth.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 card-style">
                <div className="card-body">
                  <div className="card-title">
                    {" "}
                    <FontAwesomeIcon
                      className="card-title-icon"
                      icon={faLayerGroup}
                    />
                    <h1 style={{ fontSize: "25px", marginBottom: "10px " }}>
                      Website Development
                    </h1>
                  </div>
                  <p className="card-text">
                    I throw myself down among the tall grass by the stream as I
                    lie close to the earth.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 card-style">
                <div className="card-body">
                  <div className="card-title">
                    <FontAwesomeIcon
                      className="card-title-icon"
                      icon={faPeopleGroup}
                    />
                    <h1 style={{ fontSize: "25px", marginBottom: "10px " }}>
                      Marketing & Reporting
                    </h1>
                  </div>
                  <p className="card-text">
                    I throw myself down among the tall grass by the stream as I
                    lie close to the earth.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 card-style">
                <div className="card-body">
                  <div className="card-title">
                    {" "}
                    <FontAwesomeIcon
                      className="card-title-icon"
                      icon={faLayerGroup}
                    />
                    <h1 style={{ fontSize: "25px", marginBottom: "10px " }}>
                      Website Development
                    </h1>
                  </div>
                  <p className="card-text">
                    I throw myself down among the tall grass by the stream as I
                    lie close to the earth.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 card-style">
                <div className="card-body">
                  <div className="card-title">
                    {" "}
                    <FontAwesomeIcon
                      className="card-title-icon"
                      icon={faArrowUpRightFromSquare}
                    />
                    <h1 style={{ fontSize: "25px", marginBottom: "10px " }}>
                      Mobile App Development
                    </h1>
                  </div>
                  <p className="card-text">
                    I throw myself down among the tall grass by the stream as I
                    lie close to the earth.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card h-100 card-style">
                <div className="card-body">
                  <div className="card-title">
                    {" "}
                    <FontAwesomeIcon
                      className="card-title-icon"
                      icon={faRainbow}
                    />
                    <h1 style={{ fontSize: "25px", marginBottom: "10px " }}>
                      Website Development
                    </h1>
                  </div>
                  <p className="card-text">
                    I throw myself down among the tall grass by the stream as I
                    lie close to the earth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Services;
