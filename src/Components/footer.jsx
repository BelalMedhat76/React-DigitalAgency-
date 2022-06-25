import { Component } from "react";
import Social from "./socialIcons";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer-dark">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="#">Web design</a>
                  </li>
                  <li>
                    <a href="#">Development</a>
                  </li>
                  <li>
                    <a href="#">Hosting</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 item text">
                <h3>Company Name</h3>
                <p>
                  Trydo ,Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ut nobis a dolores perspiciatis saepe nemo quisquam id
                  magnam nesciunt velit, distinctio tempore facere maxime minima
                  eveniet consectetur molestiae consequatur quidem?
                </p>
              </div>
              <div className="col item social">
                <Social />
              </div>
            </div>
            <p
              className="copyright"
              style={{ color: "#F2BE22", fontSize: "20px", opacity: "1" }}
            >
              CountZero © 2022
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
