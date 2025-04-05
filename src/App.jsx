import { useState } from "react";
import "./index.css";

const initialQuestions = [
  {
    id: Math.random(),
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: Math.random(),
    question: "Is Frontend Mentor free?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: Math.random(),
    question: "Can i use Frontend Mentor projects in my portfolio?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: Math.random(),
    question: "How can i get help if i'm stuck on a challenge?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
];

function App() {
  return (
    <div className="container">
      <MenuContainer />
    </div>
  );
}

function MenuContainer() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className="menu-container">
      <Logo />
      <Menu isOpen={isOpen} onIsOpen={setIsOpen} />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo-header">
      <span className="logo-image">
        <img src="./images/icon-star.svg" alt="logo" />
      </span>
      <span className="heading">
        <h1>FAQs</h1>
      </span>
    </div>
  );
}

function Menu({ onIsOpen, isOpen }) {
  return (
    <ul className="menu">
      {initialQuestions.map((questions) => (
        <Accordion
          question={questions}
          onIsOpen={onIsOpen}
          isOpen={isOpen}
          key={questions.id}
        />
      ))}
    </ul>
  );
}

function Accordion({ question, onIsOpen, isOpen }) {
  function handleClick(id) {
    onIsOpen(id === isOpen ? null : id);
  }
  return (
    <li className="faq-section" onClick={() => handleClick(question.id)}>
      <span>
        <p className="heading-question">{question.question}</p>
        {question.id === isOpen ? (
          <img src="./images/icon-minus.svg" alt="minus icon" />
        ) : (
          <img src="./images/icon-plus.svg" alt="plus icon" />
        )}
      </span>
      <p className="answer">
        {question.id === isOpen ? question.answer : null}
      </p>
    </li>
  );
}

export default App;
