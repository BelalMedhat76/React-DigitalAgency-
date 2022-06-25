import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Btn from "./Button";
import logo from "../images/logo.png";
import Portfolio from "./portfolio";
import { Link } from "react-router-dom";
class Navv extends Component {
  state = {};
  render() {
    return (
      <>
        <nav className="navbar">
          <a href="#" className="logo ">
            <img src={logo} alt="logo" className="Nav-logo" />
          </a>
          <input type="checkbox" id="toggler" />
          <label htmlFor="toggler">
            <FontAwesomeIcon icon={faBars} id="togg" />
          </label>
          <div className="menu">
            <ul className="list">
              <li>
                <a href="#home" className="link">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="link">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="link">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#blog" className="link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="link">
                  Contact
                </a>
              </li>
              <Btn />
            </ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navv;
