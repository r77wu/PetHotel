import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { Button, TextField, Paper, Box, Typography } from "@material-ui/core";
import useStyles from "./styles";

import { signup } from "../../../store/actions/auth";

function SignupForm(props) {
  const { token, error, onSingup } = props;
  const classes = useStyles();
  if (token) {
    return <Redirect to="/" />;
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
            email: "",
            password: "",
            password2: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string().required("Password is required"),
            password2: Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords must match")
              .required("Please confirm password"),
          })}
          onSubmit={(data) => {
            onSingup(data);
          }}
        >
          {() => (
            <Form className={classes.form}>
              <Typography variant="h4" color="textSecondary">
                Sign Up
              </Typography>
              <Box>
                <MyTextField label="Email" name="email" type="text" />
              </Box>
              <Box>
                <MyTextField label="Password" name="password" type="password" />
              </Box>
              <Box>
                <MyTextField
                  label="Confirm Password"
                  name="password2"
                  type="password"
                />
              </Box>
              <Button type="submit" color="secondary">
                Sign Up
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
          Already have an account? <Link to="/login">Log in</Link>
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
    onSingup: (signupForm) => dispatch(signup(signupForm)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
