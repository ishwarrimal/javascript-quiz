import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Header/Header";
import Question from "./components/Questions/Question";
import Result from "./components/Result/Result";
import AboutGame from "./components/About/About"; // Import AboutGame component
import "./App.css";

const App = () => {
  const { completed } = useSelector((state) => state.quiz);
  const [showAbout, setShowAbout] = useState(false);

  // Function to toggle the visibility of the About Game section
  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div className="App">
      <Header />
      {showAbout ? (
        <AboutGame toggleAbout={toggleAbout} />
      ) : !completed ? (
        <Question />
      ) : (
        <Result />
      )}

      {/* Button to toggle About Game section */}
      <button onClick={toggleAbout} className="about-button">
        About Game
      </button>
    </div>
  );
};

export default App;
