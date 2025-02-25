import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaGithub } from "react-icons/fa";
import quizData from '../../assets/data';
import "./Header.css";

const Header = () => {
  const { score, currentQuestion } = useSelector((state) => state.quiz);
  const [stars, setStars] = useState(0);

  useEffect(() => {
    const fetchStars = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/ishwarrimal/javascript-quiz");
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        console.error("Error fetching star count:", error);
      }
    };

    fetchStars();
  }, []);

  return (
    <header className="header">
      <h1>MCQ Quiz Game</h1>
      <p>
        Question {currentQuestion + 1} / {quizData.length} | Score: {score}
      </p>
      <a 
        href="https://github.com/ishwarrimal/javascript-quiz" 
        target="_blank" 
        rel="noopener noreferrer"
        className="github-link"
      >
        <FaGithub size={30} />
        <span>{stars} Stars</span>
      </a>
    </header>
  );
};

export default Header;