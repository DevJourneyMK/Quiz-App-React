import "./App.css";
import { createContext, useState, React } from "react";
import HomePage from "./components/HomePage";
import Question from "./components/Question";
import Result from "./components/Result";

export const myBasket = createContext();

function App() {
  const [page, setPage] = useState("homepage");
  const [score, setScore] = useState(0);

  return (
    <>
      <myBasket.Provider
        value={{ mySetPage: setPage, myScore: score, mySetScore: setScore }}
      >
        {page == "homepage" && <HomePage />}
        {page == "question" && <Question />}
        {page == "result" && <Result />}
      </myBasket.Provider>
     
    </>
  );
}
export default App;
