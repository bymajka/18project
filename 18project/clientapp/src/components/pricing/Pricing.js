import React from "react";
import "./pricing.css";
import pricing_image from "../../assets/svg/pricing_img.svg";
import SubBlock from "../subscription_block/SubBlock.js";

import featureIconBlack from "../../assets/svg/feature_list-element_icon-black_img.svg";
import featureIconWhite from "../../assets/svg/feature_list-element_icon-white_img.svg";

// Define all subscription plans in an array
const subscriptionPlans = [
  {
    features: [
      { description: "The Mac app — yours to keep" },
      { description: "Beautiful White_level" },
      { description: "One year of saving to Cloud" },
    ],
    subscription_description: "A pay-once license, just for you",
    amount: 49,
    style: { backgroundColor: "#f0f0f0", border: "1px solid #151515" },
    icon: featureIconBlack,
  },
  {
    features: [
      { description: "The Mac app — yours to keep" },
      { description: "One year of Mac app updates" },
      { description: "One year of saving to Cloud" },
      { description: "A personal Cloud workspace" },
      { description: "All tools, just for you" },
    ],
    subscription_description: "Pro account, just for you",
    amount: 99,
    style: { backgroundColor: "#151515", color: "#ffffff", border: "none" },
    buttonStyle: { backgroundColor: "#ffffff", color: "#151515" },
    icon: featureIconWhite,
  },
  {
    features: [
      { description: "Access to the Mac app for all" },
      { description: "A shared Cloud workspace" },
      { description: "Free Cloud access for unlim" },
      { description: "Easy team management" },
      { description: "No license key required" },
    ],
    subscription_description: "A subscription for the whole team",
    amount: 299,
    style: { backgroundColor: "#ffffff", color: "#151515", border: "none" },
    icon: featureIconBlack,
  },
];

const Pricing = () => {
  return (
    <div className="pricing section__padding" id="pricing">
      <div className="pricing-intro">
        <div className="pricing-image">
          <img src={pricing_image} alt="pricing_image" />
        </div>
        <div className="pricing-content">
          <div className="article_block">
            <p>Pricing</p>
          </div>
          <h1>Select a membership level the right price for you.</h1>
          <p>
            Prices listed in USD. Taxes may apply. <br /> By using program you
            agree to our terms and policies.
          </p>
        </div>
      </div>
      <div className="pricing_membership-subscriptions">
        {subscriptionPlans.map((plan, index) => (
          <SubBlock
            key={index}
            subscription_description={plan.subscription_description}
            features={plan.features}
            amount={plan.amount}
            style={plan.style}
            buttonStyle={plan.buttonStyle}
            icon={plan.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
