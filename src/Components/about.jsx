import { Component } from "react";
import about from "../images/about.jpg";
import Footer from "./footer";
class About extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid" id="about">
        <div className="row row-cols-1 row-cols-md-2  g-4 ">
          <div className="col  ">
            <img src={about} className="about-img" alt="" />
          </div>
          <div className="col" style={{ padding: "15% 3% 10% 5%" }}>
            <div className="about-inner-section">
              <h1>About Us</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which dont look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum,
              </p>

              <div className="row row-cols-1 row-cols-md-2 g-4 ">
                <div className="col" style={{ padding: "20px" }}>
                  <h1 style={{ fontSize: "30px", fontWeight: "600" }}>
                    Who we are
                  </h1>
                  <p>
                    There are many vtions of passages of Lorem Ipsum available,
                    but the majority have suffered.
                  </p>
                </div>
                <div className="col" style={{ padding: "20px" }}>
                  {" "}
                  <h1 style={{ fontSize: "30px", fontWeight: "600" }}>
                    Who we are
                  </h1>
                  <p>
                    There are many vtions of passages of Lorem Ipsum available,
                    but the majority have suffered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
