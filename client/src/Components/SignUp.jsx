import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Grid, Link, Button, Paper, TextField, Typography } from "@mui/material";


const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3001/signup", { name, email, password })
    .then(result=>{
    if (result.status === 201) {
      console.log("Registered  successfully ")
      navigate("/signin");
      }

    })
    .catch(err => {
      if (err.response && err.response.status === 400) {
          window.alert("Email already exists. Please use a different email.");
      } else {
          console.log(err);
      }
  });
  }

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
          <form onSubmit={handleSignup}>
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
            <TextField 
            required
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
            <TextField 
            required
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