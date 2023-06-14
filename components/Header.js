import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnText, setBtnText] = useState("Login");

  return (
    <div className="header">
      <img className="header-logo" src={LOGO_URL} alt="logo" />
      <div className="rev-items">
        <ul>
          <li> Home</li>
          <li> About Us</li>
          <li> Contact Us</li>
          <li>
            <button
              className="Login-btn"
              onClick={() => {
                setBtnText("logout");
              }}
            >
              {btnText}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
