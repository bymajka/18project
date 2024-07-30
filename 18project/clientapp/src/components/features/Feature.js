import React from "react";
import "../features/feature.css";

const Features = ({ feature_description, icon }) => {
  return (
    <div className="feature">
      <img src={icon} alt="list-icon" className="feature_list-element_icon" />
      <p>{feature_description}</p>
    </div>
  );
};

export default Features;
