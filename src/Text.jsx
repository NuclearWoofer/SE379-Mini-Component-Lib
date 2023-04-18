// Text.jsx
import React from 'react';

const Text = ({ size = 'medium', color = '#0000FF', children }) => {
  const fontSize = {
    small: '12pt',
    medium: '20pt',
    large: '40pt'
  };

  const sizeValue = fontSize[size] || fontSize.medium;

  return (
    <span style={{ fontSize: sizeValue, color }}>
      {children}
    </span>
  );
};

export default Text;
