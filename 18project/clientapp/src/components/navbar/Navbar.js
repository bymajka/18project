import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import menu_icon from "../../assets/svg/menu_icon.svg";
import "./navbar.css";
import handleScroll from "../../handleScroll";

const Menu = () => (
  <>
    <p>
      <a href="#about-us" onClick={(e) => handleScroll(e, "about-us")}>
        About Us
      </a>
    </p>
    <p>
      <a href="#hiw" onClick={(e) => handleScroll(e, "hiw")}>
        How It Works
      </a>
    </p>
    <p>
      <a href="#pricing" onClick={(e) => handleScroll(e, "pricing")}>
        Pricing
      </a>
    </p>
    <p>
      <a href="#faqs" onClick={(e) => handleScroll(e, "faqs")}>
        FAQs
      </a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <a href="#header">
            <img src={logo} alt="Logo Image"></img>
          </a>
        </div>
        <div className="navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar-sign">
        <button className="login">Login</button>
        <button className="sign-up">Sign up</button>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <button
            className="menu_button"
            size={27}
            onClick={() => setToggleMenu(false)}
          >
            <img src={menu_icon} alt="menu_icon" />
          </button>
        ) : (
          <button
            className="menu_button"
            size={27}
            onClick={() => setToggleMenu(true)}
          >
            <img src={menu_icon} alt="menu_icon" />
          </button>
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <Menu />
              <div className="navbar-menu_container-links-sign">
                <button className="login">Login</button>
                <button className="sign-up">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
