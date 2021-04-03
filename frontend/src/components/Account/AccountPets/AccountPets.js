import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  TextField,
  Button,
  Grid,
} from "@material-ui/core";
import { Formik, Form, useField, Field } from "formik";
import * as Yup from "yup";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./styles";
import {
  fetchPets,
  updatePetProfile,
  deletePet,
} from "../../../store/actions/profile";
import PetRegisterForm from "../../Reservation/HotelReservation/PetRegisterForm/PetRegisterForm";

const AccountPets = (props) => {
  const { pets, onFetchPets, onUpdatePet, onDeletePet } = props;
  const classes = useStyles();
  const [openRegisterPets, setOpenRegisterPets] = useState(false);
  useEffect(() => {
    onFetchPets();
  }, []);
  const handleDeletePet = (id) => {
    onDeletePet(id);
  };
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
    <Box className={classes.container}>
      <Grid container justify="space-between">
        <Grid item>
          <Typography variant="h4" color="textSecondary">
            Pets
          </Typography>
        </Grid>
        <Grid item>
          <Button color="secondary" onClick={() => setOpenRegisterPets(true)}>
            Add A Pet
          </Button>
        </Grid>
      </Grid>
      {pets.map((pet) => (
        <Accordion key={pet.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
          >
            <Box className={classes.column}>
              <Typography variant="subtitle1" color="textSecondary">
                {pet.name}
              </Typography>
            </Box>
            <Box className={classes.column}>
              <Typography variant="body2" color="textSecondary">
                {pet.breed}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            <Formik
              initialValues={{
                name: pet.name,
                age: pet.age,
                gender: pet.gender,
                breed: pet.breed,
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Required"),
                age: Yup.string().required("Required"),
                gender: Yup.string().required("Required"),
                breed: Yup.string().required("Required"),
              })}
              onSubmit={(data) => {
                onUpdatePet(pet.id, data);
              }}
            >
              {() => (
                <Form>
                  <Typography variant="h6" color="textSecondary">
                    Update {`${pet.name}'s`} profile
                  </Typography>
                  <Box>
                    <MyTextField label="Name" name="name" type="text" />
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" color="textSecondary">
                      Age:
                    </Typography>
                    <label style={{ color: "black" }}>
                      <Field type="radio" name="age" value="Adult" />
                      Adult
                    </label>
                    <label style={{ color: "black" }}>
                      <Field type="radio" name="age" value="Puppy" />
                      Puppy
                    </label>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" color="textSecondary">
                      Gender:
                    </Typography>
                    <label style={{ color: "black" }}>
                      <Field type="radio" name="gender" value="Male" />
                      Male
                    </label>
                    <label style={{ color: "black" }}>
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
                  <Button
                    color="secondary"
                    onClick={() => handleDeletePet(pet.id)}
                  >
                    Delete Pet
                  </Button>
                </Form>
              )}
            </Formik>
          </AccordionDetails>
        </Accordion>
      ))}
      {openRegisterPets ? (
        <PetRegisterForm setOpenPetForm={setOpenRegisterPets} />
      ) : null}
    </Box>
  );
};

const mapStateToProps = (state) => ({
  pets: state.profile.pets,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPets: () => {
      dispatch(fetchPets());
    },
    onUpdatePet: (id, updateForm) => {
      dispatch(updatePetProfile(id, updateForm));
    },
    onDeletePet: (id) => {
      dispatch(deletePet(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountPets);
