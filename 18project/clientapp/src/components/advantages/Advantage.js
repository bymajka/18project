import React from "react";
import "./advantage.css";

function Advantage({
  advantage_list_element_icon,
  advantage_header,
  advantage_description,
}) {
  return (
    <div className="advantage">
      <img src={advantage_list_element_icon} alt="advantage_icon" />
      <div className="advantage-content">
        <p className="advantage_header">{advantage_header}</p>
        <p className="advantage_description">{advantage_description}</p>
      </div>
    </div>
  );
}

export default Advantage;
