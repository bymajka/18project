import React from "react";
import "./how_it_works.css";
import how_it_works_img from "../../assets/svg/how_it_works_img.svg";
import Advantage from "../advantages/Advantage";
import {
  advantage1,
  advantage2,
  advantage3,
  advantage4,
} from "../../assets/svg/advantages_icons/advantages_imports.js";

const HIW = () => {
  return (
    <div className="how_it_works section__padding" id="hiw">
      <div className="how_it_works-content">
        <div className="article_block">
          <p>How it works</p>
        </div>
        <h1>Building the best space for collaboration.</h1>
        <div className="how_it_works_advantage-list">
          <Advantage
            advantage_list_element_icon={advantage1}
            advantage_header={"Shared Cloud Libraries"}
            advantage_description={
              "Navigate to the Your work panel in the left sidebar. Select the library you want to share. Select the Share icon in the upper right to share the library."
            }
          />
          <Advantage
            advantage_list_element_icon={advantage2}
            advantage_header={"Free developer handoff, right inside"}
            advantage_description={
              "Cloud Inspector makes it easy for developers to get the information they need to turn pixels into code — all in the browser and, most importantly, for free."
            }
          />
          <Advantage
            advantage_list_element_icon={advantage3}
            advantage_header={"Real-time collaborative editing"}
            advantage_description={
              "Room Service helps you build real-time collaborative features. Add real-time data sync! Let users edit the same data at the same time."
            }
          />
          <Advantage
            advantage_list_element_icon={advantage4}
            advantage_header={"Integrations with the Cloud API"}
            advantage_description={
              "Unlocking that value requires an iPaaS that delivers the transformative power of APIs and integration. "
            }
          />
        </div>
      </div>
      <div className="how_it_works-image">
        <img src={how_it_works_img} alt="how_it_works_img" />
      </div>
    </div>
  );
};

export default HIW;
