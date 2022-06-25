import { Component } from "react";
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faGithub,
  faWhatsapp,
  faInstagram,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Social extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="Social-icon" style={{ color: "white" }}>
          <FontAwesomeIcon icon={faFacebook} className="icon fly1" />
          <FontAwesomeIcon icon={faInstagram} className="icon fly2" />

          <FontAwesomeIcon icon={faTwitter} className="icon fly3 " />
          <FontAwesomeIcon icon={faWhatsapp} className="icon " />
        </div>
      </>
    );
  }
}

export default Social;
