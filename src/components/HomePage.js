import React from "react";
import { myBasket } from "../App.js";

const HomePage = () => {
  const { mySetPage } = React.useContext(myBasket);

  const goToQuestion = () => {
    mySetPage("question");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-gray-700">
      <button onClick={goToQuestion} className="btn btn-outline-success font-bold">
        Start Quiz
      </button>
    </div>
  );
};

export default HomePage;
