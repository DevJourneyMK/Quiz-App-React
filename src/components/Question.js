import React, { useContext, useState } from "react";
import { myBasket } from "../App";

const quizData = [
  {
    Title: "What does HTML stand for ?",
    A: "Hyper Text Markup Language",
    B: "Home Tool Markup Language",
    C: "Hyperlinks and Text Markup Language",
    D: "Hyper Trainer Markup Language",
    Answer: "A",
  },
  {
    Title: "What is use of useState",
    A: "To store the data",
    B: "To create the data",
    C: "To delete the data",
    D: "All of the above",
    Answer: "A",
  },
  {
    Title: "Which of the following is a JavaScript framework/library?",
    A: "Django",
    B: "React",
    C: "Flask",
    D: "Laravel",
    Answer: "B",
  },
  {
    Title: "How do you declare a JavaScript variable?",
    A: "variable carName;",
    B: "let carName;",
    C: "v carName;",
    D: "declare carName;",
    Answer: "B",
  },
  {
    Title: "Which HTML tag is used to define an internal stylesheet?",
    A: "<css>",
    B: "<script>",
    C: "<link>",
    D: "<html>",
    Answer: "C",
  },
];

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChoosen, setOptionChoosen] = useState("");

  const { mySetPage, myScore, mySetScore } = useContext(myBasket);

  const goToNext = () => {
    if (optionChoosen === quizData[currentQuestion].Answer) {
      mySetScore(myScore + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const submitButton = () => {
    if (optionChoosen === quizData[currentQuestion].Answer) {
      mySetScore(myScore + 1);
    }
    mySetPage("result");
  };

  return (
    <div className="d-flex align-items-center vh-100 bg-grey" style={{ paddingLeft: "10%", backgroundColor:"lightBlue"}}>
      <div className="flex-column">
        <h2 className="mb-3 font-bold text-2xl">
          Q: {quizData[currentQuestion].Title} ?
        </h2>

        <div className="container ms-3">
          <div>
            <span>
              A:{" "}
              <button
                onClick={() => setOptionChoosen("A")}
                className="btn btn-outline-dark"
              >
                {quizData[currentQuestion].A}
              </button>
            </span>
          </div>
          <br />

          <div>
            <span>
              B:{" "}
              <button
                onClick={() => setOptionChoosen("B")}
                className="btn btn-outline-dark"
              >
                {quizData[currentQuestion].B}
              </button>
            </span>
          </div>
          <br />

          <div>
            <span>
              C:{" "}
              <button
                onClick={() => setOptionChoosen("C")}
                className="btn btn-outline-dark"
              >
                {quizData[currentQuestion].C}
              </button>
            </span>
          </div>
          <br />

          <div>
            <span>
              D:{" "}
              <button
                onClick={() => setOptionChoosen("D")}
                className="btn btn-outline-dark"
              >
                {quizData[currentQuestion].D}
              </button>
            </span>
          </div>
          <br />
        </div>
        {currentQuestion === quizData.length - 1 ? (
          <button onClick={submitButton} className="btn btn-danger ms-10">
            Submit
          </button>
        ) : (
          <button onClick={goToNext} className="btn btn-primary ms-28">
            Next
          </button>
        )}
      </div>
    </div>
  );
};
export default Question;
