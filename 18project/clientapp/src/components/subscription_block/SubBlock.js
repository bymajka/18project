import React from "react";
import "./subscription_block.css";
import Feature from "../features/Feature.js";

const FeatureList = ({ features = [], icon }) => {
  return (
    <div className="sub_block-feature_list">
      {features.map((feature, index) => (
        <Feature
          key={index}
          feature_description={feature.description}
          icon={icon}
        />
      ))}
    </div>
  );
};

const SubBlock = ({
  features = [],
  subscription_description = String,
  amount = Number,
  style,
  buttonStyle,
  icon,
}) => {
  return (
    <div className="sub_block" style={style}>
      <div className="sub_block-pricing_info">
        <div className="sub_block-pricing_amount">
          <p className="sub_block-pricing_amount-symbol">$</p>
          <p className="sub_block-pricing_amount-number">{amount}</p>
          <p className="sub_block-pricing_amount-annotation">per month</p>
        </div>
        <p>{subscription_description}</p>
      </div>
      <FeatureList features={features} icon={icon} />
      <button className="sub_block-join_button" style={buttonStyle}>
        Join
      </button>
    </div>
  );
};

export default SubBlock;
