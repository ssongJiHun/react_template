import * as React from "react";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormHelperText, Card , Button, CssBaseline, TextField, Box, Typography, Container} from "@mui/material";
import "./index.css";
import axios from '../../utils/axios';

import { useNavigate } from 'react-router-dom';

const theme = createTheme();



const SignIn = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordState] = useState("");
  const navigate = useNavigate();

  const onhandlePost = async (data) => {
    
    await axios.post('/account/signIn', {
      email: 'tlqkffus1', 
      password: '123'
    })
    .then((res) => {
       localStorage.setItem('user', JSON.stringify(res.data.data, ['accessToken', 'refreshToken']))
       navigate(`/home`);
    })
    .catch((err)=>{
      console.log(err)  
    })


  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const loginData = {
      userEmail: data.get("email"),
      userPassword: data.get("password"),
    };
    const { userEmail, userPassword } = loginData;
    onhandlePost(loginData);
    // const emailRegex =
    //   /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    // if (!emailRegex.test(userEmail))
    //   setEmailError("올바른 이메일 형식이 아닙니다.");
    // else setEmailError("");

    // const passwordRegex =
    //   /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    // if (!passwordRegex.test(userPassword))
    //   setPasswordState("숫자+영문자+특수문자 8자리");
    // else setPasswordState("");

    // if (emailRegex.test(userEmail) && passwordRegex.test(userPassword)) {
    //   onhandlePost(loginData);
    // }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Card className="Card_style" elevation={5}>
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              SOTHECODE ERP 
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={emailError !== "" || false}
              />
              <FormHelperText className="error_message">
                {emailError}
              </FormHelperText>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                error={passwordError !== "" || false}
              />
              <FormHelperText className="error_message">
                {passwordError}
              </FormHelperText>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default SignIn;
