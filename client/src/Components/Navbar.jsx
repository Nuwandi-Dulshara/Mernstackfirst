import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SignOut from './SignOut';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#B47EE2',}}>
      <Toolbar>
        <Typography
          sx={{
            flexGrow: 1,
            color: 'black',
            fontWeight: 'bold',
            fontSize: '22px',
          }}
        >
          Disney Craft
        </Typography>
        <Button
          component={Link}
          to='/signin'
          variant='contained'
          sx={{ 
            backgroundColor: '#B47EE2' ,
            border: '2px solid white',
            borderRadius: '15px',
            color: 'white',
            margin: '0 15px',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100px',
            height: '40px',
            fontSize: '18px',
            textTransform: 'capitalize',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 1)',
            '&:hover': {
              backgroundColor: '#7C18C3',
              boxShadow: '0px 6px 8px rgba(0, 0, 0, 1)',
            }
         }} 
        >
          Sign In
        </Button>
        <Button
          component={Link}
          to='/signup'
          variant='contained'
          sx={{ 
            backgroundColor: '#B47EE2' ,
            border: '2px solid white',
            borderRadius: '15px',
            color: 'white',
            margin: '0 15px',
            fontWeight: 'bold',
            textAlign: 'center',
            width: '110px',
            height: '40px',
            fontSize: '18px',
            textTransform: 'capitalize',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 1)',
            '&:hover': {
              backgroundColor: '#7C18C3',
              boxShadow: '0px 6px 8px rgba(0, 0, 0, 1)',
            }
         }} 
        >
          Sign Up
        </Button>
        <SignOut/>
        
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
