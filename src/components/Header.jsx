import { LOGO_URL } from "../utils/constants";
import {useState} from 'react';
const Header = () => {
  const [btnName, setBtnName] = useState('Login');

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo image" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
          <li>Cart</li>
          <button
            className="login-button"
            onClick={() => {
              setBtnName(prevBtnName => prevBtnName === "Login" ? "Logout" : "Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
