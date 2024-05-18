// CustomButton.jsx
import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({ children, ...props }) => {
  return (
    <Button 
      {...props}
      sx={{ 
        backgroundColor: '#003162',
        color: '#FFFFFF',
        '&:hover': {
          backgroundColor: '#0b3b62',
        }
      }}
      style={{ fontFamily: 'Open Sans' }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
