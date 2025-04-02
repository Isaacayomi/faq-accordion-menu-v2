import { useState } from "react";
import "./index.css";

const initialQuestions = [
  {
    id: 1,
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 2,
    question: "Is Frontend Mentor free?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 3,
    question: "Can i use Frontend Mentor projects in my portfolio?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 4,
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
  return (
    <div className="menu-container">
      <Logo />
      <Menu />
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

function Menu() {
  return (
    <ul className="menu">
      {initialQuestions.map((questions) => (
        <Accordion question={questions} key={questions.id} />
      ))}
    </ul>
  );
}

function Accordion({ question }) {
  const [isOpen, setIsOpen] = useState(null);

  function handleClick(id) {
    setIsOpen(id === isOpen ? null : id);
  }
  return (
    <li className="faq-section" onClick={() => handleClick(question.id)}>
      <span>
        <p>{question.question}</p>
        <img src="./images/icon-plus.svg" alt="plus icon" />
      </span>
      <p className="answer">
        {question.id === isOpen ? question.answer : null}
      </p>
    </li>
  );
}

export default App;
