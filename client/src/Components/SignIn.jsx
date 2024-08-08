import { Grid, Paper, TextField, Button, Typography, Link } from '@mui/material';
import React from 'react'

const SignIn = () => {
  return (
    <>
      <Grid 
        container
        justifyContent="center"
        alignItems="center"
        sx={{ 
          mt: '50px', 
        }}
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
            sx={{ 
              fontWeight: 'bold',
            }}
          >
            Sign In
          </Typography>
          <form>
            <TextField 
              label="Username" 
              margin="normal"
              type='text'
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
            <TextField 
              label="Password" 
              margin="normal"
              type="password"
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
                  color:'white',
                  backgroundColor: '#7C18C3',
                  boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.2)',
                }
              }}
            >
              LOGIN
            </Button>
          </form>
          <Typography 
          variant="body2" 
          component="p" 
          sx={{ 
            mt: 2,
            fontWeight:'bold',
            fontSize: '20px',
             }}>
            Don't You Have An Account?{' '}
            <Link href="/signup" sx={{ color: '#7C18C3' }}>
              Register
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  )
}

export default SignIn