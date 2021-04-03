import React from "react";
import { connect } from "react-redux";
import { Formik, Form, useField, Field } from "formik";
import * as Yup from "yup";
import { Box, TextField, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import { registerPet } from "../../../../store/actions/profile";

const PetRegisterForm = (props) => {
  const { setOpenPetForm, onRegisterPet } = props;
  const classes = useStyles();
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
    <Box className={classes.formContainer}>
      <Formik
        initialValues={{
          name: "",
          age: "",
          gender: "",
          breed: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required"),
          age: Yup.string().required("Required"),
          gender: Yup.string().required("Required"),
          breed: Yup.string().required("Required"),
        })}
        onSubmit={(data) => {
          onRegisterPet(data);
          setOpenPetForm(false);
        }}
      >
        {() => (
          <Form>
            <Typography variant="h6" color="textSecondary">
              Register your pet
            </Typography>
            <Box>
              <MyTextField label="Name" name="name" type="text" />
            </Box>
            <Box>
              <Typography variant="subtitle1" color="textSecondary">
                Age:
              </Typography>
              <label>
                <Field type="radio" name="age" value="Adult" />
                Adult
              </label>
              <label>
                <Field type="radio" name="age" value="Puppy" />
                Puppy
              </label>
            </Box>
            <Box>
              <Typography variant="subtitle1" color="textSecondary">
                Gender:
              </Typography>
              <label>
                <Field type="radio" name="gender" value="Male" />
                Male
              </label>
              <label>
                <Field type="radio" name="gender" value="Female" />
                Female
              </label>
            </Box>
            <Box>
              <MyTextField label="Breed" name="breed" type="text" />
            </Box>
            <Button type="submit" color="secondary">
              Save
            </Button>
            <Button color="secondary" onClick={() => setOpenPetForm(false)}>
              Close
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    onRegisterPet: (PetRegisterForm) => {
      dispatch(registerPet(PetRegisterForm));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PetRegisterForm);
