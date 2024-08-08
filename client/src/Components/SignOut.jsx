import React from 'react'
import {Button} from '@mui/material';

const SignOut = () => {
  return (
    <Button
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
        SignOut

    </Button>
  )
}

export default SignOut