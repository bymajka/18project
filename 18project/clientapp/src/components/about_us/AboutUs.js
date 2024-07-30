import React from "react";
import "../about_us/about_us.css";
import about_us_image from "../../assets/svg/about_us_img.svg";
import Feature from "../features/Feature";
import icon from "../../assets/svg/feature_list-element_icon-black_img.svg";

const AboutUs = () => {
  return (
    <div className="about_us section__padding" id="about-us">
      <div className="about_us-image">
        <img src={about_us_image} alt="about_us_image" />
      </div>
      <div className="about_us-content">
        <div className="article_block">
          <p>About us</p>
        </div>
        <h1>Faster, friendlier feedback loops make life easier.</h1>
        <p>
          Add a Viewer to your team so they can see everything you share, or
          invite people to individual documents. It’s up to you. Stakeholders
          can check out designs in their web browser, test prototypes and leave
          feedback for free.
        </p>
        <div className="about_us-feature_list">
          <Feature
            feature_description="Shared Cloud Libraries, for a single source of truth"
            icon={icon}
          />
          <Feature
            feature_description="Prototype previews for user testing and research"
            icon={icon}
          />
          <Feature
            feature_description="Easy organization with projects"
            icon={icon}
          />
          <Feature
            feature_description="Free developer handoff, right inside the browser"
            icon={icon}
          />
          <Feature
            feature_description="Two-factor authentication and SSO"
            icon={icon}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
