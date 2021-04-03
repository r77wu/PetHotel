import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { Button, TextField, Paper, Box, Typography } from "@material-ui/core";
import useStyles from "./styles";

import { login } from "../../../store/actions/auth";

function LoginForm(props) {
  const { token, error, onLogin, history, location } = props;

  const classes = useStyles();

  if (token && location.state && location.state.next) {
    history.push(location.state.next);
  }
  const MyTextField = ({ label, type, ...props }) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
      <TextField
        label={label}
        {...field}
        helperText={errorText}
        error={!!errorText}
        className={classes.inputfield}
        type={type}
      />
    );
  };
  return (
    <Box className={classes.mainContainer}>
      <Paper className={classes.container}>
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          validationSchema={Yup.object({
            username: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string().required("Required"),
          })}
          onSubmit={(data) => {
            onLogin(data);
          }}
        >
          {() => (
            <Form className={classes.form}>
              <Typography variant="h4" color="textSecondary">
                Log In
              </Typography>
              <Box>
                <MyTextField label="Email" name="username" type="text" />
              </Box>
              <Box>
                <MyTextField label="Password" name="password" type="password" />
              </Box>
              <Button type="submit" color="secondary">
                Log In
              </Button>
            </Form>
          )}
        </Formik>
        {error ? (
          <Typography variant="subtitle1" className={classes.error}>
            {error}
          </Typography>
        ) : null}
        <Typography variant="subtitle1" color="textSecondary">
          New customer? <Link to="signup">Join now</Link>
        </Typography>
      </Paper>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (loginForm) => dispatch(login(loginForm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
