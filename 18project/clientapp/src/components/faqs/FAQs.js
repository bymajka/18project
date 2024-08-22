import React from "react";
import faqs_image from "../../assets/svg/faqs_img.svg";
import "./faqs.css";
import Question from "../questions/Question";

const questions = [
  {
    question: "How much does a Teams subscription cost?",
    answer:
      "Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don’t include sales tax, which may still apply. Head over to our pricing page to get full details.",
    id: "question_1",
  },
  {
    question: "Do I still need to purchase licenses for the Mac app?",
    answer:
      "Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don’t include sales tax, which may still apply. Head over to our pricing page to get full details.",
    id: "question_2",
  },
  {
    question: "What are the differences between Contributors and Viewers?",
    answer:
      "Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don’t include sales tax, which may still apply. Head over to our pricing page to get full details.",
    id: "question_3",
  },
  {
    question: "How long does the free Teams subscription trial last?",
    answer:
      "Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don’t include sales tax, which may still apply. Head over to our pricing page to get full details.",
    id: "question_4",
  },
  {
    question: "Will program for Teams replace volume licensing?",
    answer:
      "Contributors are members of your team who need access to use the Mac app to create and edit Sketch documents. These prices don’t include sales tax, which may still apply. Head over to our pricing page to get full details.",
    id: "question_5",
  },
];

const FAQs = () => {
  return (
    <div className="faqs section__padding" id="faqs">
      <div className="faqs-content">
        <div className="article_block">
          <p>FAQs</p>
        </div>
        <div className="faqs_intro">
          <h1>Common Questions.</h1>
          <p>
            The online form also provides links to a set of frequently asked
            questions, other information materials related to the financial
            disclosure programme.
          </p>
        </div>
        <div className="faqs_questions-list">
          {questions.map((q) => (
            <Question question={q.question} answer={q.answer} id={q.id} />
          ))}
        </div>
      </div>
      <div className="faqs-image">
        <img src={faqs_image} alt="FAQs_image" />
      </div>
    </div>
  );
};

export default FAQs;
