import React from "react";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import "./popup.css";

const Popup = ({ show, correct, description, onClose }) => {
  if (!show) return null;

  return (
    <div className={`popup-overlay`}>
      <div className={`popup ${correct ? "popup-correct" : "popup-wrong"}`}>
        <h3>{correct ? "Correct!" : "Wrong!"}</h3>
        <ReactMarkdown>{description}</ReactMarkdown>
        <button className="popup-done-button" onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  );
};

Popup.propTypes = {
  show: PropTypes.bool.isRequired, // Whether to show the popup
  correct: PropTypes.bool, // Whether the answer was correct
  description: PropTypes.string, // Explanation for the answer
  onClose: PropTypes.func.isRequired, // Function to handle popup close
};

export default Popup;
