// MyAwesomeComponent.jsx
import React from 'react';
import Box from './Box';
import Text from './Text';
import Button from './Button';

const MyAwesomeComponent = () => {
  const handleClick = () => {
    alert('Mini Componenent Library!');
  };

  //this is where all the magic happens
  return (
    <Box size="medium">
      <Text size="small" color="#333">My Awesome Component!</Text>
      <Button color="#0000FF" onClick={handleClick}>Change me!</Button>
    </Box>
  );
};

export default MyAwesomeComponent;
