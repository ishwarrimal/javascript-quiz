import React from "react";
import PropTypes from "prop-types";
import './popup.css';

const Popup = ({ show, correct, description, onClose }) => {
  if (!show) return null;

  return (
    <div
      className={`popup ${correct ? "popup-correct" : "popup-wrong"}`}
      onClick={onClose} // Close popup when clicked
    >
      <h3>{correct ? "Correct!" : "Wrong!"}</h3>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
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
