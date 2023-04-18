// Box.jsx
import React from 'react';

const Box = ({ size = 'medium', children }) => {
  const sizeMap = {
    small: '100px',
    medium: '300px',
    large: '500px'
  };

  const sizeValue = sizeMap[size] || sizeMap.medium;

  return (
    <div style={{ backgroundColor: '#eee', width: sizeValue, height: sizeValue }}>
      {children}
    </div>
  );
};

export default Box;
