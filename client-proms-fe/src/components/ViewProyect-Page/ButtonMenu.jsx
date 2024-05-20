import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton, Typography } from '@mui/material';

const ButtonMenu = ({ icon: Icon, label, to, ...props }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
        <IconButton 
        color="inherit" 
        {...props}
        sx={{
            '&:hover': {
            backgroundColor: '#194970'
            },
            '&:active': {
            backgroundColor: '#001f3e'
            }
        }}
        >
        <Icon sx={{ mr: 1 }} />
        <Typography variant="body2">{label}</Typography>
        </IconButton>
    </Link>
  );
};

export default ButtonMenu;
