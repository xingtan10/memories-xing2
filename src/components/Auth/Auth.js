import React, { useState } from "react";
import {
  Avatar,
  Button,
  Typography,
  Paper,
  Grid,
  Container,
} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import Icon from "./icon";
// import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { gapi } from "gapi-script";
import { LockOutlined } from "@material-ui/icons";
import useStyles from "./styles";
import Input from "../Input/Input";
import { useDispatch } from "react-redux";
import { AUTH } from "../../reducers/auth";
import { signIn, signUp } from "../../actions/auth";
import { useNavigate } from "react-router-dom";
const clientId =
  "700515260401-j13v8sk0dc13k1bqhls8ll67ks4d1h9j.apps.googleusercontent.com";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setisSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    if (isSignUp) {
      dispatch(signUp(formData, navigate));
    } else {
      dispatch(signIn(formData, navigate));
    }
  };

  // useEffect(() => {
  //   console.log(isSignUp);
  // });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const switchMode = () => {
    setisSignUp((prevIsSignUp) => !prevIsSignUp);
    // handleShowPassword(false);
  };

  const onLoginSuccess = async (res) => {
    const result = res?.profileObj;
    const tokenId = res?.tokenId;
    navigate("/");
    // console.log("Login Success:", res.profileObj, res.tokenId);
    // const data = { result, tokenId };
    try {
      // dispatch({ type: AUTH, payload: { result, tokenId } });
      dispatch(AUTH({ result, tokenId }));
    } catch (err) {
      console.log(err);
    }
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  // const onSignoutSuccess = () => {
  //   alert("You have been logged out successfully");
  //   console.clear();
  // };

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant="h5">{isSignUp ? "Sign up" : "Sign in"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />

                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          {gapi.load("client:auth2", () => {
            gapi.client.init({ clientId: { clientId } });
          })}
          <GoogleLogin
            clientId={clientId}
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign in
              </Button>
            )}
            onSuccess={onLoginSuccess}
            onFailure={onLoginFailure}
            cookiePolicy={"single_host_origin"}
            // isSignedIn={true}
          />
          {/* <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
            useOneTap
          /> */}

          {/* <GoogleLogin
            clientId="700515260401-snqvgc8d8bgkij1uj935s0unl9la7d7v.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign in
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          /> */}
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? "Already have an account ? Sign in"
                  : "Dont have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
