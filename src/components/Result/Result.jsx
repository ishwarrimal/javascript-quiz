import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetQuiz } from "../../store/quizSlice";
import "./Result.css";

const Result = () => {
  const dispatch = useDispatch();
  const { score } = useSelector((state) => state.quiz);

  const handleRestart = () => {
    dispatch(resetQuiz());
  };

  return (
    <div className="result">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score}</p>
      <button onClick={handleRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
