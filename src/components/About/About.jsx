import React from "react";
import PropTypes from "prop-types";
import "./About.css"; // Styling for modal

const AboutGameModal = ({ toggleAbout }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>About the Game</h1>
        <p>
          Welcome to the Quiz Game! This is a fun way to test your knowledge on
          JavaScript concepts. The game provides you with a series of
          questions, and you need to choose the correct answer. Enjoy the game and
          challenge yourself to get a perfect score!
        </p>
        <p>
          <strong>Your Name:</strong> Ishwar Rimal
        </p>
        <p>
          <strong>GitHub Repo:</strong>{" "}
          <a href="https://github.com/yourusername/quiz-game-repo" target="_blank" rel="noopener noreferrer">
            https://github.com/yourusername/quiz-game-repo
          </a>
        </p>

        <div className="thank-you-section">
          <h3>Credits</h3>
          <p>
            Special thanks to <strong>Lydia Hallie</strong> for letting me use her
            questions in this game. 🙏
            <a href="https://github.com/lydiahallie/javascript-questions" target="_blank" rel="noopener noreferrer">
            https://github.com/lydiahallie/javascript-questions
          </a>
          </p>
        </div>

        <button onClick={toggleAbout} className="close-about-button">
          Close
        </button>
      </div>
    </div>
  );
};

AboutGameModal.propTypes = {
  toggleAbout: PropTypes.func.isRequired, // Function to toggle visibility of About Game modal
};

export default AboutGameModal;
