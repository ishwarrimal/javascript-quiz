import React from "react";
import { useSelector } from "react-redux";
import quizData from '../../assets/data';
import "./Header.css";

const Header = () => {
  const { score, currentQuestion } = useSelector((state) => state.quiz);

  return (
    <header className="header">
      <h1>MCQ Quiz Game</h1>
      <p>
        Question {currentQuestion + 1} / {quizData.length} | Score: {score}
      </p>
    </header>
  );
};

export default Header;
