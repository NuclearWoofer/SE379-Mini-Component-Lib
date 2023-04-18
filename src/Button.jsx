// Button.js
import React from 'react';

const Button = ({ color = '#ccc', onClick, children }) => {
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
