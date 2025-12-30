import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from 'react';
const Header = () => {
  // Never create useState outside of Functional component
  // Its used to create local variable for Functional component
  // Always use useState hook on top of your Functional component
  // Never use useState inside of if else, loop & Functions
  // 
  const [btnName, setBtnName] = useState('Login');

  // If no dependency array means useEffect is called on every render
  // If dependency array is empty = [] => useEffect is called only once on the initial render
  //  If dependency array is [btnName] => called everytime btnName is updayed or changes
  useEffect(() => {
    console.log('useEffect called');
    
  }, [btnName]);
  console.log('Header called');

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo image" />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About US</Link></li>
          <li><Link to="/contact">Contact US</Link></li>
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
