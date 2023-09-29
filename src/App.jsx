import "./App.css";
import FlashCard from "./FlashCard";
import { useState } from "react";

function App() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    if (currentCardIndex === flashCardData.length - 1) {
      return;
    }
    const nextIndex = currentCardIndex + 1;
    setCurrentCardIndex(nextIndex);
  };

  const prevCard = () => {
    if (currentCardIndex === 0) {
      return;
    }
    const prevIndex = currentCardIndex - 1;
    setCurrentCardIndex(prevIndex);
  };

  const currentCard = flashCardData[currentCardIndex];

  return (
    <div className="container">
      <h1>Ultimate Coding Legend Test!</h1>
      <h2>Test your coding fundamentals with these flashcards!</h2>
      <h3>Number of Cards: {flashCardData.length}</h3>
      <FlashCard question={currentCard.question} answer={currentCard.answer} />
      <div>
        <button
          className={currentCardIndex === 0 ? "hidden" : ""}
          onClick={prevCard}
        >
          ⭠
        </button>
        <button
          className={
            currentCardIndex === flashCardData.length - 1 ? "hidden" : ""
          }
          onClick={nextCard}
        >
          ⭢
        </button>
      </div>
    </div>
  );
}

export default App;

const flashCardData = [
  {
    question: "What is the difference between a function and a method?",
    answer:
      "A function is a block of code that can be called by name. A method is a function that belongs to an object.",
  },
  {
    question: "What is the DOM?",
    answer:
      "The DOM (Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content dynamically.",
  },
  {
    question: "What is HTTP?",
    answer:
      "HTTP (Hypertext Transfer Protocol) is an application protocol used for transmitting hypermedia documents, such as HTML. It is the foundation of any data exchange on the Web.",
  },
  {
    question: "Explain the concept of 'scope' in JavaScript.",
    answer:
      "Scope determines the visibility and accessibility of variables in JavaScript. It defines where variables can be accessed or referenced in your code.",
  },
  {
    question: "What is the purpose of CSS?",
    answer:
      "CSS (Cascading Style Sheets) is used for styling HTML documents. It defines the layout, colors, fonts, and other visual aspects of web pages.",
  },
  {
    question: "What is a data structure?",
    answer:
      "A data structure is a way of organizing and storing data to perform operations efficiently. Examples include arrays, linked lists, and trees.",
  },
  {
    question: "What is an algorithm?",
    answer:
      "An algorithm is a step-by-step procedure for solving a problem or accomplishing a task. It's a sequence of well-defined instructions.",
  },
  {
    question: "What is a variable in programming?",
    answer:
      "A variable is a symbolic name given to a piece of data in a program. It is used to store and manipulate data during program execution.",
  },
  {
    question: "Explain the concept of 'object-oriented programming' (OOP).",
    answer:
      "OOP is a programming paradigm that uses objects to structure and organize code. It promotes modularity and reusability by representing real-world entities as objects.",
  },
  {
    question: "What is a loop in programming?",
    answer:
      "A loop is a control structure that repeats a set of instructions until a specific condition is met. It's used for performing repetitive tasks.",
  },
  // Add more questions and answers here
];
