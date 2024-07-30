import React from "react";
import footer_logo from "../../assets/img/logo_white.png";
import "./footer.css";
import {
  social_yt,
  social_tw,
  social_in,
  social_gl,
  social_fb,
} from "../../assets/svg/social_media_icons/social_media_imports.js";
import handleScroll from "../../handleScroll.js";

const Footer = () => {
  return (
    <div className="wrap_footer">
      <div className="footer">
        <div className="footer_cta-content">
          <div className="footer_cta-block_logo">
            <img src={footer_logo} alt="Logo Image" />
          </div>
          <h1>
            Want to recieve our <br /> awesome stories?
          </h1>
          <div className="footer_cta-content__input">
            <input
              type="email"
              placeholder="Enter your email"
              id="email_footer"
            />
            <button className="button">Subscribe</button>
          </div>
          <p>© The 18 Design, All rights reserved.</p>
        </div>
        <div className="footer_links">
          <div className="footer_info-links">
            <div className="footer_info-links_email">
              <p className="footer_info-links_email_label">Email</p>
              <p>info@the18.design</p>
            </div>
            <div className="footer_webapp-links">
              <a href="#about-us" onClick={(e) => handleScroll(e, "about-us")}>
                About us
              </a>
              <a href="#hiw" onClick={(e) => handleScroll(e, "hiw")}>
                How it works
              </a>
              <a href="#pricing" onClick={(e) => handleScroll(e, "pricing")}>
                Pricing
              </a>
              <a href="#faqs" onClick={(e) => handleScroll(e, "faqs")}>
                FAQs
              </a>
            </div>
            <div className="footer_additional-links">
              <a>Lead generation</a>
              <a>Customer engagement</a>
              <a>Customer support</a>
              <a>Help Center Articles</a>
              <a>Outbound Messages</a>
            </div>
          </div>
          <div className="footer_social-media_links">
            <img src={social_fb} alt="facebook_logo" />
            <img src={social_tw} alt="twitter_logo" />
            <img src={social_gl} alt="google_logo" />
            <img src={social_in} alt="linkedIn_logo" />
            <img src={social_yt} alt="youtube_logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
