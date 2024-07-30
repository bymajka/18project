import React, { useState } from "react";
import "./question.css";
import question_icon from "../../assets/svg/question_icon.svg";
import answer_icon from "../../assets/svg/answer_icon.svg";

const Question = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="question-container">
      <div className="question" onClick={toggleAnswer}>
        {question}
        <img
          src={isOpen ? answer_icon : question_icon}
          alt="icon"
          className="question-answer-icon"
        />
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

export default Question;
