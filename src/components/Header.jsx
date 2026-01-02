import { Link } from "react-router-dom";
import logo from "url:../../logo.png";
import { useState, useEffect } from "react";
const Header = () => {
  // Never create useState outside of Functional component
  // Its used to create local variable for Functional component
  // Always use useState hook on top of your Functional component
  // Never use useState inside of if else, loop & Functions
  //
  const [btnName, setBtnName] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // If no dependency array means useEffect is called on every render
  // If dependency array is empty = [] => useEffect is called only once on the initial render
  //  If dependency array is [btnName] => called everytime btnName is updayed or changes
  useEffect(() => {
    console.log("useEffect called");
  }, [btnName]);
  console.log("Header called");

  return (
    <div className="header flex flex-col md:flex-row justify-between items-center px-5 mb-5 shadow-lg shadow-slate-100 bg-white">
      <div className="flex w-full md:w-auto justify-between items-center h-24">
        <div className="logo-container">
          {/* In some bundler setups, image imports return an object with a default property containing the path */}
          <Link to="/">
            <img
              className="w-24 md:w-32 hover:scale-105 transition-transform duration-200 cursor-pointer"
              src={logo}
              alt="logo image"
            />
          </Link>
        </div>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`nav-items w-full md:w-auto ${
          isMenuOpen ? "block" : "hidden"
        } md:block transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col md:flex-row gap-6 md:gap-10 items-center p-4 md:p-0 text-gray-700 font-medium">
          <li className="hover:text-orange-500 transition-colors duration-200 text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-200 text-lg">
            <Link to="/about">About US</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-200 text-lg">
            <Link to="/contact">Contact US</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-200 text-lg">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors duration-200 text-lg cursor-pointer">
            Cart
          </li>
          <button
            className="px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-all duration-200 shadow-md hover:shadow-lg transform active:scale-95"
            onClick={() => {
              setBtnName((prevBtnName) =>
                prevBtnName === "Login" ? "Logout" : "Login"
              );
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
