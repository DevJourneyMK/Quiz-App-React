import React from "react";
import { myBasket } from "../App";

const Result = () => {

  const {myScore} = React.useContext(myBasket)

  return <div className="text-4xl flex items-center justify-center h-[100vh] text-white bg-slate-700 text-bold">
<h2>Your Score out of 5 questions is : {myScore}</h2>

  </div>;
};

export default Result;
