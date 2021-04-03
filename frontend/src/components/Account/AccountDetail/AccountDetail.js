import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import useStyles from "./styles";

import {
  fetchProfile,
  updateAccountDetail,
} from "../../../store/actions/profile";

const AccountDetail = (props) => {
  const { onGetProfile, onUpdateProfile, profile } = props;
  const classes = useStyles();
  const formikRef = useRef();
  useEffect(() => {
    onGetProfile();
  }, []);

  useEffect(() => {
    if (formikRef.current) {
      formikRef.current.setFieldValue("first_name", profile.first_name);
      formikRef.current.setFieldValue("last_name", profile.last_name);
      formikRef.current.setFieldValue("phone", profile.phone);
    }
  }, [profile]);

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
    <Box>
      <Formik
        innerRef={formikRef}
        initialValues={{
          first_name: profile.first_name,
          last_name: profile.last_name,
          phone: profile.phone,
        }}
        validationSchema={Yup.object({
          first_name: Yup.string(),
          last_name: Yup.string(),
          phone: Yup.string(),
        })}
        onSubmit={(data) => {
          onUpdateProfile(data);
        }}
      >
        {() => (
          <Form className={classes.form}>
            <Typography variant="h5" color="textSecondary">
              Account Detail
            </Typography>
            <Box>
              <MyTextField label="First Name" name="first_name" type="text" />
            </Box>
            <Box>
              <MyTextField label="Last Name" name="last_name" type="text" />
            </Box>
            <Box>
              <MyTextField label="Phone" name="phone" type="text" />
            </Box>
            <Button type="submit" color="secondary">
              Save
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile.accountDetail,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetProfile: () => {
      dispatch(fetchProfile());
    },
    onUpdateProfile: (updatedForm) => {
      dispatch(updateAccountDetail(updatedForm));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountDetail);
