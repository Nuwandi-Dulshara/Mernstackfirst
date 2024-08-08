import React from 'react'
import { Grid, Paper, TextField, Button, Typography, Link } from '@mui/material';

const SignUp = () => {
  return (
    <>
    <Grid 
        container
        justifyContent="center"
        alignItems="center"
        sx={{ mt: '50px' }}
      >
        <Paper
          sx={{ 
            padding: '20px',
            width: '500px',
            textAlign: 'center',
            boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
            borderRadius: '10px'
          }}
        >
          <Typography 
            variant="h4"  
            component="h2"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            Sign Up
          </Typography>
          <form >
            <TextField required
              label="Username" 
              margin="normal"
              type='text'
              name="name" 
              onChange={(e) => setName(e.target.value)}
              sx={{ 
                width: '450px', 
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                  '& input': {
                    padding: '15px', 
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', 
                  },
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: '1px solid black',
                },
              }}
            />
            <TextField required
              label="Email" 
              margin="normal"
              type='email'
              name="email" 
              onChange={(e) => setEmail(e.target.value)}
              sx={{ 
                width: '450px', 
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                  '& input': {
                    padding: '15px', 
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', 
                  },
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: '1px solid black',
                },
              }}
            />
            <TextField required
              label="Password" 
              margin="normal"
              type="password"
              name="password" 
              onChange={(e) => setPassword(e.target.value)}
              sx={{ 
                width: '450px', 
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                  '& input': {
                    padding: '15px', 
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', 
                  },
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: '1px solid black',
                },
              }}
            />
            <Button 
              variant="contained" 
              type='submit'
              sx={{
                mt: 2,
                width: '150px',
                backgroundColor: '#B47EE2',
                border: '2px solid white',
                borderRadius: '15px',
                color: 'black',
                fontWeight: 'bold',
                height: '40px',
                fontSize: '18px',
                textTransform: 'capitalize',
                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.5)',
                '&:hover': {
                  color: 'white',
                  backgroundColor: '#7C18C3',
                  boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)',
                }
              }}
            >
              REGISTER
            </Button>
          </form>
          <Typography 
            variant="body2" 
            component="p" 
            sx={{ 
              mt: 2,
              fontWeight: 'bold',
              fontSize: '20px',
            }}
          >
            Already Have An Account?{' '}
            <Link href="/signin" sx={{ color: '#7C18C3' }}>
              Login
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  )
}

export default SignUp