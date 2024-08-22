import React from "react";
import "../about_us/about_us.css";
import about_us_image from "../../assets/svg/about_us_img.svg";
import Feature from "../features/Feature";
import icon from "../../assets/svg/feature_list-element_icon-black_img.svg";

const features = [
  {
    feature_text: "Shared Cloud Libraries, for a single source of truth",
    id: "feature_1",
  },
  {
    feature_text: "Prototype previews for user testing and research",
    id: "feature_2",
  },
  { feature_text: "Easy organization with projects", id: "feature_3" },
  {
    feature_text: "Free developer handoff, right inside the browser",
    id: "feature_4",
  },
  { feature_text: "Two-factor authentication and SSO", id: "feature_5" },
];

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
          {features.map((f) => (
            <Feature
              id={f.id}
              feature_description={f.feature_text}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
