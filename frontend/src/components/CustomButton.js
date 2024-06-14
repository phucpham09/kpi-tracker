// CustomButton.js
import React from 'react';
import PropTypes from 'prop-types';
import './CustomButton.css'; // Create a corresponding CSS file for button styles

const CustomButton = ({ title, handlePress, containerStyles }) => {
  return (
    <button className={`button ${containerStyles}`} onClick={handlePress}>
      {title}
    </button>
  );
}

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  handlePress: PropTypes.func.isRequired,
  containerStyles: PropTypes.string,
};

export default CustomButton;