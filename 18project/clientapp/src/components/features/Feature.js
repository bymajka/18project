import React from "react";
import "../features/feature.css";

const Features = ({ id, feature_description, icon }) => {
  return (
    <div className="feature" id={id}>
      <img src={icon} alt="list-icon" className="feature_list-element_icon" />
      <p>{feature_description}</p>
    </div>
  );
};

export default Features;
