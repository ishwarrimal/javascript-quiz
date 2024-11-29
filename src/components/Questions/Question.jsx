import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { answerQuestion } from "../../store/quizSlice";
import quizData from '../../assets/data'
import Popup from "../Popup/Popup";
import "./Questions.css";

const Question = () => {
  const dispatch = useDispatch();
  const { currentQuestion, completed } = useSelector((state) => state.quiz);
  const question = quizData[currentQuestion];

  const [popup, setPopup] = useState({
    show: false,
    correct: false,
    description: "",
  });

  const closePopup = () => {
    setPopup({ show: false, correct: false, description: "" });
    dispatch(answerQuestion({ isCorrect: popup.correct })); // Dispatch the Redux action after closing the popup
  };

  const handleAnswer = (selectedChoice) => {
    // Extract the correct answer from the `answer` string in the data
    const correctAnswer = question.answer.match(/\(#answer-([a-d])\)/)?.[1];
    // Check if the selected choice matches the correct answer
    const isCorrect = selectedChoice.toLowerCase() === correctAnswer;

    const explanation = question.answer.split("\n\n").slice(1).join("\n\n");

    setPopup({
      show: true,
      correct: isCorrect,
      description: explanation,
    });
  };

  console.log('Ishwar ', completed, currentQuestion)
  if(completed) return <p>Game Completed</p>;

  const extractRawCode = (html) => {
    // Using regular expression to remove HTML tags and get raw JavaScript code
    const htmlContent = html.replace(/<[^>]+>/g, '');
    return htmlContent;
  };

  const decodeHtmlEntities = (str) => {
    const doc = new DOMParser().parseFromString(str, "text/html");
    return doc.documentElement.textContent;
  };

  return (
    <div className="question-container">
      <h2>{question.title}</h2>
        <SyntaxHighlighter language="javascript" style={solarizedlight}>
          {question.code && decodeHtmlEntities(question.code)}
        </SyntaxHighlighter>
      
      <div className="choices">
        {question.choices.map((choice, index) => {
          const answer = choice.split(':')[0];
          return <button
            key={index}
            className="choice-button"
            onClick={() => handleAnswer(answer)}
          >
            {choice}
          </button>
        
      })}
      </div>
      <Popup
        show={popup.show}
        correct={popup.correct}
        description={popup.description}
        onClose={closePopup}
      />
    </div>
  );
};

export default Question;
